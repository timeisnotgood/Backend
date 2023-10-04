const express = require("express")
const router = express.Router()
const {resgisteruser, loginuser, currentuser} = require("../controllers/usercontroller")
const validation = require("../middleware/validatejwt")


router.post('/registeruser',resgisteruser)
router.post('/loginuser',loginuser)
router.get("/currentuser", validation,currentuser)

module.exports = router