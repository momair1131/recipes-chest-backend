const {
  allRecipes,
  createRecipe,
  delRecipe,
  updateRecipe,
  showRecipe,
} = require("../controllers/RecipesController");

const express = require("express");
const router = express.Router();

// INDUCES = INDEX, NEW, DELETE, UPDATE, CREATE, EDIT, SHOW

// Index Route
router.get("/", allRecipes);

// New Route
router.post("/", createRecipe);

// Delete Route
router.delete("/:id", delRecipe);

// Update Route
router.put("/:id", updateRecipe);

// Show Route
router.get("/:id", showRecipe);

module.exports = router;
