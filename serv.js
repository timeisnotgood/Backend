const express = require("express")
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")

const app = express()
const port = process.env.PORT || 5000

try {
    const connect = mongoose.connect("mongodb+srv://bhoopathi:bhoopathi@cluster0.gfpy8oi.mongodb.net/bhoopathi?retryWrites=true&w=majority")
    if(connect){
        app.listen(port, (req, res) =>{
            console.log( " server is Started in port : ", port);
        })
    }
    console.log(connect.connection.host, connect.connection.name);
} catch (error) {
    console.log("hai");
    console.log(error);
}
