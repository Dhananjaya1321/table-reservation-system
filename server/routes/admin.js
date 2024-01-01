let express = require("express");
let router = express.Router();

/*================================= tables ==================================*/
router.post('/table',function (req, res) {
    let table_id=req.body.id;
    let table_number=req.body.table_number;
    console.log(table_id,table_number);
    res.send(`ok`);
});

router.get('/all/table',function (req, res) {
    res.send(`all tables`);
});

/*================================= booking ==================================*/
router.post('/booking',function (req, res) {
    res.send(`save booking`);
});

router.put('/booking',function (req, res) {
    res.send(`update booking`);
});

router.delete('/booking',function (req, res) {
    res.send(`delete booking`);
});

router.get('/new/booking',function (req, res) {
    res.send(`new booking`);
});


module.exports=router