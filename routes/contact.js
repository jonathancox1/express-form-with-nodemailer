const express = require('express');
// create router
const router = express.Router();


// GET /contact
router.get('/', (req, res) => {
    res.render('contact', {
        title: 'Contact Us',
        submitted: false,
    })
})

// POST /contact
router.post('/', (req, res) => {
    console.log(req.body);

    res.render('contact', {
        title: 'Thank you',
        submitted: true,
    })
})


module.exports = router;