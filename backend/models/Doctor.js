const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  doctorId: { type: Number, required: true, unique: true },
  doctor_name: String,
  specialization: String
}, { timestamps: true });

module.exports = mongoose.model('Doctor', DoctorSchema);
