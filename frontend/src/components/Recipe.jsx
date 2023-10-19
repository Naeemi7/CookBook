import React from "react";
import useCookBookContext from "../context/useCookBookContext";

const Recipe = () => {
  const { recipe } = useCookBookContext();

  if (!Array.isArray(recipe)) {
    // Handle the case where recipe is not an array
    return (
      <div>
        <p>Recipe data is not in the expected format.</p>
      </div>
    );
  }

  return (
    <>
      {recipe.map((item) => (
        <div key={item._id}>
          <p>Recipe title: {item.title}</p>
          <p>
            User who created this recipe: {item.user.firstname}{" "}
            {item.user.lastname}
          </p>
          <p>{item.description}</p>
          <p>
            Ingredients:
            <h2>
              {item.ingredients.map((ingre, index) => (
                <li key={index}>{ingre}</li>
              ))}
            </h2>
          </p>
        </div>
      ))}
    </>
  );
};

export default Recipe;
