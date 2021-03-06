import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'

import connectDB from './config/db.js'
import userRouter from './routes/userRouter.js'
import blogRouter from './routes/blogRouter.js'
import categoryRouter from './routes/categoryRouter.js'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()
app.use(cors())

app.use(express.json())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.get('/', (req, res) => {
  res.send('API is running....')
})
app.use('/api/auth', userRouter)
app.use('/api/blog', blogRouter)
app.use('/api/category', categoryRouter)

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads')
  },
  filename: (req, file, callback) => {
    callback(null, req.body.name)
  },
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File is uploaded')
})

app.use(errorHandler)
app.use(notFound)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
