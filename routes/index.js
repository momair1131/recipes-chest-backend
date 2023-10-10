const express = require("express");
const router = express.Router();

router.use("/recipes", require("./recipes")); // api/recipes

module.exports = router;
