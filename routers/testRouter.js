//Burayı geliştirme aşamasında sana dokunmamak için yazıyorum bunları sonra dosyalara ayırabiliriz 

const {Router} = require('express');
const path = require('path');
const routerTest = Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,res,next)=>{
    let pathway = req.params.path;
        
     if(!pathway){
    next(null,path.join(__dirname,'../ProjectFiles/'+req.params.project));}else{
        next(null,path.join(__dirname,'../ProjectFiles/'+req.params.project,'/',req.params.pathway));
    }
    }
})

const upload = multer({storage:storage});

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

routerTest.get('/getfile/:project/:file',(req,res)=>{
    let project = req.params.project;
    let file = req.params.file;
    res.download(path.join(__dirname,'../ProjectFiles/'+project+'/'+file));
})

routerTest.get('/getfile/:project/:path/:file',(req,res)=>{
    let project = req.params.project;
    let pathway = req.params.path
    let file = req.params.file;
    res.download(path.join(__dirname,'../ProjectFiles/'+project+'/'+pathway+'/'+file));
})

routerTest.post('/sendfile',upload.single('file'),(req,res)=>{
    res.sendStatus(200);
})


module.exports = {
    routerTest,
}