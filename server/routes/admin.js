let express = require("express");
let router = express.Router();

router.post('/table',function (req, res) {
    let table_id=req.body.id;
    let table_number=req.body.table_number;
    console.log(table_id,table_number);
    res.send(`ok`);
});

module.exports=router