const express = require("express")
const dotenv = require("dotenv").config()
const errorhandler  =require("./middleware/errorhandler")
const mongoose = require("mongoose")
const db = require("./config/db")


db();
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(errorhandler)
app.use('/data', require("./routes/contactroutes"))


if(db){
    app.listen(port, async(req, res)=>{
        console.log("Server Started");
    })
}
