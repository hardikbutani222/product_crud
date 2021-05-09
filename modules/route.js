//console.log("in module router");
const express = require('express');
const app = express();
const router = express.Router();

//console.log(app.use);
const v1 = require('./v1/route.js');
router.use('/v1', v1);

module.exports = router;