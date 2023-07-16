const joi = require("joi")

const authschema = joi.object({
    username : joi.string().lowercase().required(),
    password : joi.string().min(10).required()
})

module.exports = {
    authschema,
}