import mongoose from "mongoose";


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
    type: String,
    default:'',
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
