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
