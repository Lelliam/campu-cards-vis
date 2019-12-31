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

router.get("/major_sex_dept", function(req, res, next) {
    sql_operation.query(`select Sex, Dept from cost_pro where Major =  '${req.query.major}'`, data=>{
        let Dept = [
            "第一食堂",
            "第二食堂",
            "第三食堂",
            "第四食堂",
            "第五食堂",
            "好利来食品店",
            "财务处",
            "红太阳超市"
        ];
        res.send(d3.nest().key(d=>d.Sex).entries(data).map(d=>{
            let total = d.values.length;
            return {name:d.key,data:d3.nest().key(d=>d.Dept).entries(d.values).map(d=>{
                    return {
                        name:d.key,
                        value:d.values.length/total
                    }
                })
                    .filter(d=>Dept.includes(d.name))
                    .sort((a,b)=>Dept.indexOf(a.name)-Dept.indexOf(b.name))
            }
        }))

    });
});

router.get("/all_dept", function(req, res, next) {
    sql_operation.query(`select Dept from cost_pro`, data=>{
        res.send(d3.nest().key(d=>d.Dept).entries(data).map(d=>{
            return {name: d.key, value:d.values.length}
        }));
    });
});


router.get("/major_cost", function(req, res, next) {
    let DateFormat = d3.timeFormat('%Y-%m-%d %H:%M');
    sql_operation.query(`select Date,Major,CardNo from cost_pro where Major =  '${req.query.major}'`, data=>{
        data.forEach(d=>{
            d.Date = new Date(d.Date);
            d.Date.setSeconds(0);
            d.Date.setMinutes(d.Date.getMinutes() - d.Date.getMinutes()%10);
        });
        res.send(d3.nest().key(d=>d.Date).entries(data).map(d=>{
            return {
                date:DateFormat(new Date(d.key)),
                value:d3.nest().key(d=>d.CardNo).entries(d.values).length
            }
        }).sort((a,b)=>new Date(a.date)- new Date(b.date)));
    });
});
router.get("/f1_calendar_all", function(req, res, next) {
    let DateFormat = d3.timeFormat('%Y-%m-%d');
    sql_operation.query(`select Date from cost_pro`, data=>{

        data.forEach(d=>{
            d.Date = new Date(d.Date);
            d.Date = DateFormat(d.Date);
        });
        res.send(d3.nest().key(d=>d.Date).entries(data).map(d=>{
            return {
                date:d.key,
                value:d.values.length
            }
        }));
    });
});


router.get("/f1_alldept_", function(req, res, next) {
    sql_operation.query(`select Money,Dept,TermNo from cost_pro`, data=>{
        res.send(d3.nest().key(d=>d.Dept).entries(data).map(d=>{
            return {name: d.key, children:d3.nest().key(d=>d.TermNo).entries(d.values).map(d=>{
                    return {
                        name:'No.'+d.key,
                        value:d.values.length,
                        per_cost:d3.sum(d.values,s=>parseFloat(s.Money)/d.values.length).toFixed(2)
                    }
                })}
        }));
    });
});

router.get("/f1_cost_level", function(req, res, next) {
    sql_operation.query(`select Money from cost_pro where Major = '${req.query.major}'`, data=>{

        /**
         * @return {string}
         */
        function IdentifyLevel(money){
            if(money <= 1)
                return 'RMB <=1';
            else if(money>1&&money<=3)
                return 'RMB 1~3';
            else if(money>3&&money<=5)
                return 'RMB 3~5';
            else if(money>5&&money<7)
                return 'RMB 5~7';
            else
                return 'RMB >=7';
        }

        let levels = {
            'RMB <=1':'1',
            'RMB 1~3':'2',
            'RMB 3~5':'3',
            'RMB 5~7':'4',
            'RMB >=7':'5'
        };
        res.send(d3.nest().key(d=>IdentifyLevel(parseFloat(d.Money))).entries(data).map(d=>{
            return {
                name: d.key,
                value:d.values.length,
                level:levels[d.key]
            }
        }).sort((a,b)=>a.level-b.level));
    });
});

router.get("/f1_major_cost", function(req, res, next) {
    let DateFormat = d3.timeFormat('%Y-%m-%d');
    sql_operation.query(`select Major,Money,Date from cost_pro where Major = '${req.query.major}' and Type = '消费'`, data=>{
        res.send(d3.nest().key(d=>DateFormat(new Date(d.Date))).entries(data).map(d=>{
            return {
                name: d.key,
                value:d3.sum(d.values,s=>parseFloat(s.Money)).toFixed(2)
            }
        }));
    });
});

router.get("/f1_charge_major", function(req, res, next) {
    sql_operation.query(`select CardNo,FundMoney from cost_pro where type = '存款' and Major = '${req.query.major}'`, data=>{
        res.send(
            d3.nest()
                .key(d=>d.CardNo)
                .entries(data)
                .map(d=>{
                    return {
                        card_no:d.key,
                        times:d.values.length,
                        total:d3.sum(d.values,s=>parseFloat(s.FundMoney)).toFixed(2)
                    }
                })
        );
    });
});

module.exports = router;
