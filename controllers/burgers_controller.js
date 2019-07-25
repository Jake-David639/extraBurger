// import dependencies
const express = require('express');
const db = require('../models/');
const router = express.Router();

// get route to render the homepage
router.get('/', (req, res) => {
    res.redirect('/burgers');
});
router.get('/burgers', (req, res) => {
    db.Burger.findAll().then(burgerData => {
        console.log(burgerData);
        const burgerObj = {burger: burgerData};
        res.render("index", burgerObj);
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
