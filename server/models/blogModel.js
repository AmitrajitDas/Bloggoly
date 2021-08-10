import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    desc: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: true,
    },

    username: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    categories: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

const Blog = mongoose.model('Blog', blogSchema)

export default Blog
