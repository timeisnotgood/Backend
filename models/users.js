const mongoose = require("mongoose")


const userschema = mongoose.Schema({
    username : {
        type : String,
        require : [true, "Please enter the user name"]
    },
    email :{
        type : String,
        require :[true, "Please enter the Email"],
        unique : true
    },
    password : {
        type : String,
        require :[true, "Please enter the phone number"]
    },
},{
    timestamp : true
})

module.exports = mongoose.model("User", userschema) 