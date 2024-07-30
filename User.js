const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  progress: { type: Map, of: Number }, // Track user progress
  recommendations: [{ type: String }],
});

module.exports = mongoose.model('User', UserSchema);
