import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import recipeContext from "../context/recipeContext";
import recipeAPI from "../api/recipeAPI";

const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState({});
  const [skip, setSkip] = useState(0);
  const [totalRecipes, setTotalRecipes] = useState(0);
  const limitPerPage = 3; // Fixed limit of 3 recipes per page

  useEffect(() => {
    const getAllRecipes = async () => {
      try {
        const response = await recipeAPI.get(
          `/?limit=${limitPerPage}&skip=${skip}`
        );
        console.log(response);
        setRecipe(response.data.recipes);
        setTotalRecipes(response.data.totalRecipes);
      } catch (error) {
        console.log(error);
      }
    };
    getAllRecipes();
  }, [skip, limitPerPage]);

  // Calculate the number of pages based on the total number of recipes and the limit per page
  const numberOfPages = Math.ceil(totalRecipes / limitPerPage);

  return (
    <recipeContext.Provider value={{ recipe, setSkip, numberOfPages, skip }}>
      {children}
    </recipeContext.Provider>
  );
};

// Validates props
RecipeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RecipeProvider;
