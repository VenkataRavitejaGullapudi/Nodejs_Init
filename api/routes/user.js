const express = require('express');
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");

const router = express.Router();


router.post('/signin', (req, res) => {
    const user = {
        name: req.body.name,
        pass: req.body.pass
    }

    SECRET = '1234567'

    //Creating a token
    var token = jwt.sign({ _id: user.name }, SECRET);

    //Passing token using Cookie
    res.cookie("token", token, { expire: new Date() + 9999 });

    //Send response to frontend
    res.json({
        token,
        user: user,
    });
})




module.exports = router