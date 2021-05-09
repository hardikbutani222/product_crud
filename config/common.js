const express = require('express');
const con = require('./connection.js');
const constant = require('./constant.js');
var request = require('request');

var common =
{
    checkValidation: function (req,res, rules, message, callback) {

        v = require('Validator').make(req, rules);

        if (v.fails()) {
            const Validator_errors = v.getErrors();
            for (var key in Validator_errors) {
                error = Validator_errors[key][0];
                break;
            }
            var response_data = {
                code: "0",
                message: error
            };
            res.send(response_data);
            //callback(validation_error);
        } else {
            return true;
        }
    },
    /**
     * @param {Object} request_data all needed requet parameter
     * @param {function} callback contain call back function as an parameter
     * 
     * @description This function is used to send sms
    */
    getCurrency:function (callback) {

        let api_key=constant.currency_convert_key;
        request({
            method: 'GET',
            url: 'http://api.currencylayer.com/live?access_key='+api_key+'&currencies=USD,CAD,EUR,GBP&format=1',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var body=JSON.parse(body);
                callback(body);
            }else{
                callback(false);
            }
        });
    }


}
module.exports = common;