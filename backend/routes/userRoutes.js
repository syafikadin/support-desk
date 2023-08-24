const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    req.send('Register Route')
})

module.exports = router