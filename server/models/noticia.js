const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
	title: String,
	subtitle: String,
	description: String,
	images: [{ url: String, public_id: String }],
	author: String,
	date: Date
});

module.exports = mongoose.model('Noticia', NoticiaSchema);
