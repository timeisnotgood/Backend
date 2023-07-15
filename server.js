const express = require("express")
const errors = require("./middleware/errorHandler")
const connectdb = require("./config/dbconnect")
const dotenv = require("dotenv").config()

connectdb()
const app = express()
const port = process.env.PORT || 5000

app.use(errors)
app.use(express.json())
app.use('/api/contacts', require("./routes/contactsroute"))
app.use('/api/users', require("./routes/usersroute"))
// app.use('/api/us', require("./routes/us"))

app.listen(port, (req, res)=>{
    console.log("Server is being connected in :", port);
})



 
