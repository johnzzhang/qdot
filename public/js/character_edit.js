function renderCharInfo() {
	const url = document.createElement("a");
    url.href = window.location.href;
    const charName = url.pathname.split("/")[2];

    get('/api/edit/view/'+charName, {}, function(characters) {
    	var charNameDiv = document.getElementById('charNameDiv');
    	var charAppearance = document.getElementById('charAppearance');
        var charName = document.getElementById('charName');
        var charRace = document.getElementById('charRace');
        var charClass = document.getElementById('charClass');
        var charBackground = document.getElementById('charBackground');
        var charAlignment = document.getElementById('charAlignment');
        var charLevel = document.getElementById('charLevel');
        var charAge = document.getElementById('charAge');
        var charHeight = document.getElementById('charHeight');
        var charWeight = document.getElementById('charWeight');
        var charEyes = document.getElementById('charEyes');
        var charSkin = document.getElementById('charSkin');
        var charHair = document.getElementById('charHair');

        var charPersonality = document.getElementById('charPersonality');
        var charBonds = document.getElementById('charBonds');
        var charIdeals = document.getElementById('charIdeals');
        var charFlaws = document.getElementById('charFlaws');
        var charBackstory = document.getElementById('charBackstory');

        var charProficiencies = document.getElementById('charProficiencies');
        var charLanguages = document.getElementById('charLanguages');
        var charFeatures = document.getElementById('charFeatures');

        var charGP = document.getElementById('charGP');
        var charSP = document.getElementById('charSP');
        var charCP = document.getElementById('charCP');
        var charWeapons = document.getElementById('charWeapons');
        var charArmorShield = document.getElementById('charArmorShield');
        var charMisc = document.getElementById('charMisc');

        var charSpellAbility = document.getElementById('charSpellAbility');
        var charPreparedSpells = document.getElementById('charPreparedSpells');
        var charKnownSpells = document.getElementById('charKnownSpells');

        var charHPMax = document.getElementById('charHPMax');
        var charCurrentHP = document.getElementById('charCurrentHP');
        var charTemporaryHP = document.getElementById('charTemporaryHP');
        var charArmorClass = document.getElementById('charArmorClass');
        var charInitiative = document.getElementById('charInitiative');
        var charSpeed = document.getElementById('charSpeed');
        var charAttacks = document.getElementById('charAttacks');
        var charDeathSuccess = document.getElementById('charDeathSuccess');
        var charDeathFail = document.getElementById('charDeathFail');

        var charStrength = document.getElementById('charStrength');
        var charDexterity = document.getElementById('charDexterity');
        var charConstitution = document.getElementById('charConstitution');
        var charIntelligence = document.getElementById('charIntelligence');
        var charWisdom = document.getElementById('charWisdom');
        var charCharisma = document.getElementById('charCharisma');
        var charTotalHitDie = document.getElementById('charTotalHitDie');
        var charInspiration = document.getElementById('charInspiration');
        var charCurrentHitDie = document.getElementById('charCurrentHitDie');
        var charExperience = document.getElementById('charExperience');
        
        var charStrPro = document.getElementById('charStrPro');
        var charDexPro = document.getElementById('charDexPro');
        var charConPro = document.getElementById('charConPro');
        var charIntPro = document.getElementById('charIntPro');
        var charWisPro = document.getElementById('charWisPro');
        var charChaPro = document.getElementById('charChaPro');

        var charAcrobaticsPro = document.getElementById('charAcrobaticsPro');
        var charAcrobaticsMod = document.getElementById('charAcrobaticsMod');
        var charAnimalHandlingPro = document.getElementById('charAnimalHandlingPro');
        var charAnimalHandlingMod = document.getElementById('charAnimalHandlingMod');
        var charArcanaPro = document.getElementById('charArcanaPro');
        var charArcanaMod = document.getElementById('charArcanaMod');
        var charAthleticsPro = document.getElementById('charAthleticsPro');
        var charAthleticsMod = document.getElementById('charAthleticsMod');
        var charDeceptionPro = document.getElementById('charDeceptionPro');
        var charDeceptionMod = document.getElementById('charDeceptionMod');
        var charHistoryPro = document.getElementById('charHistoryPro');
        var charHistoryMod = document.getElementById('charHistoryMod');
        var charInsightPro = document.getElementById('charInsightPro');
        var charInsightMod = document.getElementById('charInsightMod');
        var charIntimidationPro = document.getElementById('charIntimidationPro');
        var charIntimidationMod = document.getElementById('charIntimidationMod');
        var charInvestigationPro = document.getElementById('charInvestigationPro');
        var charInvestigationMod = document.getElementById('charInvestigationMod');
        var charMedicinePro = document.getElementById('charMedicinePro');
        var charMedicineMod = document.getElementById('charMedicineMod');
        var charNaturePro = document.getElementById('charNaturePro');
        var charNatureMod = document.getElementById('charNatureMod');
        var charPerceptionPro = document.getElementById('charPerceptionPro');
        var charPerceptionMod = document.getElementById('charPerceptionMod');
        var charPerformancePro = document.getElementById('charPerformancePro');
        var charPerformanceMod = document.getElementById('charPerformanceMod');
        var charPersuasionPro = document.getElementById('charPersuasionPro');
        var charPersuasionMod = document.getElementById('charPersuasionMod');
        var charReligionPro = document.getElementById('charReligionPro');
        var charReligionMod = document.getElementById('charReligionMod');
        var charSleightOfHandPro = document.getElementById('charSleightOfHandPro');
        var charSleightOfHandMod = document.getElementById('charSleightOfHandMod');
        var charStealthPro = document.getElementById('charStealthPro');
        var charStealthMod = document.getElementById('charStealthMod');
        var charSurvivalPro = document.getElementById('charSurvivalPro');
        var charSurvivalMod = document.getElementById('charSurvivalMod');

        charCurrentHitDie.placeholder = characters[0].charCurrentHitDie;
        charCurrentHitDie.value = characters[0].charCurrentHitDie;

        charExperience.placeholder = characters[0].charExperience;
        charExperience.value = characters[0].charExperience;

        charAcrobaticsPro.checked = characters[0].charAcrobatics.pro;
        charAcrobaticsMod.placeholder = characters[0].charAcrobatics.mod;
        charAcrobaticsMod.value = characters[0].charAcrobatics.mod;

        charAnimalHandlingPro.checked = characters[0].charAnimalHandling.pro;
        charAnimalHandlingMod.placeholder = characters[0].charAnimalHandling.mod;
        charAnimalHandlingMod.value = characters[0].charAnimalHandling.mod;

        charArcanaPro.checked = characters[0].charArcana.pro;
        charArcanaMod.placeholder = characters[0].charArcana.mod;
        charArcanaMod.value = characters[0].charArcana.mod;
  
        charAthleticsPro.checked = characters[0].charAthletics.pro;
        charAthleticsMod.placeholder = characters[0].charAthletics.mod;
        charAthleticsMod.value = characters[0].charAthletics.mod;

        charDeceptionPro.checked = characters[0].charDeception.pro;
        charDeceptionMod.placeholder = characters[0].charDeception.mod;
        charDeceptionMod.value = characters[0].charDeception.mod;

        charHistoryPro.checked = characters[0].charHistory.pro;
        charHistoryMod.placeholder = characters[0].charHistory.mod;
        charHistoryMod.value = characters[0].charHistory.mod;

        charInsightPro.checked = characters[0].charInsight.pro;
        charInsightMod.placeholder = characters[0].charInsight.mod;
        charInsightMod.value = characters[0].charInsight.mod;

        charIntimidationPro.checked = characters[0].charIntimidation.pro;
        charIntimidationMod.placeholder = characters[0].charIntimidation.mod;
        charIntimidationMod.value = characters[0].charIntimidation.mod;

        charInvestigationPro.checked = characters[0].charInvestigation.pro;
        charInvestigationMod.placeholder = characters[0].charInvestigation.mod;
        charInvestigationMod.value = characters[0].charInvestigation.mod;

        charMedicinePro.checked = characters[0].charMedicine.pro;
        charMedicineMod.placeholder = characters[0].charMedicine.mod;
        charMedicineMod.value = characters[0].charMedicine.mod;

        charNaturePro.checked = characters[0].charNature.pro;
        charNatureMod.placeholder = characters[0].charNature.mod;
        charNatureMod.value = characters[0].charNature.mod;

        charPerceptionPro.checked = characters[0].charPerception.pro;
        charPerceptionMod.placeholder = characters[0].charPerception.mod;
        charPerceptionMod.value = characters[0].charPerception.mod;

        charPerformancePro.checked = characters[0].charPerformance.pro;
        charPerformanceMod.placeholder = characters[0].charPerformance.mod;
        charPerformanceMod.value = characters[0].charPerformance.mod;

        charPersuasionPro.checked = characters[0].charPersuasion.pro;
        charPersuasionMod.placeholder = characters[0].charPersuasion.mod;
        charPersuasionMod.value = characters[0].charPersuasion.mod;

        charReligionPro.checked = characters[0].charReligion.pro;
        charReligionMod.placeholder = characters[0].charReligion.mod;
        charReligionMod.value = characters[0].charReligion.mod;

        charSleightOfHandPro.checked = characters[0].charSleightOfHand.pro;
        charSleightOfHandMod.placeholder = characters[0].charSleightOfHand.mod;
        charSleightOfHandMod.value = characters[0].charSleightOfHand.mod;

        charStealthPro.checked = characters[0].charStealth.pro;
        charStealthMod.placeholder = characters[0].charStealth.mod;
        charStealthMod.value = characters[0].charStealth.mod;

        charSurvivalPro.checked = characters[0].charSurvival.pro;
        charSurvivalMod.placeholder = characters[0].charSurvival.mod;
        charSurvivalMod.value = characters[0].charSurvival.mod;

        charStrPro.checked = characters[0].charSavingThrowPro.str;
        charDexPro.checked = characters[0].charSavingThrowPro.dex;
        charConPro.checked = characters[0].charSavingThrowPro.con;
        charIntPro.checked = characters[0].charSavingThrowPro.int;
        charWisPro.checked = characters[0].charSavingThrowPro.wis;
        charChaPro.checked = characters[0].charSavingThrowPro.cha;

        charInspiration.placeholder = characters[0].charInspiration;
        charInspiration.value = characters[0].charInspiration;

        charStrength.placeholder = characters[0].charStrength;
        charStrength.value = characters[0].charStrength;

        charDexterity.placeholder = characters[0].charDexterity;
        charDexterity.value = characters[0].charDexterity;

        charConstitution.placeholder = characters[0].charConstitution;
        charConstitution.value = characters[0].charConstitution;

        charIntelligence.placeholder = characters[0].charIntelligence;
        charIntelligence.value = characters[0].charIntelligence;

        charWisdom.placeholder = characters[0].charWisdom;
        charWisdom.value = characters[0].charWisdom;

        charCharisma.placeholder = characters[0].charCharisma;
        charCharisma.value = characters[0].charCharisma;

        charTotalHitDie.placeholder = characters[0].charTotalHitDie;
        charTotalHitDie.value = characters[0].charTotalHitDie;

        charHPMax.placeholder = characters[0].charHPMax;
        charHPMax.value = characters[0].charHPMax;

        charCurrentHP.placeholder = characters[0].charCurrentHP;
        charCurrentHP.value = characters[0].charCurrentHP;

        charTemporaryHP.placeholder = characters[0].charTemporaryHP;
        charTemporaryHP.value = characters[0].charTemporaryHP;

        charArmorClass.placeholder = characters[0].charArmorClass;
        charArmorClass.value = characters[0].charArmorClass;

        charInitiative.placeholder = characters[0].charInitiative;
        charInitiative.value = characters[0].charInitiative;

        charSpeed.placeholder = characters[0].charSpeed;
        charSpeed.value = characters[0].charSpeed;

        charAttacks.placeholder = characters[0].charAttacks;
        charAttacks.value = characters[0].charAttacks;        

        charDeathSuccess.placeholder = characters[0].charDeathSavingThrows.success;
        charDeathSuccess.value = characters[0].charDeathSavingThrows.success;

        charDeathFail.placeholder = characters[0].charDeathSavingThrows.fail;
        charDeathFail.value = characters[0].charDeathSavingThrows.fail;

        charHPMax.placeholder = characters[0].charHPMax;
        charHPMax.value = characters[0].charHPMax;

        charSpellAbility.placeholder = characters[0].charSpellAbility;
        charSpellAbility.value = characters[0].charSpellAbility;

        charPreparedSpells.placeholder = characters[0].charPreparedSpells;
        charPreparedSpells.value = characters[0].charPreparedSpells;

        charKnownSpells.placeholder = characters[0].charKnownSpells;
        charKnownSpells.value = characters[0].charKnownSpells;

        charGP.placeholder = characters[0].charCoin.GP;
        charGP.value = characters[0].charCoin.GP;
        
        charSP.placeholder = characters[0].charCoin.SP;
        charSP.value = characters[0].charCoin.SP;

        charCP.placeholder = characters[0].charCoin.CP;
        charCP.value = characters[0].charCoin.CP;

    	charNameDiv.innerHTML = characters[0].charName;
    	charAppearance.setAttribute('src',characters[0].charAppearance);

        charName.placeholder = characters[0].charName;
        charName.value = characters[0].charName;
        
        charRace.placeholder = characters[0].charRace;
        charRace.value = characters[0].charRace;
        
        charClass.placeholder = characters[0].charClass;
        charClass.value = characters[0].charClass;
        
        charBackground.placeholder = characters[0].charBackground;
        charBackground.value = characters[0].charBackground;

        charAlignment.placeholder = characters[0].charAlignment;
        charAlignment.value = characters[0].charAlignment;

        charLevel.placeholder = characters[0].charLevel;
        charLevel.value = characters[0].charLevel;
        
        charAge.placeholder = characters[0].charAge;
        charAge.value = characters[0].charAge;

        charHeight.placeholder = characters[0].charHeight;
        charHeight.value = characters[0].charHeight;
        
        charWeight.placeholder = characters[0].charWeight;
        charWeight.value = characters[0].charWeight;
        
        charEyes.placeholder = characters[0].charEyes;
        charEyes.value = characters[0].charEyes;
        
        charSkin.placeholder = characters[0].charSkin;
        charSkin.value = characters[0].charSkin;
        
        charHair.placeholder = characters[0].charHair;
        charHair.value = characters[0].charHair;

        charPersonality.placeholder = characters[0].charPersonality;
        charPersonality.value = characters[0].charPersonality;

        charBonds.placeholder = characters.charBonds;
        charBonds.value = characters[0].charBonds;

        charIdeals.placeholder = characters.charIdeals;
        charIdeals.value = characters[0].charIdeals;

        charFlaws.placeholder = characters.charFlaws;
        charFlaws.value = characters[0].charFlaws;

        charBackstory.placeholder = characters.charBackstory;
        charBackstory.value = characters[0].charBackstory;

        charProficiencies.placeholder = characters[0].charProficiencies;
        charProficiencies.value = characters[0].charProficiencies;

        charLanguages.placeholder = characters[0].charLanguages;
        charLanguages.value = characters[0].charLanguages;

        charFeatures.placeholder = characters[0].charFeatures;
        charFeatures.value = characters[0].charFeatures;
    });
}

function saveStory() {
    const url = document.createElement("a");
    url.href = window.location.href;
    const charName = url.pathname.split("/")[2];

    var charPersonality = document.getElementById('charPersonality');
    var charBonds = document.getElementById('charBonds');
    var charIdeals = document.getElementById('charIdeals');
    var charFlaws = document.getElementById('charFlaws');
    var charBackstory = document.getElementById('charBackstory');

    const data = {
        charPersonality : charPersonality.value,
        charBonds : charBonds.value,
        charIdeals : charIdeals.value,
        charFlaws : charFlaws.value,
        charBackstory : charBackstory.value
    }

    post('/api/edit/save/story/'+charName, data);
}

function saveEquipment() {
    const url = document.createElement("a");
    url.href = window.location.href;
    const charName = url.pathname.split("/")[2];

    var charGP = document.getElementById('charGP');
    var charSP = document.getElementById('charSP');
    var charCP = document.getElementById('charCP');
    var charWeapons = document.getElementById('charWeapons');
    var charArmorShield = document.getElementById('charArmorShield');
    var charMisc = document.getElementById('charMisc');

    const data = {
        charGP : charGP.value,
        charSP : charSP.value,
        charCP : charCP.value,
        charWeapons : charWeapons.value,
        charArmorShield : charArmorShield.value,
        charMisc : charMisc.value
    }

    post('/api/edit/save/equipment/'+charName, data);
}

function saveSpells() {
    const url = document.createElement("a");
    url.href = window.location.href;
    const charName = url.pathname.split("/")[2];

    var charSpellAbility = document.getElementById('charSpellAbility');
    var charPreparedSpells = document.getElementById('charPreparedSpells');
    var charKnownSpells = document.getElementById('charKnownSpells');

    const data = {
        charSpellAbility : charSpellAbility.value,
        charPreparedSpells : charPreparedSpells.value,
        charKnownSpells : charKnownSpells.value
    }

    post('/api/edit/save/spells/'+charName, data);
}

function saveCombat() {
    const url = document.createElement("a");
    url.href = window.location.href;
    const charName = url.pathname.split("/")[2];

    var charHPMax = document.getElementById('charHPMax');
    var charCurrentHP = document.getElementById('charCurrentHP');
    var charTemporaryHP = document.getElementById('charTemporaryHP');
    var charArmorClass = document.getElementById('charArmorClass');
    var charInitiative = document.getElementById('charInitiative');
    var charSpeed = document.getElementById('charSpeed');
    var charAttacks = document.getElementById('charAttacks');
    var charDeathSuccess = document.getElementById('charDeathSuccess');
    var charDeathFail = document.getElementById('charDeathFail');

    const data = {
        charHPMax : charHPMax.value,
        charCurrentHP : charCurrentHP.value,
        charTemporaryHP : charTemporaryHP.value,
        charArmorClass : charArmorClass.value,
        charInitiative : charInitiative.value,
        charSpeed : charSpeed.value,
        charAttacks : charAttacks.value,
        charDeathSuccess : charDeathSuccess.value,
        charDeathFail : charDeathFail.value
    }

    post('/api/edit/save/combat/'+charName, data);
}

function saveStats() {
    const url = document.createElement("a");
    url.href = window.location.href;
    const charName = url.pathname.split("/")[2];

    var charStrength = document.getElementById('charStrength');
    var charDexterity = document.getElementById('charDexterity');
    var charConstitution = document.getElementById('charConstitution');
    var charIntelligence = document.getElementById('charIntelligence');
    var charWisdom = document.getElementById('charWisdom');
    var charCharisma = document.getElementById('charCharisma');
    var charTotalHitDie = document.getElementById('charTotalHitDie');

    const data = {
        charStrength : charStrength.value,
        charDexterity : charDexterity.value,
        charConstitution : charConstitution.value,
        charIntelligence : charIntelligence.value,
        charWisdom : charWisdom.value,
        charCharisma : charCharisma.value,
        charTotalHitDie : charTotalHitDie.value,
        charCurrentHitDie : charCurrentHitDie.value,
        charExperience : charExperience.value,
        charInspiration : charInspiration.value,
        charAcrobaticsPro : charAcrobaticsPro.checked,
        charAcrobaticsMod : charAcrobaticsMod.value,
        charAnimalHandlingPro : charAnimalHandlingPro.checked,
        charAnimalHandlingMod : charAnimalHandlingMod.value,
        charArcanaPro : charArcanaPro.checked,
        charArcanaMod : charArcanaMod.value,
        charAthleticsPro : charAthleticsPro.checked,
        charAthleticsMod : charAthleticsMod.value,
        charDeceptionPro : charDeceptionPro.checked,
        charDeceptionMod : charDeceptionMod.value,
        charHistoryPro : charHistoryPro.checked,
        charHistoryMod : charHistoryMod.value,
        charInsightPro : charInsightPro.checked,
        charInsightMod : charInsightMod.value,
        charIntimidationPro : charIntimidationPro.checked,
        charIntimidationMod : charIntimidationMod.value,
        charInvestigationPro : charInvestigationPro.checked,
        charInvestigationMod : charInvestigationMod.value,
        charMedicinePro : charMedicinePro.checked,
        charMedicineMod : charMedicineMod.value,
        charNaturePro : charNaturePro.checked,
        charNatureMod : charNatureMod.value,
        charPerceptionPro : charPerceptionPro.checked,
        charPerceptionMod : charPerceptionMod.value,
        charPerformancePro : charPerformancePro.checked,
        charPerformanceMod : charPerformanceMod.value,
        charPersuasionPro : charPersuasionPro.checked,
        charPersuasionMod : charPersuasionMod.value,
        charReligionPro : charReligionPro.checked,
        charReligionMod : charReligionMod.value,
        charSleightOfHandPro : charSleightOfHandPro.checked,
        charSleightOfHandMod : charSleightOfHandMod.value,
        charStealthPro : charStealthPro.checked,
        charStealthMod : charStealthMod.value,
        charSurvivalPro : charSurvivalPro.checked,
        charSurvivalMod : charSurvivalMod.value,
        charStrPro : charStrPro.checked,
        charDexPro : charDexPro.checked,
        charConPro : charConPro.checked,
        charIntPro : charIntPro.checked,
        charWisPro : charWisPro.checked,
        charChaPro : charChaPro.checked
    }

    post('/api/edit/save/stats/'+charName, data);
}

function saveFeatures() {
    const url = document.createElement("a");
    url.href = window.location.href;
    const charName = url.pathname.split("/")[2];

    var charProficiencies = document.getElementById('charProficiencies');
    var charLanguages = document.getElementById('charLanguages');
    var charFeatures = document.getElementById('charFeatures');

    const data = {
        charProficiencies : charProficiencies.value,
        charLanguages : charLanguages.value,
        charFeatures : charFeatures.value
    }

    post('/api/edit/save/features/'+charName, data);
}

function saveDescription() {
    const url = document.createElement("a");
    url.href = window.location.href;
    const charName = url.pathname.split("/")[2];

    var charRace = document.getElementById('charRace');
    var charClass = document.getElementById('charClass');
    var charBackground = document.getElementById('charBackground');
    var charAlignment = document.getElementById('charAlignment');
    var charLevel = document.getElementById('charLevel');
    var charAge = document.getElementById('charAge');
    var charHeight = document.getElementById('charHeight');
    var charWeight = document.getElementById('charWeight');
    var charEyes = document.getElementById('charEyes');
    var charSkin = document.getElementById('charSkin');
    var charHair = document.getElementById('charHair');

    const data = {
        charRace : charRace.value,
        charLevel : charLevel.value,
        charClass : charClass.value,
        charBackground : charBackground.value,
        charAlignment : charAlignment.value,
        charAge : charAge.value,
        charHeight : charHeight.value,
        charWeight : charWeight.value,
        charEyes : charEyes.value,
        charSkin : charSkin.value,
        charHair : charHair.value
    }

    post('/api/edit/save/description/'+charName, data);
}

function main() {
	renderCharInfo();
}

main();