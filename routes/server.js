const router = require("express").Router();
const Files = require("../databse/mydb");
const path = require("path");

router.get("/:uuid", (req, res)=>{
    res.sendFile(process.cwd() + '/index/download.html');
});

module.exports = router;