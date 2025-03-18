const mongoose = require("mongoose");

const dichoSchema = new mongoose.Schema({
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
  dichos: [dichoSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
