const io = require('socket.io')(3000)


socket={};

io.on('connection',socket =>{
    socket[socket.id]='guest'
    console.log("new user")
    socket.emit('chat-message',"hello world")

    socket.on('name',name=>{
        socket[socket.id]=name;
        console.log(name)
    })
    socket.on('send-message',message =>{
        message.name = socket[socket.id]
        socket.broadcast.emit("their",message)
        socket.to(socket.id).emit("your",message)
        console.log(message)
    })
})