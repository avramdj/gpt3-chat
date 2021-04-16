const User = require("../models/User")
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

exports.getUser = async (username, password) => {
    return User.findOne({username: username, password: password})
}

exports.makeUser = async (userInfo) => {
  userInfo['_id'] = mongoose.Types.ObjectId()
  const newUser = new User(userInfo)
  return newUser.save()
}

exports.generateUserToken = (userInfo) => {
  return JSON.parse(jwt.sign(userInfo, process.env.JWT_SECRET))
}