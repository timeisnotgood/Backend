const express = require("express")
const errors = require("./middleware/errorHandler")
const connectdb = require("./config/dbconnect")
const dotenv = require("dotenv").config()
const fs = require('node:fs');
const path = require("node:path");

connectdb()
const app = express()
const port = process.env.PORT || 5000

app.use(errors)
app.use(express.json())
app.use('^/$', (req, res, next) =>{
    fs.readFile(path.resolve('./assets/index.html'), 'utf-8', (err, data)=>{
        if(err){
            console.log(err);
            return res.status(500).send("Something went Wrong")
        }
        return res.send
    })
})


app.use('/api/contacts', require("./routes/contactsroute"))
app.use('/api/users', require("./routes/usersroute"))
// app.use('/api/us', require("./routes/us"))

app.listen(port, (req, res)=>{
    console.log("Server is being connected in :", port);
})



 
