const {Router} = require('express');
const path = require('path');
const router = Router();


router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Htmls/login.html'));
})
router.get('/anasayfa',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Htmls/anasayfa.html'));
})
router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Htmls/login.html'))
})

router.get('/videocall',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Htmls/videoCall.html'))
})
//buraya giriş proje seçimi sayfası görev sayfası mesajlaşma ve video arama sayfası için kullanılıcak sadece 
// kalan istekleri başka dosyada handle lıcaz 
module.exports = {
    router,
}