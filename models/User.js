const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  statement: {
    type: String,
    required: true
  }, 
  joinDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);