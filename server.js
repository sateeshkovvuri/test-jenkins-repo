const express = require("express")
const server = new express()

server.get("/home",(req,res)=>{
    res.send("Hello world from home page")
})
server.listen(3000,()=>{
    console.log("Server listening on port 3000")
})