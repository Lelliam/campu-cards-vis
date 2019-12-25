let express = require('express');
let router = express.Router();
let sql_operation = require("./operation");

router.get("/test", function(req, res, next) {
    sql_operation.query('select * from students_origin', data=>{
        res.send(data);
    });
});
module.exports = router;
