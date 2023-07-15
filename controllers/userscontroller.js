const asynchandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/users")



//  @register user
// route api/users/register
// access public

const registeruser = asynchandler(async(req, res)=>{
    const {username, email, password} = req.body
    if(!username, !email, !password){
        res.json("register the user")
        
    }
    const emailavailable = await User.findOne({email})

    if(emailavailable){
        res.status(400)
        res.json("Email already Exist")
    }

    const hashedpassword = await bcrypt.hash(password, 10)


    const userdata = await User.create({
        username,
        email,
        password : hashedpassword
    })


    if(userdata){
        res.status(201).json({_id : userdata.id, Email : userdata.email})
    }else{
        res.status(400).json("user value is not valied")
    }
})



//  @loginuser
// route api/users/login
// access public

const loginuser = asynchandler(async(req, res)=>{
    const {email, password} = req.body
    if(!email || !password){
        res.status(400).json("All feildes are mandatory !!")
    }

    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))){
        const accesstoken = jwt.sign({
            user : {
                username : user.username,
                email : user.email,
                password : user.password
            }
        },process.env.ACCESS_TOKEN_SECRET,{expiresIn : "15m"})
        res.status(200).json({accesstoken})
    }else{
        res.status(401).json("Email or password not valid")
    }
    res.json("Login ")
})




//  @currentuser
// route api/users/register
// access public

const currentuser = asynchandler(async(req, res)=>{
    res.json(req.user)
})

module.exports = {registeruser, loginuser, currentuser}