const logger = (req,res,next)=>{
    console.log("Logging...")
    next()
}

const authenticate = (req,res,next)=>{
    console.log("Authenticating...")
    next()
}

module.exports.logger = logger
module.exports.authenticate = authenticate