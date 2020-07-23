const socket = io('http://localhost:3000')
const messageInputt = document.getElementById('message')
const msgcontainer = document.getElementById('messgs')
const nameelement = document.getElementById('name')
const username = "guest"
socket.on('chat-message',data =>{
    console.log(data)
})

function send(){
    const message = messageInputt.value
    data = {
        msg : message,
        name:username
    }
    socket.emit('send-message',data)
    messageInputt.value = '' 
}
function setname(){
    const name = nameelement.value
    console.log(name)
    socket.emit("name",name)
}

socket.on('their',data=>{
    const msg = document.createElement('li')
    msg.innerText = data.name +":" +data.msg 
    msgcontainer.append(msg)
})