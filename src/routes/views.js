// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// public endpoints

router.use(express.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// home
router.get('/', function(req,res) {
        /*
        if(req.isAuthenticated()) {
            res.redirect('/lobby')
        }
        else {
            res.sendFile('index.html', { root: 'src/views' });
        }
        */
        res.sendFile('index.html', { root: 'src/views' });
});

router.get('/admin', function(req,res) {
    res.sendFile('admin.html', { root: 'src/views' })
});

// lobbies

// router.get("/lobby", isLoggedIn, function(req,res) {
//         res.sendFile('prelobby.html', { root: 'src/views' });
// });

// router.get('/lobby/*/dm', isLoggedIn, function(req,res) {
//         res.sendFile('dmlobby.html', { root: 'src/views' });
// });

// router.get("/lobby/*/player", isLoggedIn, function(req,res) {
//         res.sendFile('lobby.html', { root: 'src/views' });
// });

// router.get("/lobby/spectate", function(req, res) {
//         let lobby_id = req.query.lobby_id;
//         //console.log(lobby_id)
//         res.redirect("/lobby/" + lobby_id + "/spectate")
// });

// router.get("/lobby/:lobby_id/spectate", function(req, res) {
//         let lobby_id = req.params.lobby_id;
//         //console.log(lobby_id);
//         res.sendFile('spectatorlobby.html', { root: 'src/views' });
// });

// router.get("/lobby/:lobby_id", function(req, res) {
//         res.redirect("/lobby/" + req.params.lobby_id + "/spectate");
// });

// // characters
// router.get('/character/create', isLoggedIn, function(req,res) {
//         res.sendFile('character_create.html', { root: 'src/views' });
// });

// router.get('/character/view', isLoggedIn, function(req,res) {
//         res.sendFile('character_view.html', { root: 'src/views' });
// });


// router.get('/character/:charName/edit', function(req,res) {
//         res.sendFile('character_edit.html', { root: 'src/views' });
// });

// // how to
// router.get('/howto', function(req, res) {
//         res.sendFile('howto.html', { root: 'src/views' })
// });


// // maps
// router.get('/upload', isLoggedIn, function(req,res) {
//         res.sendFile('assets.html', { root: 'src/views' });
// });

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
	const devMode = false;

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated() || devMode)
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

// test url for new features
router.get('/test', function(req,res) {
        res.sendFile('test.html', { root: 'src/views' });
});

module.exports = router;