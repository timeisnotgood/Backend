const express = require("express")
const router = express.Router()
const {resgisteruser, loginuser, currentuser} = require("../controllers/usercontroller")


router.post('/registeruser',resgisteruser)
router.post('/loginuser',loginuser)
router.get("/currentuser",currentuser)

module.exports = router