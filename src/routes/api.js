const express = require('express');
const bodyParser = require('body-parser');

const QItem = require('../models/character');
const Map = require('../models/map');

const passport = require('../passport');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/api/create', function(req, res) {
    const newQItem = new QItem({
        'studentName': req.body.nameField,
        'tableNumber': req.body.tableField,
        'question': req.body.problemField,
        'claimed': false,
        'timestamp': + new Date()
    });

    newQItem.save(function(err, story) {
        if (err) console.log(err);
    });

    res.redirect('/index');
});

router.get('/viewQ')


router.post('/claim', function(req, res) {

});

module.exports = router;