require('dotenv').config()
const axios = require('axios');
const app = require('./app');
const http = require('http')
const socketIo = require('socket.io')

const port = process.env.PORT || 4000

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*',
    }
})

const robotUrl = process.env.ROBOT_URL || "http://localhost:5000/"
const url = process.env.URL || "192.168.0.10"

const robotUser = {username: "GPT-3"}

io.on("connection", (socket) => {
    console.log(`New connection\n ID: ${socket.id}`)
    socket.emit("response", {
        text: "Hello human. Feel free to ask me anything.",
        isSent: false,
        sender: robotUser,
        time: (new Date()).toLocaleString()
    })
    socket.on('disconnect', () => {
        axios({
            method: 'delete',
            'Content-Type': 'application/json',
            url: robotUrl,
            data: {
                userid: socket.id
            }
        }).then((resp) => {
            console.log(`Deleted history for ${socket.id}`)
        })
        .catch((error) => {})
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
                    sender: robotUser,
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

// io2.on("connection", (socket) => {
//     console.log(`New groupchat connection\n ID: ${socket.id}`)
//     socket.on("message", (data) => {
//         data.isSent = !data.isSent
//         socket.broadcast.emit("response", data);
//     })
// })

server.listen(port, url);

server.once('listening', function () {
    console.info(`Listening on http://${url}:${port}`);
});