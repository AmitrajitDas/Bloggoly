import express from 'express'
import { createBlog } from '../controllers/blogController.js'

import { routeProtection } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').post(routeProtection, createBlog)

export default router
