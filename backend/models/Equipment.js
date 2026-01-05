const mongoose = require('mongoose');

const EquipmentSchema = new mongoose.Schema({
  equipmentId: { type: Number, required: true, unique: true },
  equipment_name: String,
  quantity: Number,
  labId: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Equipment', EquipmentSchema);
