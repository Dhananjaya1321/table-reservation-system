let express = require("express");
let TableController = require("../controller/TableController");
let router = express.Router();

/*================================= tables ==================================*/
router.post('/table', TableController.saveTable);

router.get('/all/table', TableController.getAllTables);

router.delete(`/delete/table/:table_id`, TableController.deleteTable);

/*================================= booking ==================================*/
router.post('/booking', TableController.saveBooking);

router.put('/booking', function (req, res) {
    res.send(`update booking`);
});

router.delete('/delete/booking', TableController.deleteBooking);

module.exports = router
