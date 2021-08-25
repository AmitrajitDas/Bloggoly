import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateAuthToken from '../utils/token.js'

// @desc Authenticate users and get tokens
// @route POST /api/auth/login
// @access Public

export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      profilepic: user.profilepic,
      username: user.username,
      email: user.email,
      token: generateAuthToken(user._id),
    })
  } else {
    res.status(401).send('Invalid User! check email and password again')
  }
})

// @desc Registering by creating a new user
// @route POST /api/auth/register
// @access Public

export const userRegister = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body

  const isUser = await User.findOne({ email })

  if (isUser) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    username,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      profilepic: user.profilepic,
      username: user.username,
      email: user.email,
      password: user.password,
      token: generateAuthToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc Get user profile
// @route GET /api/auth/profile
// @access Private

export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    res.status(200).json({
      _id: user._id,
      profilepic: user.profilepic,
      username: user.username,
      email: user.email,
    })
  } else {
    res.status(404)
    throw new Error('User not found!')
  }
})

// @desc Update user profile
// @route PUT /api/auth/profile
// @access Private

export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.username = req.body.username || user.username
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.status(200).json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      token: generateAuthToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found!')
  }
})

// @desc Delete user
// @route DELETE /api/auth/profile
// @access Private

export const deleteUser = asyncHandler(async (req, res) => {
  // try {
  //   await User.findByIdAndDelete(req.params.id)
  //   res.status(200).json('User deleted successfully!')
  // } catch (error) {
  //   res.status(404)
  //   throw new Error('User not found!')
  // }

  const user = await User.findById(req.user._id)

  if (user) {
    await user.deleteOne({ id: user._id })

    res.status(200).json(`${user.username} has been removed`)
  } else {
    res.status(404)
    throw new Error('User not found!')
  }
})
