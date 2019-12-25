let express = require('express');
let router = express.Router();
let sql_operation = require("./operation");
let d3 = require('d3');

router.get("/test", function(req, res, next) {
    sql_operation.query('select * from students_origin', data=>{
        res.send(data);
    });
});

//http://localhost:3000/major_sex?major=18软件技术
router.get("/major_sex", function(req, res, next) {
    sql_operation.query(`select Sex,Major from students_origin where Major = '${req.query.major}'`, data=>{
        res.send(d3.nest().key(d=>d.Sex).entries(data).map(d=>{
            return {name: d.key, value:d.values.length}
        }));
    });
});

router.get("/major_dept", function(req, res, next) {
    sql_operation.query(`select Dept from cost_pro where Major = '${req.query.major}'`, data=>{
        res.send(d3.nest().key(d=>d.Dept).entries(data).map(d=>{
            return {name: d.key, value:d.values.length}
        }));
    });
});

router.get("/major_num", function(req, res, next) {
    sql_operation.query(`select Major from students_origin`, data=>{
        res.send(d3.nest().key(d=>d.Major).entries(data).map(d=>{
            return {name: d.key, value:d.values.length}
        }));
    });
});

router.get("/all_dept", function(req, res, next) {
    sql_operation.query(`select Dept from cost_pro`, data=>{
        res.send(d3.nest().key(d=>d.Dept).entries(data).map(d=>{
            return {name: d.key, value:d.values.length}
        }));
    });
});
module.exports = router;
