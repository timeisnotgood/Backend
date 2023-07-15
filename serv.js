const express = require("express")
const app = express()
const bcrypt = require('bcrypt')
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")



app.use(express.json())

app.get('/user/get', async(req, res) =>{
    res.status(200).send("Its working")
})



mongoose.connect("mongodb+srv://bhoopathi:bhoopathi@cluster0.gfpy8oi.mongodb.net/bhoopathi?retryWrites=true&w=majority")
.then(()=>{
    console.log(mongoose.connection.host, mongoose.connection.name);
})
.catch((err)=>{
    console.log(err.message);
})


app.listen(5000, (req, res)=>console.log("Server started"))


