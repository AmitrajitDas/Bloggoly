import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()
app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running....')
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
