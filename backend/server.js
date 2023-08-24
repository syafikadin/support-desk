const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000

const app = express()

app.get('/', (req, res) => {
    res.send('Register Route')
})

app.get('/login', (req, res) => {
    res.send('Login Route')
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))