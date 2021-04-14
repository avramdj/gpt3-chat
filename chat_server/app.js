const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require("helmet");
const morgan = require('morgan')
// const mongoose = require('mongoose');
// const config = require('./config');

require('dotenv').config()
const app = express();
// mongoose.connect(config.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).json({'message' : 'i am alive'})
})

app.use(function (error, req, res, next) {
    const statusCode = error.status || 500;
    return res.status(statusCode).render('error.ejs',{
        errorMessage: error.message,
        errorCode: statusCode
    });
});


module.exports = app;