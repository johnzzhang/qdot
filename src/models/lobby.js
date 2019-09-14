const mongoose = require('mongoose');

const LobbyModelSchema = new mongoose.Schema({
	lobby_id: String,
	creator_name: String,
	player_list: [String],
	character_list: [String],
	player_map: String
});

module.exports = mongoose.model('LobbyModel', LobbyModelSchema);