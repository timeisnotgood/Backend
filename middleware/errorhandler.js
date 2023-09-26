const { constants } = require("../constants")

const errorhandler = (req, res, err, next) =>{
    const status = res.status ? res.status : 500
    switch (status) {
        case constants.VALIDATION_ERROR:
            res.json({
                title : "VALIDATION_ERROR",
                message : err.message,
                stack : err.stack
            })
            break;
        case constants.UNAUTHORISED:
            res.json({
                title : "Un Authorised",
                message : err.message,
                stack : err.stack
            })
        case constants.FORBIDDEN:
            res.json({
                title : "Forbidden",
                message : err.message,
                stack : err.stack
            })
        case constants.NOT_FOUND:
            res.json({
                title : "NOT_FOUND",
                message : err.message,
                stack : err.stack
            })
    
        default:
            console.log("No error found !!");
            break;
    }
}


module.exports = errorhandler;