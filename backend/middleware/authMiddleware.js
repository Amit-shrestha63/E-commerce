//middleware to protect the routes
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const e = require('express');
const protect = async (req, res, next) => { 
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //Get the token from the header
            token = req.headers.authorization.split(' ')[1];
            //Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            //Get the user from the token
            req.user = await User.findById(decoded.user.id).select('-password');//Exclude the password from the user object

            next();
        }
        catch (error) {
            console.error('token verififcation failed' ,error);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }
    else {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

module.exports =  protect ;