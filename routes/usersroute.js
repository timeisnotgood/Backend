const express = require("express")
const router = express.Router()

const {registeruser, loginuser, currentuser} = require("../controllers/userscontroller")
const validatetoken = require("../middleware/tokenhandler")

router.post('/register', registeruser) 

router.post('/login', loginuser) 

router.get('/current',validatetoken, currentuser) 


module.exports = router