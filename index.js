const exp = require('express');
const app = exp();
const {router} = require('./routers/mainRouter.js');
const {routerTest} = require('./routers/testRouter.js');
const {initSocket} = require('./Sockets/webSocketScripts.js');
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = initSocket(server);
app.use('/',router);
app.use('/dev',routerTest);



server.listen(3000,()=>{
    console.log('app dinleniyor');
})

