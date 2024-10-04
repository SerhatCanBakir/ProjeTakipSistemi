const exp = require('express');
const app = exp();
const {router} = require('./routers/mainRouter.js');
const {routerTest} = require('./routers/testRouter.js');
const {initSocket} = require('./Sockets/webSocketScripts.js');
const http = require('http');
const server = http.createServer(app);
const io = initSocket(server);
app.use('/',router);
app.use('/dev',routerTest);

// dev test için var
//server kullanma sebebim socket.io yu server değişkenine bağladığım için 
server.listen(3000,()=>{
    console.log('app dinleniyor');
})

