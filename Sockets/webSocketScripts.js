const socketIO = require('socket.io');

let io;

function initSocket(server) {
  io = socketIO(server);  
  io.on('connection', (socket) => {
    console.log('Yeni bir kullanıcı bağlandı:', socket.id);
//mesajda oda user id bilgileri tokenden alınabilir veya çerezlerden alınıp ona göre işlem yapılabilir (tercihen çerez)
//mesajlar odalara gönerdilicek odaların idleri de çerezler yada tokenden alınacak (çerez en mantıklısı)
   socket.on('message',(msj)=>{
    console.log(msj);
    mesaj = {userId:socket.id,msj:msj}
    socket.emit('mesaj al',mesaj);
   })
  //mesajlar seslide olabilir onun için ses alımı ve gönderimi eklenicek ve db ye eklenme yapılıcak
socket.on('voiceMessage',(voiceMessage)=>{
    console.log('ses geldi');
 socket.emit('voiceMessage',voiceMessage);
})

socket.on('join-room', (roomId, userId) => {
  socket.join(roomId)
  socket.to(roomId).emit('user-connected', userId)})


socket.on


    socket.on('disconnect', () => {
      console.log('Kullanıcı ayrıldı:', socket.id);
    });
  });
  return io;
}



module.exports = {initSocket,};