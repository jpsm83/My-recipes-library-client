import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import RecipeService from "../../services/recipe.service";
import { withAuth } from '../../context/auth.context';

//all the props comes from props.match.params.id
function RecipeDetail({
  id,
  dishName,
  cousine,
  user,
  servings,
  type,
  image,
  ingredients,
  prepTime,
  preparation,
  howToCook,
  refreshState,
}) {
  const recipeService = new RecipeService();

  const deleteRecipe = () => {
    recipeService
      .deleteOne(id)
      .then(() => {
        refreshState();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col shadow-2xl rounded-lg w-200 my-6 mx-3">
      <div className="flex flex-col justify-between sm:flex-row">
        <div className="flex justify-center items-center flex-shrink-0 rounded-t-lg overflow-hidden">
          <img className="h-60" src={image} alt={dishName} />
        </div>

        <div className="flex flex-col justify-between w-full ml-3 sm:ml-6">
          <p className="text-lg sm:text-2xl font-bold text-red-700 border-b-2">
            {dishName}
          </p>
          <button className="flex text-sm sm:text-md text-blue-700 justify-end">
            Create by {user}
          </button>
          <li className="text-sm sm:text-md text-gray-700 font-bold">{type}</li>
          <li className="text-sm sm:text-md text-gray-700 font-bold">
            {cousine} Dish
          </li>
          <li className="text-sm sm:text-md text-gray-700 font-bold">
            {servings} Servings
          </li>
          <li className="text-sm sm:text-md text-gray-700 font-bold">
            Prep time: {prepTime}
          </li>
        </div>
        <button className="flex align-top">
          <StarIcon className="w-8 text-yellow-400" />
        </button>
      </div>
      <div className="border-2 rounded-lg m-3 mt-4 p-2 bg-gray-100">
        <p className="text-md sm:text-lg font-bold text-gray-700 text-center">
          INGREDIENTS
        </p>
        <p className="text-sm sm:text-md text-gray-700 text-center">
          {ingredients}
        </p>
      </div>
      <div className="border-2 rounded-lg m-3 p-2 bg-gray-100">
        <p className="text-md sm:text-lg font-bold text-gray-700 text-center">
          PREPARATION
        </p>
        <p className="text-sm sm:text-md text-gray-700 text-center">
          {preparation}
        </p>
      </div>
      <div className="border-2 rounded-lg m-3 p-2 bg-gray-100">
        <p className="text-md sm:text-lg font-bold text-gray-700 text-center">
          HOW TO COOK
        </p>
        <p className="text-sm sm:text-md text-gray-700 text-center">
          {howToCook}
        </p>
      </div>

      <div className="flex space-x-6 justify-center mb-6 mt-4">
        <Link to={`/edit-recipe/${id}`}>
          <button className="typesCousine text-white bg-green-800">Edit</button>
        </Link>
        <Link to="/">
        <button
          className="typesCousine text-white bg-red-800"
          onClick={() => deleteRecipe()}
        >
          Delete
        </button>
        </Link>
      </div>
    </div>
  );
}

// export default withAuth(RecipeDetail);
export default withAuth(RecipeDetail);
