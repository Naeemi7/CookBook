import "../../styles/recipe-cards.scss";
import useRecipeContext from "../../context/useRecipeContext";

const RecipeCards = () => {
  const { recipe } = useRecipeContext();

  // Check if `recipe` is an array before mapping over it
  if (!Array.isArray(recipe)) {
    return (
      <div className="recipe-cards">
        <p>No recipes available.</p>
      </div>
    );
  }

  return (
    <div className="recipe-cards">
      {recipe.map((recipe, index) => (
        <div className="card-hover" key={index}>
          <div className="card-hover__content">
            <h3 className="card-hover__title">{recipe.title}</h3>
            <p className="card-hover__text">{recipe.description}</p>
            <a href="#" className="card-hover__link">
              <span>Learn How</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
          <div className="card-hover__extra">
            <h4>
              Learn <span>now</span> and get <span>40%</span> discount!
            </h4>
          </div>
          <img
            className="recipe-image"
            src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60"
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeCards;