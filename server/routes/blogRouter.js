import express from 'express'
import {
  createBlog,
  fetchBlog,
  fetchBlogs,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js'

import { routeProtection } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/create').post(routeProtection, createBlog)
router.route('/getblog/:id').get(fetchBlog)
router.route('/getblogs').get(fetchBlogs)
router.route('/update/:id').put(routeProtection, updateBlog)
router.route('/delete/:id').delete(routeProtection, deleteBlog)

export default router
