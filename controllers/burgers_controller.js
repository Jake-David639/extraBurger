// import dependencies
const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

// get route to render the homepage
router.get('/', (req, res) => {
    res.redirect('/burgers');
});
router.get('/burgers', (req, res) => {
    burger.findAll((burgerData) => {
        res.render("index", { burger_data: burgerData });
    });
});
// post route to add new burger to db
router.post('/burgers/create', (req, res) => {
    burger.create(req.body.burger_name, result => {
        console.log(result);
        res.redirect('/');
    });
});
// put route to update existing burger data
router.put('/burgers/:id', (req, res) => {
    burger.update(req.params.id, result => {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;
