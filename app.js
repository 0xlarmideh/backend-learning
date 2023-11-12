const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const blogRoutes = require('./routes/blogRutes/index')
// Connect to MongoDB

const app = express();
const dbURL =
  "mongodb+srv://basugar441:Abdul1234@my-cluster.2ngqzs0.mongodb.net/backend-tuts?retryWrites=true&w=majority";

mongoose
  .connect(dbURL)
  .then((result) => {
    app.listen(3000);
    console.log("Connected to DB ");
  })
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});


// blog routes
app.use('/blogs', blogRoutes)  // Scoped the endpoints to forward-slash blogs. We do not need to append/prefix the routes with /blogs

// Learnt about creating database in MongoDB, connecting with mongoose and getting data from MongoDB

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
