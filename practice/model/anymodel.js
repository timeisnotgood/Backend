const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    name :{
        type : String,
        require :[true, "Please enter name"]
    },
    liked :{
        type : String,
        require :[true, "Type something"]
    }
},{timestamp : true})


const detail = mongoose.model("practice", Schema)

module.exports = detail 