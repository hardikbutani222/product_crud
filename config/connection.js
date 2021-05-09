var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_product"
});
con.connect(function (err) {
    if (err) {
        console.log("connection failed");
    }
    if (!err) {
        console.log("DB connected");
    }
});
module.exports = con;