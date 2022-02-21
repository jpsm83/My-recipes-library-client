import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchIcon } from "@heroicons/react/outline";
import { getAllRecipes, setSearchHandle } from "../../features/recipesSlice";

const Search = () => {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const data = useSelector(getAllRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchHandle(filteredRecipes));
  }, [filteredRecipes]);

  const handleSearch = (e) => {
    let searchedRecipes = e.target.value;
    let filterRecipes = data.filter((recipe) => {
      return recipe.dishName
        .toLowerCase()
        .includes(searchedRecipes.toLowerCase());
    });
    setFilteredRecipes(filterRecipes);
  };

  return (
    <div className="bg-yellow-400 hover:bg-yellow-500 flex-grow flex max-w-lg items-center h-10 rounded-lg cursor-pointer">
      <input
        onChange={handleSearch}
        className="p-2 border-2 border-gray-300 border-r-0 h-full w-6 flex-grow rounded-l-lg flex-shrink focus:outline-none px-4"
        type="text"
        placeholder="Dish Name"
      />
      <SearchIcon className="h-12 p-4" />
    </div>
  );
};

export default Search;
