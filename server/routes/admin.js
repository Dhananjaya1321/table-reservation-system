let express = require("express");
let TableController = require("../controller/TableController");
let router = express.Router();

/*================================= tables ==================================*/
router.post('/table',TableController.saveTable);

router.get('/all/table',TableController.getAllTables);

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
