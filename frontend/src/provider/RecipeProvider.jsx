import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import recipeContext from "../context/recipeContext";
import recipeAPI from "../api/recipeAPI";

const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState({});
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const getAllRecipes = async () => {
      try {
        const response = await recipeAPI.get(`/?limit=3&skip=${skip}`);
        console.log(response);
        setRecipe(response.data.recipes);
      } catch (error) {
        console.log(error);
      }
    };
    getAllRecipes();
  }, [skip]);

  return (
    <recipeContext.Provider value={{ recipe }}>
      {children}
    </recipeContext.Provider>
  );
};

//Validates props
// Validates props
RecipeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RecipeProvider;
