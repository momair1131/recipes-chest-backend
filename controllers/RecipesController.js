// INDUCES = INDEX, NEW, DELETE, UPDATE, CREATE, EDIT, SHOW
const Recipes = require("../models/RecipesModel");
const express = require("express");
const mongoose = require("mongoose");

// Index fuction
const allRecipes = async (req, res) => {
  try {
    const recipes = await Recipes.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      recipes: recipes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

// Delete function
const delRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipes.findByIdAndRemove(id);
    return res.status(200).json({ success: true, recipe });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

// Update function
const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ error: "no such recipe" });
    }
    const recipe = await Recipes.findByIdAndUpdate(id, req.body);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    return res.status(200).send({ message: "Recipe updated successfully" });
  } catch (error) {
    console.log(error);
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

const showRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ error: "no such recipe" });
    }
    const recipe = await Recipes.findById(id);

    if (!recipe) {
      res.status(404).json({ error: "no such recipe found" });
    }

    res.status(200).json(recipe);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  allRecipes,
  delRecipe,
  updateRecipe,
  createRecipe,
  showRecipe,
};
