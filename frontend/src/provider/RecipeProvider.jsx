import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import recipeContext from "../context/recipeContext";
import recipeAPI from "../api/recipeAPI";

const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const getAllRecipes = async () => {
      try {
        const response = await recipeAPI.get(`/?limit=${limit}&skip=${skip}`);

        setRecipe(response.data.recipes);
      } catch (error) {
        console.log(error);
      }
    };
    getAllRecipes();
  }, [skip, limit]);

  return (
    <recipeContext.Provider value={{ recipe, setSkip, skip, limit, setLimit }}>
      {children}
    </recipeContext.Provider>
  );
};

RecipeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RecipeProvider;
