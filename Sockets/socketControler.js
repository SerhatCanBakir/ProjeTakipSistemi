const {GetIO} = require('./webSocketScripts');

const io = GetIO;

io.on('connection',(socket)=>{
    console.log(socket.connected);
    socket.on('message',(msj)=>{
        console.log(msj);
    })
})