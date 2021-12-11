import React from "react";
import { StarIcon } from "@heroicons/react/solid";

export default function RecipesCard({
  title,
  image,
  readyInMinutes,
  servings,
  sourceName,
}) {
  return (
    <div className="flex flex-grow shadow-lg flex-col m-1.5 rounded-lg w-60 hover:bg-yellow-50 hover:scale-105 transition transform duration-200 ease-out">
      <h4 className="text-sm sm:text-lg m-2 font-bold text-red-700 text-center">
        {title}
      </h4>
      <div className="flex justify-center items-center h-44 overflow-hidden">
        <img
          className="min-w-full min-h-full shrink-0"
          src={image}
          alt={title}
        />
      </div>

      <div className="flex justify-between m-2 items-center">
        <div>
          <p className="text-xs sm:text-sm text-blcak">
            Ready in {readyInMinutes} m
          </p>
          <p className="text-sm sm:text-md font-bold text-blcak">
            {servings} Servings
          </p>
        </div>
        <button className="mt-auto button">
          <StarIcon className="w-8 text-yellow-400" />
        </button>
      </div>
      <p className="text-xs sm:text-md text-center mb-2 text-gray-500 border-t-2">
        Create by {sourceName}
      </p>
    </div>
  );
}
