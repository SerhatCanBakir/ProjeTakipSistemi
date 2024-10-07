//Burayı geliştirme aşamasında sana dokunmamak için yazıyorum bunları sonra dosyalara ayırabiliriz 
const jwt = require('jsonwebtoken');


const {Router, json} = require('express');
const path = require('path');
const express = require('express');
const routerTest = Router();
require('dotenv').config({path:path.resolve(__dirname,'../secure.env')});
JWTKEY = process.env.JWTKey;
const authorityControl = (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);
    if(token==null){
        return res.sendStatus(401);
    }
    jwt.verify(token,JWTKEY,(err,data)=>{
        if(err){
            return res.sendStatus(403)
        }
        
        res.user = data;
        next()
    })
}



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

routerTest.get('/css/:file',(req,res)=>{
    let fileName = req.params.file;
    res.sendFile(path.join(__dirname,'../Css/',fileName));
})

routerTest.post('/login',(req,res)=>{
let mail = req.query.mail;
let pass = req.query.pass;
//burda normalde db den kontrol edilmesi gerekiyor 
const exitst = true;
if(exitst)
{
    const info = {mail:mail,Projects:[{project:'a',rol:'a'},{project:'b',rol:'b'}]};
   let token =  jwt.sign(info,JWTKEY,{expiresIn:60*60});
   console.log(token);
    res.set('status:'+200);
    res.send({token:token});
}else{
    res.sendStatus(404);
}})

routerTest.get('/posts',authorityControl,(req,res)=>{
res.send({deneneme:'data'});
})


module.exports = {
    routerTest,
}