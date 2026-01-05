const mongoose = require('mongoose');

const LabSchema = new mongoose.Schema({
  labId: { type: Number, required: true, unique: true },
  lab_name: String,
  location: String,
  capacity: Number
}, { timestamps: true });

module.exports = mongoose.model('Lab', LabSchema);
