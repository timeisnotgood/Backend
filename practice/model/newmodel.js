const mongoose = require('mongoose')

const deema = mongoose.Schema({
    username:{
        type : String,
        required : [true, "This field is Mandatory"]
    },
    password:{
        type :String,
        required : [true, "This field is Mandatory"]
    }
})

const news = mongoose.model('abcd', deema)
module.exports = news