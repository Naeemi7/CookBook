import { useContext } from "react";
import recipeContext from "./recipeContext";

function useRecipeContext() {
  return useContext(recipeContext);
}
export default useRecipeContext;
