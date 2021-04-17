const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require("helmet");
const morgan = require('morgan')
const mongoose = require('mongoose');
const { User } = require('./models/User')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passportJWT = require('passport-jwt');
const localStrategy = require('passport-local');
const passport = require('passport');
const { getUser } = require('./services/UserService');
const apiRoot = require('./api/ApiRoot')

const JWTStrategy = passportJWT.Strategy;

const app = express();
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet())
app.use(morgan('tiny'))
app.use(cors({
  origin: '*'
}))
app.use(cookieParser())
app.use(express.json())
app.use(passport.initialize())

// passport.use(new localStrategy(
//     (username, password, done) => {
//         try{
//             const user = getUser(username, password);
//             if(user){
//                 return done(null, user)
//             } else {
//                 return done(null, false)
//             }
//         } catch (error){
//             return done(error)
//         }
//     }
// ))
// passport.use(new JWTStrategy({
//     jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secret: process.env.JWT_SECRET
// }, (jwtPayload, done) => {
//     const user = getUser(jwtPayload.user.username, jwtPayload.user.password)
//     if(user){
//         return done(null, user);
//     } else {
//         return done(null, false, {
//             message: "Token not matched"
//         });
//     }
// }))

app.use('/api', apiRoot)

app.use(function (error, req, res, next) {
    const statusCode = error.status || 500;
    return res.status(statusCode).render('error.ejs',{
        errorMessage: error.message,
        errorCode: statusCode
    });
});


module.exports = app;
