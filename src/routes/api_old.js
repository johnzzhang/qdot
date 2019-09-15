const express = require('express');
const bodyParser = require('body-parser');

const Character = require('../models/character');
const Lobby = require('../models/lobby');
const Map = require('../models/map');

const passport = require('../passport');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// login
router.post('/login', passport.authenticate('local-login', {
	successRedirect: '/lobby',
	failureRedirect: '/' ,
	failureFlash: true
}));

// signup
router.post('/signup', passport.authenticate('local-signup', {
	successRedirect: '/lobby',
	failureRedirect: '/',
	failureFlash: true
}));

//logout
router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

// notes
router.get("/notes", function(req, res) {
    const name = req.user.username;
    User.find({username: name}, function(err, user) {
        res.send(notes);
    });
});

router.post("/notes", function(req,res) {
    const name = req.user.username;
    const notes = req.body.notes;
    User.update({username: name}, {$set: {notes: notes}}, function(err,results){
        if(err)
        {
            console.log(err.message);
        } else {
            console.log(results);
        }
    });
});

// maps
router.get("/map/draw", function(req,res) {
    const lobby_id = req.query.lobby_id;
    Map.findOne({'lobby_id':lobby_id}, function(err,map) {
        res.send(map);
    });
});

router.post("/map/save", function(req,res) {
    Map.update({lobby_id : req.body.lobby_id},
        {$set: 
            { 
                mapImage: req.body.mapImage,
                zoom: req.body.zoom,
                center: req.body.center,
                markers: req.body.markers
            }
        },
        function(err,results) {
        if(err) {
            console.log("An error occured: ", err.message);
        } else {
            console.log(results);
        }
    });
    res.end();
});

// lobbies
router.get("/lobby/player", function(req, res) {
	const name = req.user.username;
	Lobby.find({ player_list: name }, function(err, lobbies) {
		if(lobbies) {
			res.send(lobbies);
		}
		else {
			res.send({});
		}
	})
});

router.get("/lobby/creator", function(req, res) {
	const name = req.user.username;
	Lobby.find({ creator_name: name }, function(err, lobbies) {
        if(lobbies) {
			res.send(lobbies);
		}
		else {
			res.send({});
		}
	})
});

router.post("/lobby/create", function(req, res) {
    let lobby_id = Math.random().toString(36).substring(6);
    if(req.body.lobby_id) {
        lobby_id = req.body.lobby_id;
    }
	const creator_name = req.user.username;

    Lobby.find({ lobby_id: lobby_id }, function(err, lobby) {
        if(lobby){
            res.redirect('/lobby');
        }
        else {
            const newLobby = Lobby();
            newLobby.lobby_id = lobby_id;
            newLobby.creator_name = creator_name;
            newLobby.character_list = [];

            newLobby.save(function(err) {
                if(err) {
                    console.log(err);
                    throw err;
                }
            });
            res.redirect('/lobby/' + lobby_id + '/dm');
        }
    });

    const newMap = Map();
    newMap.lobby_id = lobby_id;
    newMap.zoom = 4;
    newMap.center = {'lat':20,'lng':20};
    newMap.mapImage = '/static/images/maps/tavern.jpg';

    newMap.save(function(err) {
        if(err) {
            console.log(err);
            throw err;
        }
    });

	res.redirect('/lobby/' + lobby_id + '/dm');
});

router.post("/lobby/join", function(req,res) {
	let lobbyId = req.body.lobby_id;
	let charId = req.body.char_id;
	const playerName = req.user.username;

	Lobby.findOne({'lobby_id': lobbyId}, function(err, lobby) {
		if(lobby != null) {
			if(!lobby.character_list.includes(charId)) {
				lobby.character_list.push(charId);			
			
    			if(lobby.creator_name != playerName && !lobby.player_list.includes(playerName)) {
    				lobby.player_list.push(playerName);

    				lobby.save(function(err) {
    					if(err) {
    						throw err;
    					}
    				});
    			}
                else {
                    lobby.save(function(err) {
                        if(err) {
                            throw err;
                        }
                    });
                }
            }
			res.redirect('/lobby/' + lobbyId + '/player');
		}
		else {
			res.redirect('/lobby');
		}
	});	
});

router.get("/lobby/characters", function(req, res) {
	const lobbyId = req.query.lobby_id;

	Lobby.findOne({'lobby_id': lobbyId}, function(err, lobby) {
		if(lobby) {
			res.send(lobby.character_list);
		}
		else {
			res.send({});
		}
	});
});

//characters
router.get('/charactersheet', function(req,res) {

	const charId = req.query.char_id;
	const username = req.user.username;

	Character.findOne({ '_id': charId }, function(err, charactersheet) {
		// console.log(charactersheet);
		res.send(charactersheet);
	});
});

router.get('/character', function(req,res) {
Character.find({playerName: req.user.username}, function(err,characters) {
        // console.log(characters);
		res.send(characters);
	});
});

router.get('/edit/view/:charName', function(req,res) {
    Character.find({charName:req.params.charName}, function(err,characters) {
        res.send(characters);
    });
});


router.post('/edit/save/description/:charName', function(req,res) {
    Character.update({charName:req.params.charName}, 
        {$set: { 
            charRace: req.body.charRace, 
            charLevel: req.body.charLevel,
            charAlignment : req.body.charAlignment,
            charBackground : req.body.charBackground,
            charClass : req.body.charClass,
            charAge : req.body.charAge,
            charSkin : req.body.charSkin,
            charEyes : req.body.charEyes,
            charHeight : req.body.charHeight,
            charWeight : req.body.charWeight,
            charHair : req.body.charHair
        }},
        function(err,results) {
        if(err) {
            console.log("An error occured: ", err.message);
        } else {
            console.log(results);
        }
    });
});

router.post('/edit/save/stats/:charName', function(req,res) {
    Character.update({charName:req.params.charName}, 
        {$set: { 
            charStrength : req.body.charStrength,
            charDexterity : req.body.charDexterity,
            charConstitution : req.body.charConstitution,
            charIntelligence : req.body.charIntelligence,
            charWisdom : req.body.charWisdom,
            charCharisma : req.body.charCharisma,
            charTotalHitDie : req.body.charTotalHitDie,
            charInspiration : req.body.charInspiration,
            charCurrentHitDie : req.body.charCurrentHitDie,
            charExperience : req.body.charExperience,
            charSavingThrowPro : 
            {
                str : req.body.charStrPro,
                dex : req.body.charDexPro,
                con : req.body.charConPro,
                int : req.body.charIntPro,
                wis : req.body.charWisPro,
                cha : req.body.charChaPro
            },
            charAcrobatics : {pro:req.body.charAcrobaticsPro,mod:req.body.charAcrobaticsMod},
            charAnimalHandling : {pro:req.body.charAnimalHandlingPro,mod:req.body.charAnimalHandlingMod},
            charArcana : {pro:req.body.charArcanaPro,mod:req.body.charArcanaMod},
            charAthletics : {pro:req.body.charAthleticsPro,mod:req.body.charAthleticsMod},
            charDeception : {pro:req.body.charDeceptionPro,mod:req.body.charDeceptionMod},
            charHistory : {pro:req.body.charHistoryPro,mod:req.body.charHistoryMod},
            charInsight : {pro:req.body.charInsightPro,mod:req.body.charInsightMod},
            charIntimidation : {pro:req.body.charIntimidationPro,mod:req.body.charIntimidationMod},
            charInvestigation : {pro:req.body.charInvestigationPro,mod:req.body.charInvestigationMod},
            charMedicine : {pro:req.body.charMedicinePro,mod:req.body.charMedicineMod},
            charNature : {pro:req.body.charNaturePro,mod:req.body.charNatureMod},
            charPerception : {pro:req.body.charPerceptionPro,mod:req.body.charPerceptionMod},
            charPerformance : {pro:req.body.charPerformancePro,mod:req.body.charPerformanceMod},
            charPersuasion : {pro:req.body.charPersuasionPro,mod:req.body.charPersuasionMod},
            charReligion : {pro:req.body.charReligionPro,mod:req.body.charReligionMod},
            charSleightOfHand : {pro:req.body.charSleightOfHandPro,mod:req.body.charSleightOfHandMod},
            charStealth : {pro:req.body.charStealthPro,mod:req.body.charStealthMod},
            charSurvival : {pro:req.body.charSurvivalPro,mod:req.body.charSurvivalMod}
        }},
        function(err,results) {
        if(err) {
            console.log("An error occured: ", err.message);
        } else {
            console.log(results);
        }
    });
});

router.post('/edit/save/combat/:charName', function(req,res) {
    Character.update({charName:req.params.charName}, 
        {$set: { 
            charHPMax : req.body.charHPMax,
            charCurrentHP : req.body.charCurrentHP,
            charTemporaryHP : req.body.charTemporaryHP,
            charArmorClass : req.body.charArmorClass,
            charInitiative : req.body.charInitiative,
            charSpeed : req.body.charSpeed,
            charAttacks : req.body.charAttacks,
            charDeathSavingThrows : {
                success : req.body.charDeathSuccess,
                fail : req.body.charDeathFail
            }
        }},
        function(err,results) {
        if(err) {
            console.log("An error occured: ", err.message);
        } else {
            console.log(results);
        }
    });
});

router.post('/edit/save/spells/:charName', function(req,res) {
    Character.update({charName:req.params.charName}, 
        {$set: { 
            charSpellAbility : req.body.charSpellAbility,
            charPreparedSpells : req.body.charPreparedSpells,
            charKnownSpells : req.body.charKnownSpells
        }},
        function(err,results) {
        if(err) {
            console.log("An error occured: ", err.message);
        } else {
            console.log(results);
        }
    });
});

router.post('/edit/save/equipment/:charName', function(req,res) {
    Character.update({charName:req.params.charName}, 
        {$set: { 
            charCoin : 
            {
                GP : req.body.charGP,
                SP : req.body.charSP,
                CP : req.body.charCP
            },
            charWeapons : req.body.charWeapons,
            charArmorShield : req.body.charArmorShield,
            charMisc : req.body.charMisc
        }},
        function(err,results) {
        if(err) {
            console.log("An error occured: ", err.message);
        } else {
            console.log(results);
        }
    });
});

router.post('/edit/save/features/:charName', function(req,res) {
    Character.update({charName:req.params.charName}, 
        {$set: { 
            charProficiencies : req.body.charProficiencies,
            charLanguages : req.body.charLanguages,
            charFeatures : req.body.charFeatures
        }},
        function(err,results) {
        if(err) {
            console.log("An error occured: ", err.message);
        } else {
            console.log(results);
        }
    });
});

router.post('/edit/save/story/:charName', function(req,res) {
    Character.update({charName:req.params.charName}, 
        {$set: { 
            charPersonality : req.body.charPersonality,
            charBonds : req.body.charBonds,
            charIdeals : req.body.charIdeals,
            charFlaws : req.body.charFlaws,
            charBackstory : req.body.charBackstory
        }},
        function(err,results) {
        if(err) {
            console.log("An error occured: ", err.message);
        } else {
            console.log(results);
        }
    });
});

router.post('/create', function(req, res) {
    const newCharacter = new Character({
        'playerName': req.user.username,

        'charName': req.body.charName,
        'charRace': req.body.charRace,
        'charClass': req.body.charClass,
        'charBackground': req.body.charBackground,
        'charAlignment': req.body.charAlignment,
        'charLevel': req.body.charLevel,
        'charAge': req.body.charAge,
        'charHeight': req.body.charHeight,
        'charWeight': req.body.charWeight,
        'charEyes': req.body.charEyes,
        'charSkin': req.body.charSkin,
        'charHair': req.body.charHair,
        'charAppearance': req.body.charAppearance,

        'charStrength': req.body.charStrength,
        'charDexterity': req.body.charDexterity,
        'charConstitution': req.body.charConstitution,
        'charIntelligence': req.body.charIntelligence,
        'charWisdom': req.body.charWisdom,
        'charCharisma': req.body.charCharisma,
        'charAcrobatics': { 'pro': 'charAcrobaticsPro' in req.body , 'mod': req.body.charAcrobaticsMod },
        'charAnimalHandling': { 'pro': 'charAnimalHandlingPro' in req.body , 'mod': req.body.charAnimalHandlingMod },
        'charArcana': { 'pro': 'charArcanaPro' in req.body , 'mod': req.body.charArcanaMod },
        'charAthletics': { 'pro': 'charAthleticsPro' in req.body , 'mod': req.body.charAthleticsMod },
        'charDeception': { 'pro': 'charDeceptionPro' in req.body , 'mod': req.body.charDeceptionMod },
        'charHistory': { 'pro': 'charHistoryPro'  in req.body , 'mod': req.body.charHistoryMod },
        'charInsight': { 'pro': 'charInsightPro' in req.body , 'mod': req.body.charInsightMod },
        'charIntimidation': { 'pro': 'charIntimidationPro' in req.body , 'mod': req.body.charInvestigationMod },
        'charInvestigation': { 'pro': 'charInvestigationPro' in req.body , 'mod': req.body.charInvestigationMod },
        'charMedicine': { 'pro': 'charMedicinePro' in req.body , 'mod': req.body.charMedicineMod },
        'charNature': { 'pro': 'charNaturePro' in req.body , 'mod': req.body.charNatureMod },
        'charPerception': { 'pro': 'charPerceptionPro' in req.body , 'mod': req.body.charPerceptionMod },
        'charPerformance': { 'pro': 'charPerformancePro' in req.body , 'mod': req.body.charPerformanceMod },
        'charPersuasion': { 'pro': 'charPersuasionPro' in req.body , 'mod': req.body.charPersuasionMod },
        'charReligion': { 'pro': 'charReligionPro' in req.body , 'mod': req.body.charReligionMod },
        'charSleightOfHand': { 'pro': 'charSleightOfHandPro' in req.body , 'mod': req.body.charSleightOfHandMod },
        'charStealth': { 'pro': 'charStealthPro' in req.body , 'mod': req.body.charStealthMod },
        'charSurvival': { 'pro': 'charSurvivalPro' in req.body , 'mod': req.body.charSurvivalMod },
        'charSavingThrowPro':
        {
            'str': 'charStrPro' in req.body,
            'dex': 'charDexPro' in req.body,
            'con': 'charConPro' in req.body,
            'int': 'charIntPro' in req.body,
            'wis': 'charWisPro' in req.body,
            'cha': 'charChaPro' in req.body
        },
        'charTotalHitDie': req.body.charTotalHitDie,
        'charCurrentHitDie': req.body.charTotalHitDie,
        'charInspiration': 0,
        'charExperience': 0,

        'charHPMax': req.body.charHPMax,
        'charCurrentHP': req.body.charHPMax,
        'charTemporaryHP': 0,
        'charArmorClass': req.body.charArmorClass,
        'charInitiative': req.body.charInitiative,
        'charSpeed': req.body.charSpeed,
        'charAttacks': req.body.charAttacks,
        'charDeathSavingThrows':
        {
            'success': 0,
            'fail': 0
        },

        'charSpellAbility': req.body.charSpellAbility,
        'charPreparedSpells': '',
        'charKnownSpells': req.body.charKnownSpells,

        'charCoin':
        {
            'GP': req.body.charGP,
            'SP': req.body.charSP,
            'CP': req.body.charCP
        },
        'charWeapons': req.body.charWeapons,
        'charArmorShield': req.body.charArmorShield,
        'charMisc': req.body.charMisc,

        'charProficiencies': req.body.charProficiencies,
        'charLanguages': req.body.charLanguages,
        'charFeatures': req.body.charFeatures,

        'charPersonality': req.body.charPersonality,
        'charBonds': req.body.charBonds,
        'charIdeals': req.body.charIdeals,
        'charFlaws': req.body.charFlaws,
        'charBackstory': req.body.charBackstory
    });

    newCharacter.save(function(err, story) {
        if (err) console.log(err);
    });

    res.redirect('/character/view');
});

module.exports = router;