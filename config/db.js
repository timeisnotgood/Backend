const mongoose = require("mongoose")

const db = async()=>{
    try {
        const connect = await mongoose.connect("mongodb://127.0.0.1:27017/")
        console.log({"Host" : connect.connection.host, "Name": connect.connection.name});
    } catch (error) {
        console.log(error);
    }
}


module.exports = db