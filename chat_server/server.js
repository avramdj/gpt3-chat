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

const sender = {uid: 0, name: "GPT-3"}

const robotUrl = process.env.ROBOT_URL || "http://localhost:5000/"
const url = process.env.URL || "192.168.0.10"

io.on("connection", (socket) => {
    console.log(`New connection\n ID: ${socket.id}`)
    socket.emit("response", {
        text: "Hello human. Feel free to ask me anything.",
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
                input: data.text,
                userid: socket.id
            }
            })
            .then(res => {
                text = res.data.data
                if(text == undefined){
                    console.log("No response...")
                    return
                }
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


server.listen(port, url);

server.once('listening', function () {
    console.info(`Listening on http://${url}:${port}`);
});
