const expressAsyncHandler = require("express-async-handler");
const user = require("../model/userschema")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


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

const loginuser = expressAsyncHandler(async(req, res)=>{

    const {email, password} = req.body
    if(!email || !password){
        res.status(404)
        throw new Error("All Fields are Mandatory !!")
    }

    const use = await user.findOne({email})
    if(use && (await bcrypt.compare(password, use.password))){

        const accesstoken = await jwt.sign({
            user :{
                "username" : use.username,
                "email" : use.password,
                "id" : use._id
            },
        },process.env.ACCESS_TOKEN_SECRET, {expiresIn : "10m"})
        res.status(200).json(accesstoken)
    }else{
        res.status(400)
        throw new Error("Email or password not valid")
    }
    // res.status(200).json({message : "Login uesr"})
})

// @ Current User
// @ Route /user/currentuser
// @ Private

const currentuser = expressAsyncHandler(async(req, res)=>{
    res.status(200).json({message : "Current uesr"})
})


module.exports = {resgisteruser, loginuser, currentuser}