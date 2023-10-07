const express = require("express");
const router = express.Router();

// INDUCES = INDEX, NEW, DELETE, UPDATE, CREATE, EDIT, SHOW

// Recipes

router.use("/recipes", require("./recipes")); // api/recipes

module.exports = router;
