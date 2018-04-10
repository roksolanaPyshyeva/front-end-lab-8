const express = require('express');
const bodyParser = require('body-parser');
let router = express.Router();
let handlers = require('./controllers/handlers');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/rockstars', handlers.get);
router.get('/rockstar/:id', handlers.getById);
router.post('/rockstar', handlers.post);
router.put('/rockstar/:id', handlers.put);
router.delete('/rockstar/:id', handlers.delete);

module.exports = router;
