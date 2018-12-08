const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.end("test server");
});


app.post('/print/:name',(req,res)=>{
    res.end("name: " + req.params.name);
});


app.listen(3000,()=>{
    console.log("server running");
});