const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    content:{
        type : String,
        required:true,
    },
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    thread:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Thread",
        required:true
    },
},{timestamps:true});
module.exports =mongoose.model("Message",messageSchema);