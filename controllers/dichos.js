// controllers/applications.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', (req, res) => {
    // res.send('Hello dichos index route!');
    try {
        res.render('dichos/index.ejs');
      } catch (error) {
        console.log(error);
        res.redirect('/');
      }
  });

module.exports = router;
