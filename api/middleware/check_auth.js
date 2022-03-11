const jwt = require('jsonwebtoken')
var auth = require('basic-auth')
var tsscompare = require('tsscmp')


JWTAUTH = (req, res, next) => {
    SECRET = '1234567'
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token)
        const decoded = jwt.verify(token, SECRET)
        req.userData = decoded
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: 'Token error ' + error
        })
    }
}

// Basic Authentication
module.exports = (req, res, next) => {
    console.log(req.headers.authorization)
    var creden = auth(req)
    console.log(creden)
    if (!creden) {
        // auth will return undefined if header is invalid
        return res.status(401).json({
            message: 'Access Denied, Invalid Header: '
        })
    }
    else if (validateCredens(creden.name, creden.pass)) {
        console.log("***App access granted***")
        // res.json({ message: "Access Granted" });
        next();
    }
    else {
        return res.status(401).json({
            message: 'Access Denied, Invalid Credentials'
        })
    }
}

function validateCredens(username, password) {
    validUser = tsscompare(username, process.env.API_KEY)
    validPass = tsscompare(password, process.env.API_SECRET_KEY)
    if (validUser && validPass) {
        return true
    }
    else {
        return false
    }
}


