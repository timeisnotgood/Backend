const constants = require('./constants')

const { VALIDATION_ERROR ,
    UNAUTHORISED ,
    FORBIDEN ,
    NOT_FOUND, SERVER_ERROR } = constants.Contacts


    
const errors = (err,req, res, next) =>{
    const statuscode = res.statuscode ? res.statuscode : 500
    switch (statuscode) {
        case VALIDATION_ERROR :
            res.json({title:"VALIDATION FAILED",message : err.message, stackTrack : err.stack})
            break;
        case UNAUTHORISED:
            res.json({title:"UNAUTHORISED ERROR",message : err.message, stackTrack : err.stack})
        case FORBIDEN:
            res.json({title:"FORBIDEN ERROR",message : err.message, stackTrack : err.stack})
        case NOT_FOUND:
            res.json({title:"NOT_FOUND",message : err.message, stackTrack : err.stack})
        case SERVER_ERROR:
            res.json({title:"SERVER_ERROR",message : err.message, stackTrack : err.stack})
        default:
            console.log("no error all good");
            break;
    }
}

module.exports = errors