var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  name: String,
  cohort: Number,
  gender: String
});

module.exports = mongoose.model('Student', studentSchema);
