const socket = io();
const myPeer = Peer(undefined,{
    host:'/',
    port:'3001',
});


myPeer.on('open',(id)=>{
    socket.emit('join-room',roomid,id);
});

socket.on('user-disconnected',id=>{
    console.log('adam sigaradan gitti usta : '+id);
})

