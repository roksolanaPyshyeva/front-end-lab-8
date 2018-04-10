const express = require('express');
const bodyParser = require('body-parser');
let router = express.Router();
let handlers = require('./controllers/handlers');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/rockstars', handlers.get);
router.get('/rockstars/:id', handlers.getById);
router.post('/rockstars', handlers.post);
router.put('/rockstars/:id', handlers.put);
router.delete('/rockstars/:id', handlers.delete);

module.exports = router;
