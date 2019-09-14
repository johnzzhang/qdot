function renderLobbyCharacterSheet(charId) {
	// description
	const descName = document.getElementById('sheet-name');
	const descRace = document.getElementById('sheet-race');
	const descClass = document.getElementById('sheet-class');
	const descBackground = document.getElementById('sheet-background');
	const descAlignment = document.getElementById('sheet-alignment');
	const descLevel = document.getElementById('sheet-level');

	const descAge = document.getElementById('sheet-age');
	const descHeight = document.getElementById('sheet-height');
	const descWeight = document.getElementById('sheet-weight');
	const descEyes = document.getElementById('sheet-eyes');
	const descSkin = document.getElementById('sheet-skin');
	const descHair = document.getElementById('sheet-hair');
	const descAppearance = document.getElementById('sheet-appearance');



	// stats
	const statStrength = document.getElementById('sheet-str');
	const statDexterity = document.getElementById('sheet-dex');
	const statConstitution = document.getElementById('sheet-con');
	const statIntelligence = document.getElementById('sheet-int');
	const statWisdom = document.getElementById('sheet-wis');
	const statCharisma = document.getElementById('sheet-cha');

	// combat
	const combatHP = document.getElementById('sheet-hp');
	//const combatCurrentHP = document.getElementById('sheet-currenthp');
	//const combatTemporaryHP = document.getElementById('sheet-tempororaryhp');
	const combatArmorClass = document.getElementById('sheet-armorclass');
	const combatInitiative = document.getElementById('sheet-initiative');
	const combatSpeed = document.getElementById('sheet-speed');
	const combatAttacks = document.getElementById('sheet-attacks');
	const combatDeathSavingThrows = document.getElementById('sheet-deathsavingthrows');

	//spells
	const spellAbility = document.getElementById('sheet-spellability');
	const spellAttackBonus = document.getElementById('sheet-spellattackbonus');
	const spellSaveDC = document.getElementById('sheet-spellsavedc');
	const spellSlots = document.getElementById('sheet-spellslots');
	const spellsPrepared = document.getElementById('sheet-preparedspells');
	const spellsKnown = document.getElementById('sheet-knownspells');

	// equipment
	const equipCoin = document.getElementById('sheet-coins');
	const equipWeapons = document.getElementById('sheet-weapons');
	const equipMisc = document.getElementById('sheet-misc');

	// abilities
	const abilityProficiencies = document.getElementById('sheet-proficiencies');
	const abilityLanguages = document.getElementById('sheet-languages');
	const abilityFeatures = document.getElementById('sheet-features');
	
	// story
	
	get('/api/charactersheet', { 'char_id': charId }, function(char) {
		// description
		descName.innerHTML = char.charName;
		descRace.innerHTML = char.charRace;
		descClass.innerHTML = char.charClass;
		descBackground.innerHTML = char.charBackground;
		descAlignment.innerHTML = char.charAlignment;
		descLevel.innerHTML = char.charLevel;

		descAge.innerHTML = char.charAge;
		descHeight.innerHTML = char.charHeight;
		descWeight.innerHTML = char.charWeight;
		descEyes.innerHTML = char.charEyes;
		descSkin.innerHTML = char.charSkin;
		descHair.innerHTML = char.charHair;

		// stats


		// combat
		combatHP.innerHTML = "(" + char.charCurrentHP + " + " + char.charTemporaryHP + ") / " + char.charHPMax;
		//combatCurrentHP.innerHTML = char.charCurrentHP;
		//combatTemporaryHP.innerHTML = char.charTemporaryHP;
		combatArmorClass.innerHTML = char.charArmorClass;
		combatInitiative.innerHTML = char.charInitiative;
		combatSpeed.innerHTML = char.charSpeed;
		combatAttacks.innerHTML = char.charAttacks;
		combatDeathSavingThrows.innerHTML = char.charDeathSavingThrows;

		//spells
		spellAbility.innerHTML = char.charSpellAbility;
		//spellAttackBonus.innerHTML = 2*char.charLevel;
		//spellSaveDC.innerHTML = 2*char.charLevel;
		spellSlots.innerHTML = char.charSpellSlots;
		spellsPrepared.innerHTML = char.charPreparedSpells;
		spellsKnown.innerHTML = char.charKnownSpells;

		//equipment
		//equipCoin.innerHTML = char.charCoin;
		equipWeapons.innerHTML = char.charWeapons;
		equipMisc.innerHTML = char.charMiscellaneous;

		// abilities
		abilityProficiencies.innerHTML = char.charProficiencies;
		abilityLanguages.innerHTML = char.charLanguages;
		abilityFeatures.innerHTML = char.charFeatures;

		// story

	});
}

function render() {
	setTimeout(function() {
		charId = document.querySelector('input[name="options"]:checked').id;
		renderLobbyCharacterSheet(charId);
	}
		, 10)
	
}

function main() {
	lobbyName = renderLobbyName();
	renderLobbyCharacters(lobbyName);
	charList = document.getElementById('character-list');
	charList.addEventListener("click", render);
	renderLobbyNotes();
	google.maps.event.addDomListener(window, 'load', renderLobbyMap);
}

main();