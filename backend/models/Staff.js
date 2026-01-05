const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
  staffId: { type: Number, required: true, unique: true },
  staff_name: String,
  role: String,
  labId: { type: Number, required: true } // reference by labId for simplicity
}, { timestamps: true });

module.exports = mongoose.model('Staff', StaffSchema);
