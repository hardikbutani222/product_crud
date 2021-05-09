//console.log("in v1 router");
const express = require('express');
const app = express();
const router = express.Router();

const product = require('./product/route.js');
router.use('/product', product);

module.exports = router;