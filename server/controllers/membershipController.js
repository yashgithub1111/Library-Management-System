const Membership = require('../models/Membership');  // Assuming your Membership model is in models/Membership.js
const User = require('../models/User');  // Assuming the User model is defined in models/User.js

// @desc    Get membership details for a user
// @route   GET /api/memberships/:userId
// @access  Private (Admin or user)
const getMembershipByUserId = async (req, res) => {
  try {
    const membership = await Membership.findOne({ userId: req.params.userId });

    if (!membership) {
      return res.status(404).json({ message: 'Membership not found' });
    }

    res.json(membership);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add a new membership
// @route   POST /api/memberships
// @access  Admin
const addMembership = async (req, res) => {
  const { userId, membershipType, startDate, endDate } = req.body;

  try {
    // Check if the user already has a membership
    const existingMembership = await Membership.findOne({ userId });
    if (existingMembership) {
      return res.status(400).json({ message: 'User already has a membership' });
    }

    const newMembership = new Membership({
      userId,
      membershipType,  // e.g. '6 months', '1 year', '2 years'
      startDate,
      endDate,
    });

    await newMembership.save();
    res.status(201).json(newMembership);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update an existing membership
// @route   PUT /api/memberships/:id
// @access  Admin
const updateMembership = async (req, res) => {
  const { membershipType, startDate, endDate } = req.body;

  try {
    const updatedMembership = await Membership.findByIdAndUpdate(
      req.params.id,
      { membershipType, startDate, endDate },
      { new: true }  // This will return the updated membership
    );

    if (!updatedMembership) {
      return res.status(404).json({ message: 'Membership not found' });
    }

    res.json(updatedMembership);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a membership
// @route   DELETE /api/memberships/:id
// @access  Admin
const deleteMembership = async (req, res) => {
  try {
    const deletedMembership = await Membership.findByIdAndDelete(req.params.id);

    if (!deletedMembership) {
      return res.status(404).json({ message: 'Membership not found' });
    }

    res.json({ message: 'Membership deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMembershipByUserId,
  addMembership,
  updateMembership,
  deleteMembership,
};
