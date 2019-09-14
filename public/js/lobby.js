function renderLobbyName() {
	const lobbyDiv = document.getElementById('lobby-title');

	const url = document.createElement("a");
    url.href = window.location.href;
    const lobbyName = url.pathname.split("/")[2];
	
	lobbyDiv.innerHTML = "Lobby: " + lobbyName;

	return lobbyName;
}

function renderLobbyCharacters(lobbyId) {
	const charactersDiv = document.getElementById('character-list');
	get('/api/lobby/characters', { 'lobby_id': lobbyId }, function(characterList) {

		for(let i = 0; i < characterList.length; i++) {
			const currentChar = characterList[i];

			get('/api/charactersheet', { 'char_id': currentChar }, function(character) {
				const newLabel = document.createElement('label');
				newLabel.className = 'btn btn-danger btn-small';
				newLabel.innerHTML = character.charName;
				newLabel.appendChild(document.createElement('br'));
				//newLabel.setAttribute('id', character._id);

				const newInput = document.createElement('input');
				newInput.setAttribute('type', 'radio');
				newInput.setAttribute('name', 'options');
				newInput.setAttribute('id', character._id);
				newInput.setAttribute('autocomplete', 'off');

				const newImg = document.createElement('img');
				newImg.setAttribute('src', character.charAppearance);
				newImg.setAttribute('height', 60)

				newLabel.appendChild(newImg);
				newLabel.appendChild(newInput);
				charactersDiv.appendChild(newLabel); 
			});
		} 
	});
}


function renderLobbyMap() {
	const url = document.createElement("a");
    url.href = window.location.href;
    const lobbyName = url.pathname.split("/")[2];
	get('/api/map/draw', { 'lobby_id': lobbyName }, function(playerMap) {
		initMap(playerMap);
	});
}

function renderLobbyNotes() {
	var editor = document.getElementById("editor-pane");
	get('/api/notes', {user:username}, function(notes) {
		editor.innerHTML = notes;
	});
}