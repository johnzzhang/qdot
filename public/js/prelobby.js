function renderUserCharacters() {
	const charactersDiv = document.getElementById('character-dropdown-menu');

	get('/api/character', {}, function(characters) {
		for(let i = 0; i < characters.length; i++) {
			const charId = characters[i]._id;
			const charName = characters[i].charName;

			const newOption = document.createElement('option');
			newOption.setAttribute('value', charId);
			newOption.innerHTML = charName;
			charactersDiv.appendChild(newOption);
		} 
	});
}

function renderCreatorLobbies() {
	const creatorsDiv = document.getElementById('creator-dropdown-menu');

	get('/api/lobby/creator', {}, function(lobbies) {
		for(let i = 0; i < lobbies.length; i++) {
			const lobbyId = lobbies[i].lobby_id;

			const newLink = document.createElement('a');
			newLink.className = "dropdown-item";
			newLink.setAttribute('href', "/lobby/" + lobbyId + "/dm");
			newLink.innerHTML = lobbyId;
			creatorsDiv.appendChild(newLink);
		} 
	});
}

function renderPlayerLobbies() {
	const playersDiv = document.getElementById('player-dropdown-menu');

	get('/api/lobby/player', {}, function(lobbies) {
		for(let i = 0; i < lobbies.length; i++) {
			const lobbyId = lobbies[i].lobby_id;

			const newLink = document.createElement('a');
			newLink.className = "dropdown-item";
			newLink.setAttribute('href', "/lobby/" + lobbyId + "/player");
			newLink.innerHTML = lobbyId;
			playersDiv.appendChild(newLink);
		} 
	});
}

function main() {
	renderUserCharacters();
	renderCreatorLobbies();
	renderPlayerLobbies();
}

main();