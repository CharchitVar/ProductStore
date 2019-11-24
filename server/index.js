const express =require('express');
const path=require('path');
const port=process.env.PORT ||5800;
const app=express();
const destinationDir=path.join(__dirname,'../dist');

// Hosting From Dist Folder.

app.use(express.static(destinationDir));

console.log(`Express hosting from ${destinationDir} `);

app.get('*',(req, res)=>{
    res.sendfile(path.join(destinationDir),'index.html')
})

app.listen(port,()=>{
    console.log(`Server is running from ${port}`)
})