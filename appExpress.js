const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
// Connect to MongoDB

const dbURL =
  "mongodb+srv://basugar441:Abdul1234@my-cluster.2ngqzs0.mongodb.net/backend-tuts?retryWrites=true&w=majority";

mongoose
  .connect(dbURL)
  .then((result) => {
    app.listen(3000);
    console.log("Connected to DB " + dbURL);
  })
  .catch((err) => console.log(err));

const app = express();
// app.set("view engine", "ejs");

// app.use((req, res, next) => {
//   console.log("host", req.hostname);
//   next();
// });

// app.get("/", (req, res) => {
//   res.sendFile("./index.html", { root: __dirname });
// });

// app.get("/about", (req, res) => {
//   res.sendFile("./about.html", { root: __dirname });
// });

// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

// app.use((_, res) => {
//   res.status(404).sendFile("./404.html", { root: __dirname });
// });

//mongoose and mongodb sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "Blog Title 3",
    snippet: "Blog Snippet",
    body: "Blog Body",
  });

  blog
    .save()
    .then((result) => res.send(result))
    .catch((error) => console.log(error));
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
  .then((result) => res.send(result))
  .catch((error) => console.log(error));
})

// Find single blog

app.get('/single-blog', (req, res) => {
  Blog.findById('654f893e6c3aef152514b4a3')
    .then((result) =>
      res.send(result)
    )
    .catch((error) => console.log(error));
});
