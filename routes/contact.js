const express = require('express');
// create router
const router = express.Router();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// loads contents into process.env
dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
})


// GET /contact
router.get('/', (req, res) => {
    res.render('contact', {
        title: 'Contact Us',
        submitted: false,
    })
})

// POST /contact
router.post('/', (req, res) => {
    transporter.sendMail({
        from: process.env.MAIL_FROM, // sender address
        to: process.env.MAIL_TO, // list of receivers
        subject: `New Contact From ${req.body.name}`,
        html: `<b>New Contact</b>
        <b>Email: </b>${req.body.email}
        <b>Name: </b>${req.body.name}
        <b>Comments: </b>${req.body.comments}`,
    })
        .then(status => {
            console.log(status);

            res.render('contact', {
                title: 'Thank you',
                submitted: true,
            })
        })
})
module.exports = router;