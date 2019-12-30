let express = require('express');
let router = express.Router();
let sql_operation = require("./operation");
let d3 = require('d3');

router.get("/test", function(req, res, next) {
    sql_operation.query('select * from students_origin', data=>{
        res.send(data);
    });
});

router.get("/canteen_all", function(req, res, next) {
    let DateFormat = d3.timeFormat('%Y-%m-%d');
    sql_operation.query(`select Dept,Date,Money from cost_pro where Type = '消费'`, data=> {
        let Dept = [
            '第一食堂',
            '第二食堂',
            '第三食堂',
            '第四食堂',
            '第五食堂',
            '教师食堂'
        ];
        data = data.filter(d => Dept.includes(d.Dept));
        data.forEach(d => {
            d.Date = DateFormat(new Date(d.Date));
        });
        // res.send(data);
        res.send(
            d3.nest()
                .key(d => d.Dept)
                .entries(data)
                .map(d=>{
                    return {
                        Dept:d.key,
                        data:d3.nest().key(s=>s.Date).entries(d.values).map(s=>{
                            return {
                                date:s.key,
                                value:d3.sum(s.values,t=>parseFloat(t.Money)).toFixed(2)
                            }
                        }).sort((a,b)=>new Date(a.date)-new Date(b.date))
                    }
                })
        )
    })
});
module.exports = router;
