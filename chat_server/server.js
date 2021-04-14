const http = require('http');
// const config = require('./config')
const app = require('./app');
const fs = require('fs');
const cors = require('cors');
const socketIo = require("socket.io");
const axios = require('axios');
const { exit } = require('process');
require('dotenv').config()

const port = process.env.PORT || 4000
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
      origin: '*',
    }
})

const sender = "GPT-3"
const robotUrl = process.env.ROBOT_URL || "http://localhost:5000/"

io.on("connection", (socket) => {
    socket.emit("response", {
        text: "hello human 🤖",
        isSent: false,
        sender: sender,
        time: (new Date()).toLocaleString()
    })
    socket.on("message", (data) => {

        var text = ""
        axios({
            method: 'post',
            'Content-Type': 'application/json',
            url: robotUrl,
            data: {
                input: data.text
            }
            })
            .then(res => {
                text = res.data.data
                responseObj = {
                    text: text,
                    isSent: false,
                    sender: sender,
                    time: new Date()
                }
                console.log("emitting response")
                console.log(responseObj)
                socket.emit("response", responseObj)
            })
            .catch(error => {
                console.log(error)
            })
    })
})


server.listen(port);

server.once('listening', function () {
    console.info(`Listening on http://localhost:${port}`);
});
