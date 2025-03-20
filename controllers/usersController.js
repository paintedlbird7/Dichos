const User = require("../models/user"); 

// GET all users
async function getAllUsers(req, res) {
  try {
    const users = await User.find({});
    console.log(users)
    res.render("users/index", { users });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}

module.exports = { getAllUsers };
