// controllers/dichos.js

const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

// GET
// router.get('/', (req, res) => {
router.get("/", async (req, res) => {
  try {
    // Look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    // Render index.ejs, passing in all of the current user's
    // dichos as data in the context object.
    res.render("dichos/index.ejs", {
      dichos: currentUser.dichos,
    });
  } catch (error) {
    // If any errors, log them and redirect back home
    console.log(error);
    res.redirect("/");
  }
});

// GET new
router.get("/new", async (req, res) => {
  res.render("dichos/new.ejs");
});

// controllers/dichos.js`
// POST form
router.post("/", async (req, res) => {
  try {
    // Look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    // Push req.body (the new form data object) to the
    // dichos array of the current user
    currentUser.dichos.push(req.body);
    // Save changes to the user
    await currentUser.save();
    // Redirect back to the dichos index view
    res.redirect(`/users/${currentUser._id}/dichos`);
  } catch (error) {
    // If any errors, log them and redirect back home
    console.log(error);
    res.redirect("/");
  }
});

// controllers/dichos.js
// GET gets each quote
// controllers/dichos.js
router.get("/:dichoId", async (req, res) => {
  try {
    // Look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    // Find the dicho by the dichoId supplied from req.params
    const dicho = currentUser.dichos.id(req.params.dichoId);
    // Render the show view, passing the dicho data in the context object
    res.render("dichos/show.ejs", {
      dicho: dicho,
    });
  } catch (error) {
    // If any errors, log them and redirect back home
    console.log(error);
    res.redirect("/");
  }
});

// router.get('/:dichoId', (req, res) => {
//     res.send(`here is your request param: ${req.params.dichoId}`);
//   });

// DELETE
router.delete("/:dichoId", async (req, res) => {
  try {
    // Look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    // Use the Mongoose .deleteOne() method to delete
    // an dicho using the id supplied from req.params
    currentUser.dichos.id(req.params.dichoId).deleteOne();
    // Save changes to the user
    await currentUser.save();
    // Redirect back to the dichos index view
    res.redirect(`/users/${currentUser._id}/dichos`);
  } catch (error) {
    // If any errors, log them and redirect back home
    console.log(error);
    res.redirect("/");
  }
});

// GET/ EDIT
router.get("/:dichoId/edit", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const dicho = currentUser.dichos.id(req.params.dichoId);
    res.render("dichos/edit.ejs", {
      dicho: dicho,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

// PUT/ EDIT
router.put("/:dichoId", async (req, res) => {
  try {
    // Find the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    // Find the current dicho from the id supplied by req.params
    const dicho = currentUser.dichos.id(req.params.dichoId);
    // Use the Mongoose .set() method
    // this method updates the current dicho to reflect the new form
    // data on `req.body`
    dicho.set(req.body);
    // Save the current user
    await currentUser.save();
    // Redirect back to the show view of the current dicho
    res.redirect(`/users/${currentUser._id}/dichos/${req.params.dichoId}`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
