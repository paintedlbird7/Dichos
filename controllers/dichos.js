// controllers/dichos.js

const express = require('express');
const router = express.Router();
// TODO: left off Defining the route and coding the controller

const User = require('../models/user.js');

// GET
router.get('/', (req, res) => {
    // res.send('Hello dichos index route!');
    try {
        res.render('dichos/index.ejs');
      } catch (error) {
        console.log(error);
        res.redirect('/');
      }
  });

// GET new
router.get('/new', async (req, res) => {
    res.render('dichos/new.ejs');
  });


  // controllers/applications.js`
// POST form
router.post('/', async (req, res) => {
    try {
      // Look up the user from req.session
      const currentUser = await User.findById(req.session.user._id);
      // Push req.body (the new form data object) to the
      // applications array of the current user
      currentUser.dichos.push(req.body);
      // Save changes to the user
      await currentUser.save();
      // Redirect back to the applications index view
      res.redirect(`/users/${currentUser._id}/dichos`);
    } catch (error) {
      // If any errors, log them and redirect back home
      console.log(error);
      res.redirect('/');
    }
  });
  
  
module.exports = router;
