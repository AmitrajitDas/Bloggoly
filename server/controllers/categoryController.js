import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'

// @desc Create a category
// @route POST /api/category
// @access Private

export const createCategory = asyncHandler(async (req, res) => {
  const cat = new Category(req.body)

  if (cat) {
    const newCat = await cat.save()
    res.status(200).json(newCat)
  } else {
    res.status(404)
    throw new Error('Unable to add new category')
  }
})

// @desc Get all categories
// @route GET /api/category
// @access Private

export const fetchCategories = asyncHandler(async (req, res) => {
  const cats = await Category.find()

  if (cats) {
    res.status(200).json(cats)
  } else {
    res.status(404)
    throw new Error('Category not found!')
  }
})
