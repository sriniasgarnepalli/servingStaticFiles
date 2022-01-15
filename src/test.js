const path = require('path');
const express = require('express')
const app= express();

const staticPath = path.join(__dirname,'../public');
app.use(express.static(staticPath))
app.get('/test',(req,res)=>{
    res.send('Hello World')
});

app.listen(3000,()=>console.log('Listening on port 3000'));