import express from 'express'
import {
  createCategory,
  fetchCategories,
} from '../controllers/categoryController.js'

const router = express.Router()

router.route('/create').post(createCategory)
router.route('/getCategories').get(fetchCategories)

export default router
