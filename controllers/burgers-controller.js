const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js');

// Router to VIEW all burgers.

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log('hbsObject', hbsObject);
        res.render('index', hbsObject);
    });
});

// Post Router

// Update Router



module.exports = router;