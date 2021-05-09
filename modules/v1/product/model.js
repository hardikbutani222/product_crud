//console.log("model");
var express = require('express');
var common = require('../../../config/common');
const app = express();
var bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
const con = require('../../../config/connection.js');
//callback({ code: "1", message: "hello", data: result });
var user =
{
    insert: function (req, res, callback) {
        //console.log(req);
        const product_data = {
            name: req.name,
            price: req.price,
        }
        if (req.description != undefined) {
            product_data.description = req.description
        }
        con.query("select * from tbl_product where name=? AND is_delete='0'",req.name,function(err,product_available){
            if(err){
                callback({
                    code:"0",
                    message:err
                })
            }else{
                if(product_available.length>0){
                    callback({
                        code:"0",
                        message:"Product already available"
                    })
                }else{
                    con.query("INSERT INTO tbl_product SET ?", [product_data], function (err, result) {
                        if (err) {
                            callback({
                                code:"0",
                                message:err
                            })
                        }
                        if (!err && result) {
                            callback({
                                code:"1",
                                message:"Product added sucessfully",
                            })
                        } else {
                            callback({
                                code:"0",
                                message:"failed"
                            })
                        }
                    });
                }
            }
        })
    },
    getSingleProduct: function (req,res,callback){
        con.query("SELECT * FROM tbl_product where is_delete='0' AND id=?",[req.id], function (err, result) {
            if (err) {
                callback({ code: "0", message: "something is wrong", err: err });
            }
            if (!err && result) {
                con.query("update tbl_product set view=view+1 where id=?",[req.id],function(err,updated){
                    if(err){
                        callback({ code: "0", message: "something is wrong", err: err });
                    }else{
                        if(result.length>0){
                            common.getCurrency(function(response){
                                if(response.success==false){
                                    callback({ code: "0", message: "something is wrong" });
                                }else{
                                    result[0].usd_price=result[0].price;
                                    result[0].cad_price=parseFloat(result[0].price)*parseFloat(response.quotes.USDCAD);
                                    result[0].eur_price=parseFloat(result[0].price)*parseFloat(response.quotes.USDEUR);
                                    result[0].gbp_price=parseFloat(result[0].price)*parseFloat(response.quotes.USDGBP);
                                    callback({ code: "1", message: "Product detail", data: result[0] });
                                }
                            });
                        }else{
                            callback({ code: "2", message: "No data found" });
                        }
                    }
                })
            } else {
                callback({ code: "2", message: "No data found" });
            }
        });
    },
    listMostViewedProduct: function ( callback) {
        con.query("SELECT * FROM tbl_product where is_delete='0' AND view >0 order by view desc", function (err, result) {
            if (err) {
                callback({ code: "0", message: "something is wrong", err: err });
            }
            if (!err && result.length>0) {
                callback({ code: "1", message: "Most viewed product list", data: result });
            } else {
                callback({ code: "2", message: "No data found" });
            }
        });
    },
    delete: function (req, callback) {

        con.query("update tbl_product set is_delete='1' WHERE id=?", req.id, function (err, result) {
            if (err) {
                callback({
                    code:"0",
                    message:err
                })
            }
            if (!err && result.affectedRows > 0) {
                callback({
                    code: "1",
                    message: "Product deleted" 
                });
            } else {
                callback({
                    code: "2",
                    message: "No data found" 
                });
            }
        });
    },
};
module.exports = user;