const mongoose  = require("mongoose");
const userSchema = new mongoose.Schema({
    username:{
     type: String,
     required: true,
     unique: true,
     trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    role:{
        type:String,
        enum: ["admin", "dev", "finance", "sales", "support"],
        required: true,
        trim: true
    },
    department:{
        type: String,
        required: true,
        trim: true
    },
    organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: true
    }
});

module.exports = mongoose.model("User", userSchema);