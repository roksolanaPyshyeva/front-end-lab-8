const express = require('express');
const app = express();
let rockstars = require('./routes.js');
const fs = require('fs');
app.use('/', rockstars);

const port = process.env.PORT || 3000;
app.listen(port);
