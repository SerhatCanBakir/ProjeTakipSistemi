const {Router} = require('express');
const path = require('path');
const router = Router();
router.get('/anasayfa',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Htmls/holder.html'));
})

module.exports = {
    router,
}