const express = require('express');      
const router = express.Router();      
const User = require('../models/User')      
const { body, validationResult } = require('express-validator');      
const bcrypt = require('bcryptjs');      
var jwt = require('jsonwebtoken');      
const { findOne } = require('../models/User');      
const JWT_SECRET = 'd7f0asf7jlajdsf80asdf/79087asd';      
const fetchuser = require('../middleware/fetchuser')      
      
// Route : 1 >>> creat a user using post "/api/auth/createuser" . //no login required      
router.post('/createuser', [      
    body('name', 'Enter a valid name').isLength({ min: 3 }),      
    body('email', 'Enter a valid email').isEmail(),      
    body('password', 'Password must be atleast five characters for security purpose').isLength({ min: 5 }),      
      
], async (req, res) => {      
    let success = false;      
    const errors = validationResult(req);      
    if (!errors.isEmpty()) {      
        return res.status(400).json({ errors: errors.array() });      
    }      
    try {      
        let user = await User.findOne({ email: req.body.email })      
        if (user) {      
            res.status(400).json({ error: "sorry a user with this email already exists" });      
        }      
        // adding salt in password      
        const salt = await bcrypt.genSalt(10);      
        let secpass = await bcrypt.hash(req.body.password, salt)      
        user = await User.create({      
            name: req.body.name,      
            email: req.body.email,      
            password: secpass,        
        })      
        const data = {      
            user: {      
                id: user.id      
            }      
        }      
        const authtoken = jwt.sign(data, JWT_SECRET)      
        success = true;      
        res.json({ success, authtoken })      
    }      
    catch (error) {      
        console.log(error.message)      
        res.status(500).send('some Error Occured')      
    }      
})      
// Route : 2 >>> login user using post "/api/auth/login" . //no login required      
router.post('/login', [      
    body('email', "Enter a vaild email").isEmail(),      
    body('password', "Password can't be blank").exists(),      
], async (req, res) => {      
    let success = false;      
    const errors = validationResult(req);      
    if (!errors.isEmpty()) {      
        return res.status(400).json({ errors: errors.array() })      
    }      
    const { email, password } = req.body      
    try {      
        const user = await User.findOne({ email });      
        if (!user) {      
            return res.status(400).json({ success, error: "Please try to login with correct credentials" })      
        }      
        const passwordcompare = await bcrypt.compare(password, user.password)      
        if (!passwordcompare) {      
            return res.status(400).json({ success, error: "Please try to login with correct credentials" })        
        }      
        const data = {      
            user: {      
                id: user.id      
            }      
        }      
        const authtoken = jwt.sign(data, JWT_SECRET)      
        success = true;      
        res.json({ success, authtoken })      
    }      
    catch (error) {      
        console.log(error.message)      
        res.status(500).send('some Error Occured')      
    }      
})      
      
// Route 3 >>> get loggedin user details "api/auth/getuser" login requied       
router.post('/getuser',fetchuser, async(req, res) => {      
    try {      
      userid = req.user.id      
     const user = await User.findById(userid).select('-password')      
     res.json(user)      
    }      
    catch (error) {      
        console.log(error.message)      
        res.status(500).send('some Error Occured')      
    }      
})      
      
      
      
module.exports = router;            