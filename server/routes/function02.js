let express = require('express');
let router = express.Router();
let sql_operation = require("./operation");
let d3 = require('d3');

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

router.get("/canteen_10min", function(req, res, next) {
    let DateFormat = d3.timeFormat('%Y-%m-%d %H:%M');
    sql_operation.query(`select CardNo,Dept,Date from cost_pro where Type = '消费' and Dept like '%食堂%'`, data=> {
        data.forEach(d=>{
            d.Date = new Date(d.Date);
            d.Date.setMinutes(d.Date.getMinutes() - d.Date.getMinutes()%10);
            d.Date = DateFormat(d.Date);
        });
        res.send(d3.nest().key(d=>d.Dept).entries(data).map(d=>{
            return {
                dept:d.key,
                data:d3.nest().key(d=>d.Date).entries(d.values).map(d=>{
                    return {
                        date:d.key,
                        value:d3.nest().key(d=>d.CardNo).entries(d.values).length
                    }
                }).sort((a,b)=>new Date(a.date) - new Date(b.date))
            }
        }));
    });
});

router.get("/canteen_majors", function(req, res, next) {
    sql_operation.query(`select Dept,Major from cost_pro where Type = '消费' and Dept = '${req.query.Dept}' and Major != 'null'`, data=> {
        res.send(d3.nest().key(d=>d.Major).entries(data).map(d=>{
            return {
                name:d.key,
                value:d.values.length
            }
        }));
    })
});

router.get("/f2_canteen_", (req, res, next)=> {
    sql_operation.query(`select Money,Dept,TermNo from cost_pro where Dept like '%食堂%'`, data=>{
        res.send(d3.nest().key(d=>d.Dept).entries(data).map(d=>{
            return {name: d.key, children:d3.nest().key(d=>d.TermNo).entries(d.values).map(d=>{
                    return {
                        name:d3.sum(d.values,s=>parseFloat(s.Money)/d.values.length).toFixed(2),
                        term_no:'No.'+d.key,
                        value:d.values.length,
                        per_cost:d3.sum(d.values,s=>parseFloat(s.Money)/d.values.length).toFixed(2)
                    }
                })}
        }));
    });
});
module.exports = router;
