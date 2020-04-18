require('dotenv').config();
// add timestamps in front of log messages
require('console-stamp')(console, '[HH:MM:ss.l]');
const express = require('express');
const router = express.Router();
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const creds = require('./config');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

// connect to database
mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
	console.log("We're connected!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// require routes
const news = require('./routes/news');

const transport = {
	service: 'gmail',
	auth: {
		user: creds.USER,
		pass: creds.PASS
	}
};

// transportador de mails
const transporter = nodemailer.createTransport(transport);

// ruta para enviar mails
router.post('/send', (req, res, next) => {
	var email = req.body.email;
	var nombre = req.body.nombre;
	var apellido = req.body.apellido;
	var mensaje = req.body.mensaje;
	var content = `nombre: ${nombre} \n apellido: ${apellido} \n email: ${email} \n mensaje: ${mensaje}`;

	var mail = {
		from: nombre,
		to: creds.USER,
		subject: 'NUEVO MENSAJE DE POSIBLE CLIENTE!',
		text: content
	};

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				status: 'fail'
			});
		} else {
			res.json({
				status: 'success'
			});
		}
	});
});

// mount routes
app.use('/news', news);
app.use('/', router);

app.listen(PORT, () => {
	console.log(`Server listening at ${PORT}`);
});
