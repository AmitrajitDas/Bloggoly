import express from 'express'
import {
  userLogin,
  userRegister,
  getUserProfile,
  updateUserProfile,
  deleteUser,
} from '../controllers/userController.js'

import { routeProtection } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/register').post(userRegister)
router.route('/login').post(userLogin)
router
  .route('/profile')
  .get(routeProtection, getUserProfile)
  .put(routeProtection, updateUserProfile)
  .delete(routeProtection, deleteUser)

export default router
