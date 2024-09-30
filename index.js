const exp = require('express');
const app = exp();
const {router} = require('./routers/mainRouter.js');
app.use('/',router);

app.listen(3000,()=>{
    console.log('app dinleniyor');
})