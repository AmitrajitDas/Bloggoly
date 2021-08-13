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
      default: '',
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
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
