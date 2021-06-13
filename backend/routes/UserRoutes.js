var express = require('express')
var router = express.Router();
const Users = require('../models/Users')

/*
    method : POST
    description : create new user
    params : Body {
        firstName,lastName,age,country,email,password
    }
*/
router.post('/create', (req, res) => {

    const user = new Users({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        country: req.body.country,
        email: req.body.email,
        password: req.body.password
    })
    user.save().then(userr => {
        console.log("user Added")
        try {
            res.status(200).send({
                message: 'user created successfully !',
                data: userr
            })

        } catch (err) {
            res.status(502).send({
                message: 'OOPS ! server error',
                error: err
            })
        }

    })
})

/*
    method : POST
    description : user login
    params : Body {
        email,password
    }
*/
router.post('/userLogin', (req, res) => {
    Users.findOne({
        email: req.body.email,
        password: req.body.password
    }).then(user => {
        if (user) {
            console.log("found")
            res.send({
                message: 'successfully logged in ',
                data: user,
                messageCode: "1000"
            })
        }
        else {
            console.log(" not found")
            res.send({
                message: 'Invalid user credentials',
                data: user,
                messageCode: "1001"
            })
        }

    })
})

/*
    method : GET
    description : get all user details
  
*/
router.get('/getAllUserInfo', (req, res) => {
    const user = Users.find().then(user => {
        res.send(user);
    })
    console.log(user)
})


module.exports = router;