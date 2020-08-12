import "dotenv/config";
import cors from "cors";
import express from "express";

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
  const db = client.db("attandence");
  const collection = db.collection("students");

  app.get("/", (req, res) => {
    res.send("<h2>You can search the students now!</h2>");
  });

  // create a  /attendance page which includes a form. Our form allow students to enter: Name, Email Address, Date
  app.post("/attendance", (req, res) => {
    const addAttandence = {
      name: req.body.name,
      email: req.body.email,
      date: new Date(),
      myClass: req.body.myClass,
      type:req.body.type
    };

    collection.insertOne(addAttandence, function (error, result) {
      if (error) {
        res.status(500).send(error);
      }
      res.status(200).send(result.ops[0]);

      client.close;
    });
  });
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
