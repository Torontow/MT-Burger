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

router.post('/api/burgers', (req, res) => {
    burger.insertOne('burger_name', req.body.name, (result) => {
        res.json({ id: result.insertId });
    })
})
// Update Router



module.exports = router;