// // This file contains route functions of index.js so that it is more practical to see and search functions and make the index.js more clear
// var router = require("express").Router();
// const uri = process.env.DATABASE_URI;
// const mongodb = require("mongodb");
// const client = new mongodb.MongoClient(uri, { useUnifiedTopology: true });
// client.connect();
// // const studentService = {
// //   getAllClasses: (req, res) => {
// //     client
// //       .db("admins")
// //       .collection("code")
// //       .find()
// //       .toArray((error, tracks) => {
// //         res.send(error || tracks);
// //       });
// //   },

// // };

// router.get("/location", function (req, res) {
//   console.log(uri);
//   client
//     .db("admins")
//     .collection("location")
//     .find({})
//     .toArray()
//     .then((locations) => res.status(200).send(locations).end())
//     .catch((error) => res.status(500).send(error).end());
// });

// // router.use("/admins", studentService.getAllClasses);
// module.exports = router;
