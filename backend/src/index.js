import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Hello from the Class PLanner Backend!");
});

app.listen(process.env.PORT, () =>
  console.log(`Backend listening on port ${process.env.PORT}!`)
);
