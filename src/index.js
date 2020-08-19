require("dotenv/config");
const cors = require("cors");
const express = require("express");

const uri = process.env.DATABASE_URI;

const app = express();
const mongodb = require("mongodb");
const client = new mongodb.MongoClient(uri, { useUnifiedTopology: true });

app.use(express.json());

const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

client.connect(function () {
  const db = client.db("attendance");
  const collection = db.collection("students");

  app.get("/", (req, res) => {
    res.send("<h2>You can search the students now!</h2>");
  });

  //shows all students attendance
  app.get("/attendance/student", function (req, res) {
    const client = new mongodb.MongoClient(uri);

    client.connect(() => {
      collection.find().toArray((error, result) => {
        res.send(error || result);
        client.close();
      });
    });
  });

  // allows students to post: Name, Email Address and code
  app.post("/attendance", (req, res) => {
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
    };

    collection.insertOne(addAttendance, function (error, result) {
      if (error) {
        res.status(500).send(error);
      }
      res.status(200).send(result.ops[0]);

      client.close;
    });
  });
});

client.connect(function () {
  const db = client.db("admins");
  const collection = db.collection("code");

  //shows all classes
  app.get("/admins", function (req, res) {
    const client = new mongodb.MongoClient(uri);
    client.connect(() => {
      collection.find().toArray((error, tracks) => {
        res.send(error || tracks);
        client.close();
      });
    });
  });

  //creates classes with code
  app.post("/admins", (req, res) => {
    const classCode = {
      location: req.body.location,
      type: req.body.type,
      code: req.body.code,
    };

    collection.insertOne(classCode, (error, result) => {
      if (error) {
        res.status(500).send(error);
      }
      res.status(200).send(result.ops[0]);

      client.close;
    });
  });
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
