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
    db.Burger.create({burger_name: req.body.burger_name})
    .then(result => {
        console.log(result);
        res.redirect('/');
    });
});
// put route to update existing burger data
router.put('/burgers/:id', (req, res) => {
    db.Burger.update({ devoured: true }, {where: {id: req.params.id}
    }).then(result => {
        console.log(result);
        res.json('/');
    });
});

module.exports = router;
