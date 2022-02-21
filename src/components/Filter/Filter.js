import React from "react";
import { useDispatch } from "react-redux";
import { setFilterCountry } from "../../features/recipesSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const cousinesSelection = [
    "American",
    "Chinese",
    "Thai",
    "Italian",
    "Spanish",
    "Brazilian",
    "Japanese",
    "Turkish",
    "Any",
  ];

  return (
    <div className="flex justify-between items-center overflow-scroll scrollbar-hide space-x-3 pl-2 py-2 bg-red-700 text-gray-300 text-xs sm:text-sm flex-grow">
      {cousinesSelection.map((cousine) => {
        return (
          <button
            className="typesCousine"
            onClick={() => {
              dispatch(setFilterCountry(cousine));
            }}
          >
            {cousine}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
