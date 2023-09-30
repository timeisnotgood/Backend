const asynchandler = require("express-async-handler")
const newa = require("../model/contactschema")

// desc get all contacts from db
// method GET 
// Access public

const allcontacts = asynchandler(async(req, res)=>{
    const data = await newa.find();
    console.log(data);
    res.status(200).json(data)
})

// desc create contacts in db
// method POST 
// Access public

const createcontact = asynchandler(async(req, res)=>{
    const {name, email, password} = req.body

    if(!name || !email || !password){
        res.send("All Fileds are Mandatory !!")
    }
    const filter = await newa.find({email : email})
    console.log(filter);

    if(!filter){
        res.status(403)
        throw new Error("User already exist !!")
    }else{
        const data = await newa.create({
        name : name,
        email : email,
        password : password
        })

    res.status(201).json(data)
    }
    
})

// desc get Single contacts from db
// method GET 
// Access public

const getcontact = asynchandler(async(req, res)=>{
    const id = req.params.id
    const data = await newa.findById(id)
    if(!data){
        res.status(404)
        throw new Error("Contact not Found")
    }
    res.status(200).json(data)
})

// desc Update a contacts in db
// method PUT 
// Access public

const updatecontact = asynchandler(async(req, res)=>{
    const {name, email, password} = req.body
    const id = req.params.id
    console.log(id);
    const data = await newa.findById(id)
    if(!data){
        res.status(404)
        throw new Error("Contact not Found")
    }

    const insert = await newa.findByIdAndUpdate(id,{
        name,
        email,
        password
    },{new : true})
    res.status(200).json(insert)
})

// desc Delete a contacts in db
// method DELETE 
// Access public

const deletecontact = asynchandler(async(req, res)=>{
    const id = req.params.id
    console.log(id);
    const data = await newa.findById(id)
    if(!data){
        res.status(404)
        throw new Error("Contact not Found")
    }
    const delet = await newa.deleteOne({_id : id})
    if(delet){
        res.status(200).json({message:`The Deleted contact is ${req.params.id}`})
    }

})


module.exports = {allcontacts, createcontact, getcontact, updatecontact, deletecontact} 


