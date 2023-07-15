const joi = require("joi")

const authschema = joi.object({
    username : joi.string().lowercase().required(),
    password : joi.string().required()
})

module.exports = {
    authschema
}