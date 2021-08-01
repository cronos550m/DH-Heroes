const express = require('express');
const server = express();
const path = require('path');


server.listen(3030,()=>{
    console.log(`Server is runnig in the Port : 3030`);
})

server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/index.html'))
})
// server.get('/home',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./views/index.html'))
// })
server.get('/babbage',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/babbage.html'))
})
server.get('/berners-lee',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/berners-lee.html'))
})
server.get('/clarke',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/clarke.html'))
})
server.get('/hamilton',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/hamilton.html'))
})
server.get('/hopper',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/hopper.html'))
})
server.get('/lovelace',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/lovelace.html'))
})
server.get('/turing',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/turing.html'))
})