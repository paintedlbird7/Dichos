// controllers/dichos.js

const express = require('express');
const router = express.Router();
// TODO: left off on Defining the route on the server

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
  
module.exports = router;
