import { useState, useEffect } from "react";
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
  }, []);

  return (
    <recipeContext.Provider value={{ recipe }}>
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeProvider;
