const express = require("express")
const router = express.Router()
const {allcontacts, createcontact, getcontact, updatecontact, deletecontact} = require("../controllers/Contactcontroller")

router.route("/").get(allcontacts).post(createcontact)

router.route("/:id").get(getcontact).put(updatecontact).delete(deletecontact)


module.exports = router