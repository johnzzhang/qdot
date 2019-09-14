const mongoose = require('mongoose');

const MapModelSchema = new mongoose.Schema({
	lobby_id : String,
	mapImage : String,
	zoom : Number,
	center : { lat: Number, lng: Number },
	markers : Array
});

module.exports = mongoose.model('MapModel', MapModelSchema);