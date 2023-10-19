import { useState, useEffect } from "react";
import cookBookContext from "../context/cookBookContext";
import recipeAPI from "../api/recipeAPI";

const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const getAllRecipes = async () => {
      try {
        const response = await recipeAPI.get("/");
        console.log(response);
        setRecipe(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  });
  return (
    <cookBookContext.Provider value={{ recipe }}>
      {children}
    </cookBookContext.Provider>
  );
};

export default RecipeProvider;
