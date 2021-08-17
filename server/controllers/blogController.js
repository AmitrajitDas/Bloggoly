import asyncHandler from 'express-async-handler'
import Blog from '../models/blogModel.js'

// @desc Create a blog
// @route POST /api/blogs/create
// @access Private

export const createBlog = asyncHandler(async (req, res) => {
  const { username, title, desc, photo, categories } = req.body

  const blog = new Blog({
    username,
    title,
    desc,
    photo,
    categories,
  })

  const createdBlog = await blog.save()
  res.status(201).json(createdBlog)
})

// @desc Fetch a single blog
// @route GET /api/blogs/getblog/:id
// @access Private

export const fetchBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id)

  if (blog) {
    res.status(200).json(blog)
  } else {
    res.status(404)
    throw new Error('Blog not found')
  }
})

// @desc Fetch all blogs
// @route GET /api/blogs/getblogs
// @access Private

export const fetchBlogs = asyncHandler(async (req, res) => {
  const username = req.query.user
  const categoryname = req.query.cat

  try {
    let blogs
    if (username) {
      blogs = await Blog.find({ username })
    } else if (categoryname) {
      blogs = await Blog.find({
        categories: {
          $in: [categoryname],
        },
      })
    } else {
      blogs = await Blog.find()
    }
    res.status(200).json(blogs)
  } catch {
    res.status(404)
    throw new Error('Blogs not found')
  }
})

// @desc Update a blog
// @route PUT /api/blogs/:id
// @access Private

export const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id)

  if (blog) {
    blog.title = req.body.title || blog.title
    blog.desc = req.body.desc || blog.desc
    blog.photo = req.body.photo || blog.photo
    blog.categories = req.body.categories || blog.categories

    const updatedBlog = await blog.save()

    res.status(200).json({
      _id: updatedBlog._id,
      title: updatedBlog.title,
      desc: updatedBlog.desc,
      photo: updatedBlog.photo,
      categories: updatedBlog.categories,
    })
  } else {
    res.status(404)
    throw new Error('Blog not found')
  }
})

// @desc Delete a blog
// @route DELETE /api/blogs/:id
// @access Private

export const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id)

  if (blog) {
    res.status(200).json('Blog deleted successfully!')
  } else {
    res.status(404)
    throw new Error('Blog not found!')
  }
})
