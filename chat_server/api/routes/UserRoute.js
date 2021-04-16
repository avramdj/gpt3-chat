const express = require('express');
const mongoose = require('mongoose');
const { authTunnel } = require('../../services/AuthService');
const router = express.Router();
const { getUser, makeUser, generateUserToken} = require('../../services/UserService')
const fs = require('fs')

router.post('/signup', async (req, res) => {
    var userInfo = req.body
    try {
        const newUser = await makeUser(userInfo)
    } catch (error) { 
        console.log(error)
        return res.status(401).json({'ok': false, "message": "Server error"})
    }
    return res.status(200).json({'ok': true, 'message': "Done!"})
})

router.post('/login', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    try{
        const user = await getUser(username, password)
        if(!user){
            return res.status(404).json({"ok": false, "message": "Wrong username/password combination"})
        }
        delete user.password
        const token = generateUserToken(user.toJSON())
        return res.status(200).json({"ok": true, "message": "Success", user, token})
    } catch (error) {
        console.log(error)
        return res.status(500).json({"ok": false, "message": "Server error"})
    }
})

// router.post('/upload-profile-pic', authTunnel, async (req, res) => {
//     try {
//         fs.writeFile
//     }
// })

module.exports = router