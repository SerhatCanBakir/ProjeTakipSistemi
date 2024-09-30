const {Router} = require('express');
const path = require('path');
const routerTest = Router();
routerTest.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Htmls/holder.html'));
})

module.exports = {
    routerTest,
}