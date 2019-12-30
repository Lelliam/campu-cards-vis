let express = require('express');
let router = express.Router();
let sql_operation = require("./operation");
let d3 = require('d3');

router.get("/track", function(req, res, next) {
    sql_operation.query(`select CardNo, Date, Dept from track_data_pro where Date(Date) = '2019-04-01'`, data=>{
        // let nodes = d3.nest().key(d=>d.Dept).entries(data).map(d=>{
        //    return {
        //        'name':d.key
        //    }
        // });
        // let links = [];
        // res.send(d3.nest().key(d=>d.CardNo).entries(data));
        res.send(data);
    });
});

module.exports = router;
