const mongoose = require('mongoose');

const dichoSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: true,
  // },
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  postingLink: {
    type: String,
  },
  // status: {
  //   type: String,
  //   enum: ['english', 'spanish'],
  // },
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dichos: [dichoSchema], // Embedded schema as an array
});

const User = mongoose.model('User', userSchema);

module.exports = User;
