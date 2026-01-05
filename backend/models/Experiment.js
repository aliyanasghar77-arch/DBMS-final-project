const mongoose = require('mongoose');

const ExperimentSchema = new mongoose.Schema({
  experimentId: { type: Number, required: true, unique: true },
  experiment_name: String,
  experiment_date: Date,
  labId: { type: Number, required: true },
  doctorId: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('Experiment', ExperimentSchema);
