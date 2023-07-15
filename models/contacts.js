const mongoose = require("mongoose")

const contactschema = mongoose.Schema({
    user_id : {
        type:mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "user"
    },
    name:{
        type :String,
        required : [true, "please enter the name"]
    },
    email:{
        type :String,
        required : [true, "please enter the email"]
    },
    phone:{
        type:String,
        required:[true, "please enter the phone number"]
    }
})

module.exports = mongoose.model("Contacts", contactschema)