const socketIO = require('socket.io');

let io;

function initSocket(server) {
  io = socketIO(server);  // Socket.IO'yu başlatıyoruz
  io.on('connection', (socket) => {
    console.log('Yeni bir kullanıcı bağlandı:', socket.id);

    socket.on('disconnect', () => {
      console.log('Kullanıcı ayrıldı:', socket.id);
    });
  });
  return io;
}

function getIO() {
  if (!io) {
    throw new Error("Socket.io henüz başlatılmadı!");
  }
  return io;
}

module.exports = {initSocket,getIO};