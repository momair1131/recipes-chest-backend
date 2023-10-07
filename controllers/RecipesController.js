// INDUCES = INDEX, NEW, DELETE, UPDATE, CREATE, EDIT, SHOW
const Recipes = require("../models/RecipesModel");

// Index fuction
const allRecipes = async (req, res) => {
  try {
    const recipes = await Recipes.find();
    return res.status(200).json({
      success: true,
      recipes: recipes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};

// New function
// const newRecipes = (req, res) => {
//     res.redirect("/")
// };

// Delete function
const delRecipe = async (req, res) => {
  try {
    const id = req.param.id;
    const recipe = await Recipes.findByIdAndRemove(id);
    return res.status(200).json({ success: true, recipe });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};

// Update function
const updateRecipe = async (req, res) => {
  try {
    const id = req.param.id;
    const recipe = await Recipes.findByIdAndUpdate(id, req.body, { new: true }); // new= true display updated data
    return res.status(200).json({ success: true, recipe });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};

// Create function
const createRecipe = async (req, res) => {
  try {
    const recipe = await Recipes.create(req.body);
    return res.status(200).json({ success: true, recipe });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};

// Show function
const showRecipe = async (req, res) => {
  try {
    const id = req.param.id;
    const recipe = await Recipes.findById(id);
    return res.status(200).json({ success: true, recipe });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};

module.exports = {
  allRecipes,
  delRecipe,
  updateRecipe,
  createRecipe,
  showRecipe,
};
