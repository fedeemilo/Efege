const Noticia = require('../models/noticia');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
	cloud_name: 'fede-milo',
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_SECRET
});

module.exports = {
	async newsIndex(req, res, next) {
		let news = await Noticia.find({});
		res.json(news);
	},

	async newsCreate(req, res, next) {
        req.body.images = [];
		for (const file of req.files) {
			let image = await cloudinary.uploader.upload(file.path);
			req.body.images.push({
				url: image.secure_url,
				public_id: image.public_id
			});
		}

		req.body.date = new Date();

		let news = await Noticia.create(req.body);
		// save created Noticia to database
		await news
			.save()
			.then((todo) => {
				res.status(200).json({ news: 'La noticia se ha añadido exitosamente!' });
			})
			.catch((err) => {
				res.status(400).send('Fallo la subida de la noticia :(');
			});
	},

	async newsShow(req, res, next) {
		let noticia = await Noticia.findById(req.params.id);
		res.json(noticia); 
	}
};
