const http = require('http');
const app = require('./app');
const socketIo = require("socket.io");
const axios = require('axios');
require('dotenv').config()

const port = process.env.PORT || 4000
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
      origin: '*',
    }
})

const port2 = process.env.PORT2 || 4001
const server2 = http.createServer(app);
const io2 = socketIo(server2, {
    cors: {
      origin: '*',
    }
})


const robotUrl = process.env.ROBOT_URL || "http://localhost:5000/"
const url = process.env.URL || "192.168.0.10"

io.on("connection", (socket) => {
    const sender = {uid: 0, name: "GPT-3"}
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

io2.on("connection", (socket) => {
    console.log(`New groupchat connection\n ID: ${socket.id}`)
    socket.on("message", (data) => {
        data.isSent = !data.isSent
        socket.broadcast.emit("response", data);
    })
})

server.listen(port, url);

server2.listen(port2, url);

server.once('listening', function () {
    console.info(`Listening on http://${url}:${port}`);
});

server2.once('listening', function () {
    console.info(`Listening on http://${url}:${port2}`);
});