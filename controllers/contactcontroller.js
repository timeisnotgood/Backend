
const asynchandler = require("express-async-handler")
const Contacts = require("../models/contacts")

// @Get METHOD 
// Route /api/contacts
// access public

const getcontacts = asynchandler(async (req, res) =>{
    const contact = await Contacts.find({user_id : req.user.id})
    res.json(contact)
    res.json(req.body)
    console.log(req.body);
})

// @POST METHOD
// Route /api/contacts
// access public

const createcontact = asynchandler(async(req, res) =>{
    const {name, email, phone} = req.body
    const contact = await Contacts.create({
        name, email, phone,user_id:req.user.id
    })
    res.json(contact)
    console.log("This is a post requist");

})

// @DELETE METHOD
// Route /api/contacts
// access public

const deletecontact = asynchandler(async (req, res) =>{
    console.log(res.body);
    const contact = await Contacts.findByIdAndDelete(req.params.id)
    res.json(contact)
})

// @GET METHOD
// Route /api/contacts
// access public

const getcontact = asynchandler(async (req, res) =>{
    console.log(res.body);
    const contact = await Contacts.findById(req.params.id)
    res.json(contact)
})

// @PUT METHOD
// Route /api/contacts
// access public

const updatecontact = asynchandler(async (req, res) =>{
    console.log(res.body);
    const contact = await Contacts.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json({message : "Field Updated",contact})
})


module.exports = {getcontacts, createcontact, getcontact, updatecontact, deletecontact}

