const mongoose = require('mongoose');
// const { blogSchema } = require('../schema/blog');

const schema = mongoose.Schema;

const blogSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
