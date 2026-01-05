const express = require('express');
const router = express.Router();

const Lab = require('../models/Lab');
const Staff = require('../models/Staff');
const Equipment = require('../models/Equipment');
const Experiment = require('../models/Experiment');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');

// Generic create and list endpoints for each model
const models = { Lab, Staff, Equipment, Experiment, Doctor, Patient };

Object.entries(models).forEach(([name, Model]) => {
  const base = `/${name.toLowerCase()}`;

  // Create
  router.post(base, async (req, res) => {
    try {
      const doc = new Model(req.body);
      await doc.save();
      res.status(201).json(doc);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // List
  router.get(base, async (req, res) => {
    try {
      const docs = await Model.find().limit(200).lean();
      res.json(docs);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
});

// Small helper: get entities by labId (for Lab relations)
router.get('/lab/:labId/related', async (req, res) => {
  try {
    const labId = Number(req.params.labId);
    const staff = await Staff.find({ labId }).lean();
    const equipment = await Equipment.find({ labId }).lean();
    const experiments = await Experiment.find({ labId }).lean();
    res.json({ staff, equipment, experiments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
