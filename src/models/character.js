const mongoose = require('mongoose');

const CharacterModelSchema = new mongoose.Schema({

	playerName: String,
	
	// description
	charName: String,
	charRace: String,
	charClass: String,
	charBackground: String,
	charAlignment: String,
	charLevel: Number,
	charAge: String,
	charHeight: String,
	charWeight: String,
	charEyes: String,
	charSkin: String,
	charHair: String,
	charAppearance: String,
	
	// stats
	charStrength: Number,
	charDexterity: Number,
	charConstitution: Number,
	charIntelligence: Number,
	charWisdom: Number,
	charCharisma: Number,
	charAcrobatics: { pro: Boolean , mod: Number },
	charAnimalHandling: { pro: Boolean , mod: Number },
	charArcana: { pro: Boolean , mod: Number },
	charAthletics: { pro: Boolean , mod: Number },
	charDeception: { pro: Boolean , mod: Number },
	charHistory: { pro: Boolean , mod: Number },
	charInsight: { pro: Boolean , mod: Number },
	charIntimidation: { pro: Boolean , mod: Number },
	charInvestigation: { pro: Boolean , mod: Number },
	charMedicine: { pro: Boolean , mod: Number },
	charNature: { pro: Boolean , mod: Number },
	charPerception: { pro: Boolean , mod: Number },
	charPerformance: { pro: Boolean , mod: Number },
	charPersuasion: { pro: Boolean , mod: Number },
	charReligion: { pro: Boolean , mod: Number },
	charSleightOfHand: { pro: Boolean , mod: Number },
	charStealth: { pro: Boolean , mod: Number },
	charSurvival: { pro: Boolean , mod: Number },
	charSavingThrowPro:
	{
		str: Boolean,
		dex: Boolean,
		con: Boolean,
		int: Boolean,
		wis: Boolean,
		cha: Boolean
	},
	charTotalHitDie: Number,
	charCurrentHitDie: Number,
	charInspiration: Number,
	charExperience: Number,

	// combat
	charHPMax: Number,
	charCurrentHP: Number,
	charTemporaryHP: Number,
	charArmorClass: Number,
	charInitiative: Number,
	charSpeed: Number,
	charAttacks: String,
	charDeathSavingThrows:
	{
		success: Number,
		fail: Number
	},

	// spells
	charSpellAbility: String,
	charPreparedSpells: String,
	charKnownSpells: String,

	// equipment
	charCoin:
	{
		GP: Number,
		SP: Number,
		CP: Number
	},
	charWeapons: String,
	charArmorShield: String,
	charMisc: String,

	// features
	charProficiencies: String,
	charLanguages: String,
	charFeatures: String,
	
	// story
	charPersonality: String,
	charBonds: String,
	charIdeals: String,
	charFlaws: String,
	charBackstory: String
});

module.exports = mongoose.model('CharacterModel', CharacterModelSchema);