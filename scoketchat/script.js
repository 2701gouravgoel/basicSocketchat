const socket = io('http://localhost:3000')
const messageInputt = document.getElementById('message')
const msgcontainer = document.getElementById('messgs')
socket.on('chat-message',data =>{
    console.log(data)
})

function send(){
    const message = messageInputt.value
    socket.emit('send-message',message)
    messageInputt.value = '' 
}

socket.on('their',message=>{
    const msg = document.createElement('li')
    msg.innerText = message 
    msgcontainer.append(msg)
    console.log(message)
})