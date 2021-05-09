const express = require('express');
const app = express();
const http = require('http');
const router = express.Router();

port = 5000;
app.listen(port, () => console.log("listing on port " + port))

const api = require('./modules/route.js');
app.use('/api', api);