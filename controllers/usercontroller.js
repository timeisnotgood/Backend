const expressAsyncHandler = require("express-async-handler");
const user = require("../model/userschema")
const bcrypt = require("bcrypt")


// @ Register User
// @ Route /user/registeruser
// @ Private

const resgisteruser = expressAsyncHandler(async(req, res)=>{

    const {username, email, password} = req.body
    if (!username || ! email || !password) {
        res.status(404)
        throw new Error("All fields are Mandatory !!")
    }

    const checker = await user.findOne({email})
    if(checker){
        res.status(400)
        throw new Error("User all Ready Exist")
    }

    const hashed = await bcrypt.hash(password, 10)
    console.log(hashed);
    const use = await user.create({
        "username": username,
        "email" : email,
        "password" : hashed
    })
    res.status(200).json(use)
})

// @ Login User
// @ Route /user/loginuser
// @ Private

const loginuseruser = expressAsyncHandler(async(req, res)=>{
    res.status(200).json({message : "Login uesr"})
})

// @ Current User
// @ Route /user/currentuser
// @ Private

const currentuser = expressAsyncHandler(async(req, res)=>{
    res.status(200).json({message : "Current uesr"})
})


module.exports = {resgisteruser, loginuseruser, currentuser}