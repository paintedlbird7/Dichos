// controllers/dichos.js

const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

// GET
router.get("/", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    res.render("dichos/index.ejs", {
      dichos: currentUser.dichos,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

// GET new
router.get("/new", async (req, res) => {
  res.render("dichos/new.ejs");
});

// POST form
router.post("/", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.dichos.push(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/dichos`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

// GET gets each quote
router.get("/:dichoId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const dicho = currentUser.dichos.id(req.params.dichoId);
    res.render("dichos/show.ejs", {
      dicho: dicho,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

// DELETE
router.delete("/:dichoId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.dichos.id(req.params.dichoId).deleteOne();
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/dichos`);
  } catch (error) {
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
