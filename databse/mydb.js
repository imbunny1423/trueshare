const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const fileData = new Schema({
    filename:{type:String, required: true},
    path: {type:String, required: true},
    size: {type:Number, required: true},
    uuid: {type:String, required: true},
})


const Files = mongoose.model("Files", fileData);
module.exports = Files;