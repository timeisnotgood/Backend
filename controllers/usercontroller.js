const expressAsyncHandler = require("express-async-handler");


const resgisteruser = expressAsyncHandler(async(req, res)=>{
    res.status(200).json({message : "Register uesr"})
})

const loginuseruser = expressAsyncHandler(async(req, res)=>{
    res.status(200).json({message : "Login uesr"})
})

const currentuser = expressAsyncHandler(async(req, res)=>{
    res.status(200).json({message : "Current uesr"})
})
module.exports = {resgisteruser, loginuseruser, currentuser}