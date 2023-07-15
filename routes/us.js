const express = require("express")
const router = express.Router()

const {register, login, current} = require("../controllers/uscontroller")

router.post('/register', register)
router.post("/login", login)
router.post("/current", current)

module.exports = router