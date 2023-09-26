const asynchandler = require("express-async-handler")
const newa = require("../model/contactschema")

// desc get all contacts from db
// method GET 
// Access public

const allcontacts = asynchandler((req, res)=>{
    const data = newa.find();
    res.status(200).json({message:"Here is the data"})
})

// desc create contacts in db
// method POST 
// Access public

const createcontact = asynchandler((req, res)=>{
    console.log(req.body);
    const {name, email, password} = req.body
    if(!name || !email || !password){
        res.send("All Fileds are Mandatory !!")
    }
    res.status(201).json({message:"Contact Created"})
})

// desc get Single contacts from db
// method GET 
// Access public

const getcontact = asynchandler((req, res)=>{
    res.status(200).json({message:`The requested contact is ${req.params.id}`})
})

// desc Update a contacts in db
// method PUT 
// Access public

const updatecontact = asynchandler((req, res)=>{
    res.status(200).json({message:`The Updated contact is ${req.params.id}`})
})

// desc Delete a contacts in db
// method DELETE 
// Access public

const deletecontact = asynchandler((req, res)=>{
    res.status(200).json({message:`The Deleted contact is ${req.params.id}`})
})


module.exports = {allcontacts, createcontact, getcontact, updatecontact, deletecontact} 