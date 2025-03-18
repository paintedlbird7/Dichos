const mongoose = require("mongoose");

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

const User = mongoose.model("User", userSchema);

module.exports = User;
// 3 FIX TODO: why the card gets bigger when i type in extra line in the quote section find out how to make it a fixed card.
