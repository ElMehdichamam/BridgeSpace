const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  departments: {
    type: [String],
    default: []
  }
}, { timestamps: true });

module.exports = mongoose.model("Organization", organizationSchema);