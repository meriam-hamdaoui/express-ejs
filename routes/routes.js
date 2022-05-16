const express = require("express");

//use the express router
const router = express.Router();

//get methode for home router
router.get("/", (req, res) => {
  res.render("home");
});

//get methode for services router
router.get("/services", (req, res) => {
  res.render("services");
});

//get methode for contact router
router.get("/contact", (req, res) => {
  res.render("contact");
});

//export the route
module.exports = router;
