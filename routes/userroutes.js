const express = require("express")
const router = express.Router()
const {resgisteruser, loginuseruser, currentuser} = require("../controllers/usercontroller")


router.post('/registeruser',resgisteruser)
router.post('loginuser',loginuseruser)
router.get("/currentuser",currentuser)

module.exports = router