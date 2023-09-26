const mongoose = require("mongoose");

const contactschema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please add the name"]
    },
    email : {
        type : String,
        required : [true, "Please add the email"]
    },
    password : {
        type : String,
        required : [true, "Please add the password"]
    }
})

module.exports = mongoose.model("newa", contactschema)