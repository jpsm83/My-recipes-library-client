import React from "react";
import recipes from "../../seed";
import RecipesCard from "../RecipesCard/RecipesCard";

export default function RecipesFeed() {
  return (
    <div className="flex flex-wrap border-4 mt-3">
      {recipes.map(({ title, image, readyInMinutes, servings, sourceName }) => (
          <RecipesCard title={title} image={image} readyInMinutes={readyInMinutes} servings={servings} sourceName={sourceName} />
      ))}
    </div>
  );
}
