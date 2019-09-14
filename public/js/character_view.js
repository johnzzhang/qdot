function charDOMObject(currentChar, user) {
	const card = document.createElement('div');
	card.className = 'card';

	const cardImg = document.createElement('img');
	cardImg.setAttribute('src', currentChar.charAppearance);
	card.appendChild(cardImg);

	const link = document.createElement('a');
	link.setAttribute('href', '/character/' + currentChar.charName + '/edit');
	link.appendChild(card);

	return link;
}

function renderCharacters(user) {
	const charAlbumDiv =  document.getElementById('characters');
	get('/api/character', {}, function(characterArr) {
		for (let i = 0; i < characterArr.length; i++) {
			const currentChar = characterArr[i];
			charAlbumDiv.prepend(charDOMObject(currentChar, user));
		}
	});
}

function _arrayBufferToBase64( buffer ) {
	console.log(buffer);
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    console.log(bytes);
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}

function main() {
	const user = {
		_id: 'anonid'
	};

	renderCharacters(user);
}

main();