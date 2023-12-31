const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')

// Connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome'})
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))