const express = require("express")
const app = express()
const news = require("./practice/model/newmodel")
const dotenv = require("dotenv").config()
const bcrypt = require('bcrypt')
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const { authschema } = require("./middleware/authschema")


app.use(express.json())

app.get('/user/get', async(req, res) =>{
    res.status(200).send("Its working")
})



app.post('/user/register', async(req, res)=>{
    const {username, password} = req.body

    if(!username || !password){
        res.status(400).send("All Fields are Empty")
    }

    try {
        const valid = await authschema.validateAsync( req.body )
        console.log(valid);
    } catch (error) {
        console.log(error);
    }

    const hashedpassword = await bcrypt.hash(password, 10)

    const data = await news.create({
        username,
        password:hashedpassword
    })

    if(data){
        res.status(200).json(data)
    }

})



app.post('/user/login', async(req,res)=>{

    const {username, password} = req.body
    const user = await news.findOne({username})
    console.log(user);
    
    if(user){
        const accesstoken = jwt.sign({
            use : {
                username : user.username,
                password : user.password
            }
        },process.env.ACCESS_TOKEN_SECRET,{expiresIn : "10m"})
        res.status(200).json({accesstoken})
    }
})


mongoose.connect("mongodb+srv://bhoopathi:bhoopathi@cluster0.gfpy8oi.mongodb.net/bhoopathi?retryWrites=true&w=majority")
.then(()=>{
    console.log(mongoose.connection.host, mongoose.connection.name);
})
.catch((err)=>{
    console.log(err.message);
})


app.listen(5000, (req, res)=>console.log("Server started"))





