//console.log("in product router");
const express = require('express');
const router = express.Router();
const common = require('../../../config/common');
const app = express();
//const con = require('../../../config/connection.js');
const product = require('./model.js');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
const message = {
    required: ":attr field is required",
    alpha: "please Enter only alphabets in :attr",
    email: "please Enter proper Email",
    regex: "please enter :attr in proper formate",
    numeric: "Please Enter :attr in numeric form"
}
// router for insert function
router.post('/insert', function (req, res) {
    const rules = {
        name: "required",
        price: "required|regex:^([0-9]+)?(([0-9]*[.])?[0-9]{1,2}$)",
    }
    if (common.checkValidation(req.body,res, rules, message)) {
        product.insert(req.body, res, function (data) {
            res.send(data);
        });
    }
});
// router for getSingleProduct function
router.post('/getSingleProduct', function (req, res) {
    const rules = {
        id: "required|numeric",
    }
    if (common.checkValidation(req.body,res, rules, message)) {
        product.getSingleProduct(req.body, res, function (data) {
            res.send(data);
        });
    }
});
//router for list function
router.post('/listMostViewedProduct', function (req, res) {
    product.listMostViewedProduct(function (data) {
        res.send(data);
    });
});
//router for delete function
router.post('/delete', function (req, res) {
    const rules = {
        id: "required|numeric"
    }
    if (common.checkValidation(req.body,res, rules, message)) {
        product.delete(req.body, function (data) {
            res.send(data);
        });
    }
});
module.exports = router;
