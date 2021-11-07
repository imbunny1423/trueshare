const router = require("express").Router();
const Files = require("../databse/mydb");
const path = require("path");

router.get("/:uuid", (req, res)=>{
 const uuid = req.params.uuid;
 Files.findOne({uuid:uuid}, function(err, data){
     if(err){
         console.log(err);
     }else{
         const fileName = `./${data.path}`;
         res.download(fileName);
         if(res.headersSent){
             res.redirect(process.env.APP_URL);
             console.log("done");
         }
     }
 })
})

module.exports = router;