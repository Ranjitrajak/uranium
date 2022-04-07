const express = require('express');
const a = require("../logger/looger")
const router = express.Router();

router.get('/test-me', function (req, res) {
    a.name()
    

    

    res.send('My first ever api!')
});

module.exports = router;
