import React, { useEffect } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import Search from "../Search/Search";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllRecipes,
  fetchAsyncRecipes,
  searchedRecipes,
  filteredByCountry,
  filteredByIngredients,
} from "../../features/recipesSlice";

const RecipesFeed = () => {
  const data = useSelector(getAllRecipes);
  const searchedData = useSelector(searchedRecipes);
  const filteredByCountryData = useSelector(filteredByCountry);
  const filteredByIngredientsData = useSelector(filteredByIngredients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncRecipes());
  }, [searchedData, filteredByCountryData, filteredByIngredientsData]);

  const displayRecipes = () => {
    return data
      .filter((recipe) => {
        if (
          filteredByCountryData === "Any"
          // && filteredByIngredientsData === "Any"
        ) {
          return true;
        }
        return filteredByCountryData === recipe.cousine;
      })
      .map((recipe) => {
        return(
          <RecipeCard key={recipe.id} {...recipe} />
          )
      });
  };

  const displayfilteredRecipes = () => {
    return searchedData
      .filter((recipe) => {
        if (
          filteredByCountryData === "Any"
          // && filteredByIngredientsData === "Any"
        ) {
          return true;
        }
        return filteredByCountryData === recipe.cousine;
      })
      .map((recipe) => {
        return(
          <RecipeCard key={recipe.id} {...recipe} />
          )
      });
  };

  return (
    <div>
      <div className="flex bg-gray-100 p-3 justify-center m-3">
        <Search />
      </div>
      <div className="flex flex-wrap justify-between p-1.5">
        {data.length === 0 ? (
          <p className="text-lg font-bold">
            Lets get dirt, start to cook and create your first Recipe
          </p>
        ) : searchedData.length > 0 ? (
          displayfilteredRecipes()
        ) : (
          displayRecipes()
        )}
      </div>
    </div>
  );
};

export default RecipesFeed;
