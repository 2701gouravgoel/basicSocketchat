const io = require('socket.io')(3000)

io.on('connection',socket =>{
    console.log("new user")
    socket.emit('chat-message',"hello world")

    socket.on('send-message',message =>{
        socket.broadcast.emit("their",message)
        socket.to(socket.id).emit("your",message)
        console.log(message)
    })
})