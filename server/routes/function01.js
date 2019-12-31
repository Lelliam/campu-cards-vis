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

    sql_operation.query(`select Sex,CardNo,FundMoney from cost_pro where type = '存款' and Major = '${req.query.major}'`, data=>{
        res.send(
            d3.nest()
                .key(d=>d.CardNo)
                .entries(data)
                .map(d=>{
                    return {
                        card_no:d.key,
                        sex:d.values[0].Sex,
                        times:d.values.length,
                        total:d3.sum(d.values,s=>parseFloat(s.FundMoney)).toFixed(2)
                    }
                })
        );
    });
});

router.get("/f1_all_meal", function(req, res, next) {
    res.send([
        {"major":"18工业设计","data":{"morn":"1.76","noon":"4.73","even":"3.42"}},
        {"major":"18机械制造","data":{"morn":"1.63","noon":"5.56","even":"4.67"}},
        {"major":"18计算机应用","data":{"morn":"1.37","noon":"4.97","even":"4.62"}},
        {"major":"18电子商务","data":{"morn":"1.58","noon":"5.06","even":"4.03"}},{"major":"18模具设计","data":{"morn":"1.68","noon":"6.12","even":"4.62"}},
        {"major":"18连锁经营","data":{"morn":"1.73","noon":"5.09","even":"3.85"}},{"major":"18旅游管理","data":{"morn":"1.40","noon":"6.05","even":"3.96"}},
        {"major":"18视觉传播","data":{"morn":"1.97","noon":"6.61","even":"4.98"}},{"major":"18国际金融","data":{"morn":"0.97","noon":"5.39","even":"3.74"}},
        {"major":"18会计","data":{"morn":"1.04","noon":"5.15","even":"3.57"}},{"major":"18金融管理","data":{"morn":"1.14","noon":"5.56","even":"3.54"}},
        {"major":"18嵌入式技术","data":{"morn":"2.01","noon":"5.41","even":"5.28"}},{"major":"18建筑设计","data":{"morn":"2.01","noon":"5.38","even":"4.16"}},
        {"major":"18商务英语","data":{"morn":"1.58","noon":"5.92","even":"3.69"}},{"major":"18皮具艺术","data":{"morn":"1.94","noon":"5.64","even":"3.82"}},
        {"major":"18审计","data":{"morn":"1.03","noon":"5.11","even":"3.48"}},{"major":"18国际商务","data":{"morn":"1.38","noon":"5.42","even":"3.54"}},
        {"major":"18工商企管","data":{"morn":"1.76","noon":"4.84","even":"4.11"}},{"major":"18计算机网络","data":{"morn":"1.42","noon":"6.11","even":"5.04"}},
        {"major":"18市场营销","data":{"morn":"1.55","noon":"6.12","even":"3.57"}},{"major":"18首饰设计","data":{"morn":"1.01","noon":"8.08","even":"3.42"}},
        {"major":"18工程造价","data":{"morn":"1.80","noon":"5.19","even":"3.48"}},{"major":"18工业工程","data":{"morn":"1.51","noon":"6.23","even":"4.56"}},
        {"major":"18物流管理","data":{"morn":"1.45","noon":"4.83","even":"3.83"}},{"major":"18国贸实务","data":{"morn":"1.54","noon":"5.69","even":"3.14"}},
        {"major":"18商务日语","data":{"morn":"1.10","noon":"6.78","even":"4.00"}},{"major":"18建筑工程","data":{"morn":"2.00","noon":"5.59","even":"3.86"}},
        {"major":"18艺术设计","data":{"morn":"1.81","noon":"5.62","even":"3.31"}},{"major":"18工业机器人","data":{"morn":"1.83","noon":"4.99","even":"4.11"}},
        {"major":"18软件技术","data":{"morn":"1.32","noon":"6.12","even":"4.81"}},{"major":"18电气自动化","data":{"morn":"2.35","noon":"5.73","even":"4.16"}},
        {"major":"18社会工作","data":{"morn":"1.00","noon":"5.63","even":"3.93"}},{"major":"18汽车检测","data":{"morn":"2.07","noon":"5.32","even":"3.99"}},
        {"major":"18宝玉石鉴定","data":{"morn":"1.13","noon":"6.49","even":"3.97"}},{"major":"18市政工程","data":{"morn":"2.28","noon":"5.85","even":"3.93"}},
        {"major":"18酒店管理","data":{"morn":"1.75","noon":"5.80","even":"4.10"}},{"major":"18产品艺术","data":{"morn":"1.90","noon":"5.80","even":"3.53"}},
        {"major":"18机械制造（学徒）","data":{"morn":"1.30","noon":"6.86","even":"5.36"}},{"major":"18动漫设计","data":{"morn":"2.18","noon":"6.03","even":"4.39"}},
        {"major":"18环境艺术","data":{"morn":"1.63","noon":"5.86","even":"4.06"}},{"major":"18投资与理财","data":{"morn":"1.33","noon":"5.22","even":"3.75"}}]);

/*    let DateFormat = d3.timeFormat('%Y-%m-%d');
    sql_operation.query(`select CardNo,Major,Money,Date from cost_pro where Type = '消费' and Major != 'null' and Dept like '%食堂%'`, data=>{

        data.forEach(d=>{
            d.type = MealType(new Date(d.Date));
            d.Date = DateFormat(new Date(d.Date));
        });

        data = data.filter(d=>d.Date !== 'other');


        /!**
         * @return {string}
         *!/
        function MealType(date){
            if(date.getHours()>=6&&date.getHours()<=9)
                return 'morn';
            else if(date.getHours()>=11&&date.getHours()<=13)
                return 'noon';
            else if(date.getHours()>=16&&date.getHours()<=18)
                return 'even';
            else
                return 'other';
        }
        res.send(d3.nest().key(d=>d.Major).entries(data).map(d=>{
            let temp = d3.nest().key(d=>d.CardNo).entries(d.values).map(s=>{
                let days = d3.nest().key(t=>t.Date).entries(s.values).length;
                return {
                    morn:(d3.sum(s.values.filter(x=>x.type === 'morn'),y=>parseFloat(y.Money))/days).toFixed(2),
                    noon:(d3.sum(s.values.filter(x=>x.type === 'noon'),y=>parseFloat(y.Money))/days).toFixed(2),
                    even:(d3.sum(s.values.filter(x=>x.type === 'even'),y=>parseFloat(y.Money))/days).toFixed(2)
                }
            });

            return  {
                major:d.key,
                data: {
                        morn:(d3.sum(temp,s=>s.morn)/temp.length).toFixed(2),
                        noon:(d3.sum(temp,s=>s.noon)/temp.length).toFixed(2),
                        even:(d3.sum(temp,s=>s.even)/temp.length).toFixed(2)
                    }
            }
        }));
    });*/
});

module.exports = router;
