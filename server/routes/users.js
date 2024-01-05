var express = require('express');
var router = express.Router();

/*============================== save user ==============================*/
router.post("/save/user",function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let role = "user";

    res.send("Account successfully created");
})

/*============================== get user count ==============================*/
router.get("/user/count",function (req, res) {
    res.send("users count");
})

/*============================== search user ==============================*/
router.get("/search/user",function (req, res) {
    res.send("search user ");
})

module.exports = router;
