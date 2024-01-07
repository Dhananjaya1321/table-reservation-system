var express = require('express');
var UserController = require('../controller/UserController');
var router = express.Router();

/*============================== save user ==============================*/
router.post("/save/user",UserController.addUser)

/*============================== get user count ==============================*/
router.get("/user/count",function (req, res) {
    res.send("users count");
})

/*============================== search user ==============================*/
router.post("/search/user",UserController.signin)

module.exports = router;
