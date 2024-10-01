const {Router} = require('express');
const path = require('path');
const routerTest = Router();
routerTest.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Htmls/holder.html'));
})
routerTest.get('/videoCall',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Htmls/videoCall.html'));
})

routerTest.get('/js/:file',(req,res)=>{
    let fileName = req.params.file;
    res.sendFile(path.join(__dirname,'../JavaScripts/',fileName));
    
})
module.exports = {
    routerTest,
}