// controllers/dichos.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// GET
// router.get('/', (req, res) => {
router.get('/', async (req, res) => {
    try {
      // Look up the user from req.session
      const currentUser = await User.findById(req.session.user._id);
      // Render index.ejs, passing in all of the current user's
      // applications as data in the context object.
      res.render('dichos/index.ejs', {
        dichos: currentUser.dichos,
      });
    } catch (error) {
      // If any errors, log them and redirect back home
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

  // controllers/applications.js
// GET gets each quote
// controllers/applications.js

router.get('/:dichoId', async (req, res) => {
    try {
      // Look up the user from req.session
      const currentUser = await User.findById(req.session.user._id);
      // Find the application by the applicationId supplied from req.params
      const dicho = currentUser.dichos.id(req.params.dichoId);
      // Render the show view, passing the application data in the context object
      res.render('dichos/show.ejs', {
        dicho: dicho,
      });
    } catch (error) {
      // If any errors, log them and redirect back home
      console.log(error);
      res.redirect('/');
    }
  });
  
// router.get('/:dichoId', (req, res) => {
//     res.send(`here is your request param: ${req.params.dichoId}`);
//   });
  
  
module.exports = router;
