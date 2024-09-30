const socketIO = require('socket.io');

let io;

function initSocket(server) {
  io = socketIO(server);  
  io.on('connection', (socket) => {
    console.log('Yeni bir kullanıcı bağlandı:', socket.id);

   socket.on('message',(msj)=>{
    console.log(msj);
    mesaj = {userId:socket.id,msj:msj}
    socket.emit('mesaj al',mesaj);
   })
  






    socket.on('disconnect', () => {
      console.log('Kullanıcı ayrıldı:', socket.id);
    });
  });
  return io;
}



module.exports = {initSocket,};