import RecipeCards from "../subComponents/RecipeCards";
import PaginationButton from "../subComponents/PaginationButton";

const Recipe = () => {
  return (
    <div className="recipe-main-container">
      <div className="content-container">
        <h2>Your favourite recipes</h2>
      </div>
      <div className="recipe-wrapper">
        <RecipeCards />
      </div>

      {/* Pagination buttons */}
      <PaginationButton />
    </div>
  );
};

export default Recipe;
