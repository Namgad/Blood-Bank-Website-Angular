const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");

const app = express();

mongoose
  .connect(
    //"mongodb+srv://max:QuBqs0T45GDKPlIG@cluster0-ntrwp.mongodb.net/node-angular?retryWrites=true"
    "mongodb://127.0.0.1:27017/bloodbank"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  console.log(req.body.name);
  const post = new Post({
    name: req.body.name,
    gender: req.body.gender,
    bloodGroup: req.body.bloodGroup,
    bloodReg: req.body.bloodReg,
    contact: req.body.contact,
    address: req.body.address
  });
  post.save();
  res.status(201).json({
    message: "Posts uploaded successfully!"
  });


});

app.get("/api/posts", (req, res, next) => {
  const post = new Post({
    name: req.body.name,
    gender: req.body.gender,
    bloodGroup: req.body.bloodGroup,
    bloodReg: req.body.bloodReg,
    contact: req.body.contact,
    address: req.body.address
  })
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
  return post;
});

module.exports = app;