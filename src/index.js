require("dotenv/config");
// var studentService = require("./student-service"); This is to use the functions in student - service.js
const cors = require("cors");
const express = require("express");

const uri = process.env.DATABASE_URI;
const example = require("./student-service");
const app = express();
const mongodb = require("mongodb");

const ObjectID = mongodb.ObjectID;
const client = new mongodb.MongoClient(uri, { useUnifiedTopology: true });

// app.use(express.json());
// app.use("/example", example)

const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var randomWords = require("random-words");

// app.use(studentService); This is to use the functions in student-service.js

app.get("/", (req, res) => {
  res.send("<h2>You can search the students now!</h2>");
});

// https://syllabus.codeyourfuture.io/

app.get("/abc", (req, res) => {
  res.status(301).redirect("https://syllabus.codeyourfuture.io");

  // if (req.url == "/abc") {
  //   res.writeHead(301, {
  //     Location: "https://syllabus.codeyourfuture.io/",
  //   });
  res.end();
  // }
});

app.get("/attendance/student", function (req, res) {
  let filter = {};

  if (req.query.location) {
    filter["class_code.location._id"] = new ObjectID(req.query.location);
  }

  if (req.query.group) {
    filter["class_code.group._id"] = new ObjectID(req.query.group);
  }

  if (req.query.type) {
    filter["class_code.type"] = req.query.type;
  }

  if (req.query.module) {
    filter["class_code.syllabus._id"] = new ObjectID(req.query.module);
  }

  if (req.query.lesson) {
    filter["class_code.lesson._id"] = new ObjectID(req.query.lesson);
  }

  client
    .db("attendance")
    .collection("students")
    .find(filter)
    .toArray()
    .then((locations) => res.status(200).send(locations).end())
    .catch((error) => res.status(500).send(error).end());
});

// ------------------------Student Attendance History
app.get("/studentsView/history", function (req, res) {
  // const searchObject = {email: req.query.email};

  client
    .db("attendance")
    .collection("students")
    // .filter((user) => user.email === searchObject)
    .find({ email: { $eq: req.query.email } })
    .toArray(function (error, tracks) {
      res.send(error || tracks);
    });
});

// create a  /attendance page which includes a form. Our form allow students to enter: Name, Email Address, Date
app.post("/attendance", (req, res) => {
  const admindb = client.db("admins");

  admindb
    .collection("code")
    .findOne({ code: { $eq: req.body.code } })

    .then(function (result) {
      if (!result) {
        return Promise.reject(new Error("Invalid code"));
      }

      return result;
    })

    .then((result) => {
      const db = client.db("attendance");
      const collection = db.collection("students");
      let today = new Date();
      let date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      let time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      const addAttendance = {
        name: req.body.name,
        email: req.body.email,
        date: date.toString(),
        time: time.toString(),
        // location: req.body.location,
        // type: req.body.type,
        code: req.body.code,
        notes: req.body.notes,

        class_code: {
          ...result,
          attendees: null,
        },
      };

      return admindb
        .collection("code")
        .findOneAndUpdate(
          { _id: { $eq: result._id } },
          { $push: { attendees: addAttendance } }
        )
        .then(() => collection.insertOne(addAttendance));
    })
    .then(function (result) {
      res.status(200).send(result.ops[0]).end();
    })
    .catch(function (err) {
      return res.status(500).send({ message: err.message }).end();
    });
});

// location--------------------------

app.get("/location", function (req, res) {
  client
    .db("admins")
    .collection("location")
    .find({})
    .toArray()
    .then((locations) => res.status(200).send(locations).end())
    .catch((error) => res.status(500).send(error).end());
});

app.post("/location", function (req, res) {
  client
    .db("admins")
    .collection("location")
    .insertOne({
      name: req.body.name,
      groups: [],
    })
    .then((result) => res.status(200).send(result.ops[0]).end());
});

app.delete("/location/:id", function (req, res) {
  const id = new mongodb.ObjectID(req.params.id);
  const searchObject = { _id: id };
  client
    .db("admins")
    .collection("location")
    .deleteOne(searchObject)
    .then((location) => res.status(200).send(location).end())
    .catch((error) => res.status(500).send(error).end());
});

app.get("/location/:id", function (req, res) {
  // id = {id: mongodb.ObjectID(req.params.id)};
  // var id = new ObjectID(req.params.id);

  const id = new mongodb.ObjectID(req.params.id);
  const searchObject = { _id: id };
  client
    .db("admins")
    .collection("location")
    .findOne(searchObject)
    .then((location) => res.status(200).send(location).end())
    .catch((error) => res.status(500).send(error).end());
});

app.delete("/location/:id/group/:groupId", function (req, res) {
  const id = new mongodb.ObjectID(req.params.id);
  const groupId = new mongodb.ObjectID(req.params.groupId);

  console.log("location, group", id, groupId);

  const searchObject = { _id: id };
  client
    .db("admins")
    .collection("location")
    .findOne(searchObject)
    .then((location) => {
      const newGroups = location.groups.filter(
        (group) => !group._id.equals(groupId)
      );
      //location.groups.splice(index, 1);

      //console.log(location);

      client
        .db("admins")
        .collection("location")
        .updateOne(searchObject, { $set: { groups: newGroups } })
        .then((result) => res.status(200).send(result).end())
        .catch((error) => res.status(500).send(error).end());
    })

    .catch((error) => res.status(500).send(error).end());
});

app.delete("/location/:id", function (req, res) {
  const id = new mongodb.ObjectID(req.params.id);
  const searchObject = { _id: id };
  client
    .db("admins")
    .collection("location")
    // .deleteOne(searchObject)

    // .then((result) => res.status(200).send(result).end())
    // .catch((error) => res.status(500).send(error).end());

    .deleteOne(searchObject, function (error, result) {
      if (error) {
        res.status(500).send(error);
      } else if (result.deletedCount) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    });
});

app.post("/location/:id/group", function (req, res) {
  var group = { _id: new ObjectID(), name: req.body.name };

  client
    .db("admins")
    .collection("location")
    .findOneAndUpdate(
      // search operation
      { _id: { $eq: new ObjectID(req.params.id) } },

      // update operation
      { $push: { groups: group } }
    )
    .then((result) => res.status(200).send(group).end())
    .catch((error) => res.status(500).send(error).end());
});

//shows all classes
app.get("/admins", function (req, res) {
  client
    .db("admins")
    .collection("code")
    .find()
    .toArray((error, tracks) => {
      res.send(error || tracks);
    });
});

// get single class
app.get("/admins/:id", function (req, res) {
  client
    .db("admins")
    .collection("code")
    .findOne({ _id: { $eq: new ObjectID(req.params.id) } })
    .then((result) => res.status(200).send(result).end())
    .catch((error) => res.status(500).send(error.message).end());
});
//get single location class

//creates classes with code
app.post("/admins", (req, res) => {
  const classCode = {
    location: {
      _id: new ObjectID(req.body.location._id),
      name: req.body.location.name,
    },
    group: {
      _id: new ObjectID(req.body.group._id),
      name: req.body.group.name,
    },
    type: req.body.type,
    date: new Date(req.body.date + " " + req.body.time),
    time: req.body.time,
    code: randomWords({ exactly: 2, join: " " }),
    syllabus: {
      _id: new ObjectID(req.body.syllabus._id),
      module: req.body.syllabus.module,
    },
    lesson: {
      _id: new ObjectID(req.body.lesson._id),
      name: req.body.lesson.name,
    },
  };

  client
    .db("admins")
    .collection("code")
    .insertOne(classCode)
    .then((result) =>
      res
        .status(200)
        .send({ _id: result.ops[0]._id, ...classCode })
        .end()
    )
    .catch((error) => res.status(500).send(error.message).end());
});

//syllabus -------------------------------

app.get("/syllabus", function (req, res) {
  client
    .db("admins")
    .collection("syllabus")
    .find({})
    .toArray()
    .then((syllabus) => res.status(200).send(syllabus).end())
    .catch((error) => res.status(500).send(error).end());
});

app.post("/syllabus", function (req, res) {
  client
    .db("admins")
    .collection("syllabus")
    .insertOne({
      module: req.body.module,
      lesson: [],
    })
    .then((result) => res.status(200).send(result.ops[0]).end());
});

app.post("/syllabus/:id/lesson", function (req, res) {
  var lesson = { _id: new ObjectID(), name: req.body.name };

  client
    .db("admins")
    .collection("syllabus")
    .findOneAndUpdate(
      // search operation
      { _id: { $eq: new ObjectID(req.params.id) } },

      // update operation
      { $push: { lesson: lesson } }
    )
    .then((result) => res.status(200).send(lesson).end())
    .catch((error) => res.status(500).send(error).end());
});

//delete Module

app.delete("/admin/syllabus/:id", function (req, res) {
  const id = new mongodb.ObjectID(req.params.id);
  const searchObject = { _id: id };
  client
    .db("admins")
    .collection("syllabus")
    .deleteOne(searchObject)
    .then((result) => res.status(200).send(result).end())
    .catch((error) => res.status(500).send(error).end());
});

//delete lesson-------------
app.delete("/syllabus/:id/lesson/:lessonId", function (req, res) {
  const id = new mongodb.ObjectID(req.params.id);
  const lessonId = new mongodb.ObjectID(req.params.lessonId);

  const searchObject = { _id: id };
  client
    .db("admins")
    .collection("syllabus")
    .findOne(searchObject)
    .then((module) => {
      const newLessons = module.lesson.filter(
        (lesson) => !lesson._id.equals(lessonId)
      );
      //location.groups.splice(index, 1);

      //console.log(location);

      client
        .db("admins")
        .collection("syllabus")
        .updateOne(searchObject, { $set: { lesson: newLessons } })
        .then((result) => res.status(200).send(result).end())
        .catch((error) => res.status(500).send(error).end());
    })

    .catch((error) => res.status(500).send(error).end());
});

//outh
app.post("/login/create-user", function (req, res) {
  var userParam = {
    socialId: req.body.socialId,
    displayName: req.body.displayName,
    email: req.body.email,
  };

  client
    .db("admins")
    .collection("user")
    .findOne(
      // search operation
      { email: userParam.email }
    )
    .then((user) => {
      if (user) {
        return res.status(200).send(user).end();
      }
      user = {};
      user.email = userParam.email;
      user.name = userParam.displayName;
      user.role = "student";
      user.password = "";
      client
        .db("admins")
        .collection("user")
        .insertOne(user)
        .then((result) => res.status(200).send(user).end())
        .catch((error) => res.status(500).send(error).end());
    })

    .catch((error) => res.status(500).send(error).end());
});

//-------------------------------------
app.get("/admin/users", function (req, res) {
  client
    .db("admins")
    .collection("user")
    .find({})
    .toArray()
    .then((user) => res.status(200).send(user).end())
    .catch((error) => res.status(500).send(error).end());
});

app.post("/admin/users/:id", function (req, res) {
  client
    .db("admins")
    .collection("user")
    .findOneAndUpdate(
      { _id: new ObjectID(req.params.id) },
      { $set: { role: req.body.role } }
    )
    .then((user) => res.status(200).send(user).end())
    .catch((error) => res.status(500).send(error).end());
});

app.delete("/admin/users/:id", function (req, res) {
  const id = new mongodb.ObjectID(req.params.id);
  const searchObject = { _id: id };
  client
    .db("admins")
    .collection("user")
    .deleteOne(searchObject)
    .then((user) => res.status(200).send(user).end())
    .catch((error) => res.status(500).send(error).end());
});

client
  .connect()
  .then(() =>
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  );
