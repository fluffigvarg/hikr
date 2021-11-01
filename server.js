import express from "express";
import Hike from "./db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.get("/api/v1/hikes", function(req, res) {
   Hike.estimatedDocumentCount().exec(function(err, count) {
       var random = Math.floor(Math.random() * count);
       Hike.findOne().skip(random).exec(
           function(err, result) {
               res.send(result);
           }
       );
   });
});
app.get("*", (req, res) => res.status(404).send("resource not found."));

app.listen(port, () => console.log("server started successfully."));