const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const session = require("express-session");
const isSignedIn = require("./middleware/is-signed-in.js");
const passUserToView = require("./middleware/pass-user-to-view.js");
const authController = require("./controllers/auth.js");
const dichosController = require("./controllers/dichos.js");
const usersController = require("./controllers/usersController");

const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const port = process.env.PORT ? process.env.PORT : "3000";

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static("public")); // for CSS
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passUserToView); // use new passUserToView middleware here

app.get("/", (req, res) => {
  if (req.session.user) {
    res.redirect(`/users/${req.session.user._id}/dichos`);
  } else {
    res.render("index.ejs");
  }
});

app.get("/users", usersController.getAllUsers);

app.use("/auth", authController);
app.use(isSignedIn);
app.use("/users/:userId/dichos", dichosController);

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});

// TODO: ADD website icon to the corner of site
// TODO: why the card gets bigger when i type in extra line in the quote section find out how to make it a fixed card.
// TODO: move the footer to the center
// TODO: FIX why I can't see the status -->
