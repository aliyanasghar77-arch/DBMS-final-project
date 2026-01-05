const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  patientId: { type: Number, required: true, unique: true },
  patient_name: String,
  doctorId: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('Patient', PatientSchema);
