const express = require('express');
const router = express.Router();

// Membership model
const Membership = require('../models/Membership');

// Get all memberships
router.get('/', async (req, res) => {
  try {
    const memberships = await Membership.find();
    res.json(memberships);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new membership
router.post('/', async (req, res) => {
  const { name, type, startDate, endDate } = req.body;
  const membership = new Membership({
    name,
    type,
    startDate,
    endDate,
  });

  try {
    const newMembership = await membership.save();
    res.status(201).json(newMembership);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
