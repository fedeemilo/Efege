const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { asyncErrorHandler } = require('../middleware');
const { newsIndex, newsCreate, newsShow } = require('../controllers/news');

/* GET news index /news */
router.get('/', asyncErrorHandler(newsIndex));

/* POST news create /news */
router.post('/add', upload.array('images', 4), asyncErrorHandler(newsCreate));

/* GET news show /news/:id */
router.get('/:id', asyncErrorHandler(newsShow));

module.exports = router;
