var express = require('express')
var router = express.Router();
const Admins = require('../models/Admins')
const Package = require('../models/Package')

//create an admin
router.post('/create', (req, res) => {

    const admin = new Admins({
        username: req.body.username,
        password: req.body.password,

    })
    admin.save().then(adm => {
        console.log("admin Added")
        try {
            res.status(200).send({
                message: 'Admin created successfully !',
                data: adm
            })

        } catch (err) {
            res.status(502).send({
                message: 'OOPS ! server error',
                error: err
            })
        }

    })
})

//Login Admin
router.post('/adminLogin', (req, res) => {
    Admins.findOne({
        username: req.body.username,
        password: req.body.password
    }).then(adm => {
        if (adm) {
            console.log("found")
            res.send({
                message: 'successfully logged in ',
                data: adm,
                messageCode: "1000"
            })
        }
        else {
            console.log(" not found")
            res.send({
                message: 'Invalid admin credentials',
                data: adm,
                messageCode: "1001"
            })
        }

    })
})

//create a course package
router.post('/createPackage', (req, res) => {

    const pack = new Package({
        courseName: req.body.courseName,
        description: req.body.description,
        category: req.body.category,
        duration: req.body.duration

    })
    pack.save().then(pkg => {
        console.log("Course Added")
        try {
            res.status(200).send({
                message: 'Course created successfully !',
                data: pkg,
                messageCode: "1000"
            })

        } catch (err) {
            res.status(502).send({
                message: 'OOPS ! server error',
                error: err
            })
        }

    })
})

//Get all course details
router.get('/getAllPackages', (req, res) => {
    const pkg = Package.find().then(pkgs => {
        res.send(pkgs);
    })
    console.log(pkg)
})

//update course details by id
router.put('/updatePackage/:id', (req, res) => {
    var id = req.params.id;
    Package.findOne({ _id: id }).then(pkg => {
        if (Package) {
            console.log("found package")
                pkg.courseName = req.body.courseName,
                pkg.description = req.body.description,
                pkg.category = req.body.category,
                pkg.duration = req.body.duration

            pkg.save()
            res.status(200).send({
                message: 'Course updated successfully !',
                messageCode: '1000',
                data: pkg
            })


        }
    })

})

//Delete a course papckage
router.delete('/deletePackage/:id', (req, res) => {

    Package.findById(req.params.id).then(pkg => {
        if (pkg) {
            pkg.remove();
            res.send(
                {
                    message: pkg.courseName + ' package was deleted successfully',
                    data: pkg
                }
            )
        }
        else {
            res.send({
                message: "No such package"
            })
        }

    }).catch(err => {
        res.send(err)
    })
})

//Get course details by package name
router.get('/getbyPackageName/:Name', (req, res) => {
    Package.findOne({
        courseName: req.params.Name
    }).then(pkg => {


        try {
            res.status(200).send({
                message: 'Course retrived successfully ok !',
                data: pkg
            })

        } catch (err) {
            res.status(502).send({
                message: 'OOPS ! server error',
                error: err
            })
        }

    })
})
module.exports = router;