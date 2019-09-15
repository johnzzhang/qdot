const express = require('express');
const bodyParser = require('body-parser');

const QItem = require('../models/character');
const Map = require('../models/map');

const passport = require('../passport');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/create', function(req, res) {
    const newQItem = new QItem({
        'studentName': req.body.studentName,
        'tableNumber': req.body.tableNumber,
        'question': req.body.question
    });

    newQItem.save(function(err, story) {
        if (err) console.log(err);
    });

    res.redirect('/index');
});

module.exports = router;