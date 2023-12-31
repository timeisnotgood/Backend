const expressAsyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

const validation =expressAsyncHandler(async (req, res, next)=>{
    let token;
    const authHeader = req.headers.authorization || req.headers.Authorization
    if(authHeader && authHeader.startsWith(" Bearer")){
        token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err){
                res.status(401);
                throw new Error("user is not authenticated")
            }
            console.log(decoded);
        })
    }
})


module.exports = validation