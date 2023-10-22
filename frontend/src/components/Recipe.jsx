import RecipeCards from "./subComponents/RecipeCards";

const Recipe = () => {
  return (
    <div className="recipe-main-container">
      <div className="content-container">
        <h2>Your favourite recipes</h2>
      </div>
      <div className="recipe-wrapper">
        <RecipeCards />
      </div>
    </div>
  );
};

export default Recipe;
