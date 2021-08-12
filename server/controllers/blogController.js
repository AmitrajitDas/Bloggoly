import asyncHandler from 'express-async-handler'
import Blog from '../models/blogModel.js'

// @desc Create a blog
// @route POST /api/blogs
// @access Private

export const createBlog = asyncHandler(async (req, res) => {
  const { title, desc, photo, categories } = req.body

  const blog = new Blog({
    title,
    desc,
    photo,
    username: req.user._id,
    categories,
  })

  const createdBlog = await blog.save()
  res.status(201).json(createdBlog)
})
