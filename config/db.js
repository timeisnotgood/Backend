const mongoose = require("mongoose")

const db = async()=>{
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log({"Host" : connect.connection.host, "Name": connect.connection.name});
    } catch (error) {
        console.log(error);
    }
}


module.exports = db