import mongoose from "mongoose";

// const bloogSchema = new mongoose.Schema({
//     title : {
//         type : String,
//     },
//     image : {
//         type : Array,
//         default : []
//     },
//     content : {
//         type : String,
//         default : ""
//     },
//     tags : {
//         type : String,
//         defualt : ""
//     },
//     status : {
//         type : String,
//         enum : ["PUBLISHED","DRAFT"],
//         default : "DRAFT"
//     },
//     publish : {
//         type : Boolean,
//         default : true
//     }
// },{
//     timestamps : true
// })

// //create a text index
// blogSchema.index({
//     title  : "text",
//     content : 'text'
// },{
//     name : 10,
//     content : 5
// })


// const BlogModel = mongoose.model('blog',bloogSchema)


// models/Blog.js
// const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
},{
  timestamps : true
});

// Automatically update updated_at on save
blogSchema.pre('save', function (next) {
  this.updated_at = Date.now();
  next();
});

const BlogModel = mongoose.model('blog',blogSchema)

export default BlogModel
