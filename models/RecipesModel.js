const { Schema, model } = require("mongoose");

const RecipesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      // required: true,
    },
    img: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    directions: {
      type: String,
      // required: true
    },
  },
  { timestamps: true }
);

const Recipes = model("Recipe", RecipesSchema);

module.exports = Recipes;
