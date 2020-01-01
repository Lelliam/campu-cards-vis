
let express = require('express');
let router = express.Router();
let sql_operation = require("./operation");
let d3 = require('d3');
router.get("/test05", function(req, res, next) {
    sql_operation.query('select * from students_origin', data=>{
        res.send(data);//发送请求
    });
});

//181316
router.get("/f5_cost_rate", function(req, res, next) {
    sql_operation.query(`select Dept,Money from cost_pro where CardNo = '${req.query.card_no}' and Type = '消费'`, data=>{
        let canteen_sum = d3.sum(data.filter(d=>d.Dept.includes('食堂')).map(d=>parseFloat(d.Money)),d=>d).toFixed(2);
        let market_sum = d3.sum(
            data.filter(d=>d.Dept.includes('超市'))
                .concat(data.filter(d=>d.Dept.includes('食品')))
                .map(d=>parseFloat(d.Money)),d=>d)
            .toFixed(2);
        let other_sum = d3.sum(
            data.filter(d=>!d.Dept.includes('食堂'))
                .filter(d=>!d.Dept.includes('超市'))
                .filter(d=>!d.Dept.includes('食品店'))
                .map(d=>parseFloat(d.Money)),
            d=>d)
            .toFixed(2);
        res.send({canteen:canteen_sum,market:market_sum,other:other_sum});
    });
});

module.exports = router;
