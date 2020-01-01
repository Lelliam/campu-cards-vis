let express = require('express');
let router = express.Router();
let sql_operation = require("./operation");
let d3 = require('d3');

router.get("/cluster", function(req, res, next) {
    // # 0 B
    // # 1 B-
    // # 2 O
    // # 3 A+
    // # 4 C
    // # 5 A
    let type ={
        '0':'B',
        '1':'B-',
        '2':'O',
        '3': 'A+',
        '4': 'C',
        '5': 'A'
    };
    sql_operation.query('select card_no,class from students_cluster', data=>{
        res.send(d3.nest().key(d=>d.class).entries(data).map(d=>{
            return {
                name:type[d.key],
                value: d.values.length
            }
        }));
    });
});

router.get("/cluster_detail", function(req, res, next) {
    let type ={
        '0':'B',
        '1':'B-',
        '2':'O',
        '3': 'A+',
        '4': 'C',
        '5': 'A'
    };
    sql_operation.query('select * from students_cluster', data=>{
        res.send(d3.nest().key(d=>type[d.class]).entries(data).map(d=>{
            return {
                name:d.key,
                data:{
                    days:(d3.sum(d.values,s=>parseFloat(s.days))/d.values.length).toFixed(0),
                    days_cost:(d3.sum(d.values,s=>parseFloat(s.day_cost))/d.values.length).toFixed(0),
                    sum_cost:(d3.sum(d.values,s=>parseFloat(s.sum_cost))/d.values.length).toFixed(0),
                    cost_count:(d3.sum(d.values,s=>parseFloat(s.count))/d.values.length).toFixed(0)
                }
            }
        }));
    });
});
module.exports = router;
