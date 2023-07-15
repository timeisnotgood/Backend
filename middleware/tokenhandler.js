const asynchandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

const validatetoken = asynchandler(async(req, res, next)=>{
    let token;
    const authheader = req.headers.Authorization || req.headers.authorization 
    if(authheader && authheader.startsWith("Bearer")){
        token = authheader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode)=>{
            if(err){
                res.status(400)
                throw new Error("Email and password not match")
            }
            console.log(decode.user);
            res.user = decode.user;
            next();
        })
    }
})

module.exports = validatetoken