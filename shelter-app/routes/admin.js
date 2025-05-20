const express = require('express');
const router = express.Router();

// ?isAdmin=true
router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send('Sorry, not an admin.');
})

router.get('/secretpage', (req, res) => {
    res.send('This is a secret page.');
})

router.get('/deleteeverything', (req, res) => {
    res.send('Ok, delete it all.');
})

module.exports = router;