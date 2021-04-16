const express = require('express');
const router = express.Router();
const userRoute = require('./routes/UserRoute');
const { auth } = require('../services/AuthService')

router.use('/user', userRoute)

router.get('/auth', auth)

router.get('/', (req, res) => {
    return res.status(200).json({'message' : 'i am alive'})
})

module.exports = router