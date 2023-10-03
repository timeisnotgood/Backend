const mongoose = require("mongoose")

const users = mongoose.Schema({
    username :{
        type : String,
        required : [true, "Please add the username"]
    },
    email :{
        type : String,
        required : [true, "Please add the email"]
    },
    password :{
        type : String,
        required : [true, "Please add the password"]
    }
})

module.exports = mongoose.model("user", users)