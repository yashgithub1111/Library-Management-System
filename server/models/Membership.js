const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

module.exports = mongoose.model('Membership', membershipSchema);
