const User = require("../models/user"); 

// GET all users
async function getAllUsers(req, res) {
  try {
    const users = await User.find({});
    res.render("users/index", { users });
  } catch (err) {
    res.status(500).send("Server error");
  }
}

module.exports = { getAllUsers };
