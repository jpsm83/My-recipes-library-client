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
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <h4 className="my-3">{title} m</h4>
      <div className="w-6 text-yellow-400">
        <StarIcon />
      </div>
      <div>
        <img
          src={image}
          height={200}
          width={200}
          alt={title}
          objectFit="contain"
        />
      </div>
      <p className="my-3">Ready in {readyInMinutes} m</p>

      <div className="mb-5">
        <div className="flex">{servings} Servings</div>
      </div>
      <p className="text-xs my-2 line-clamp-2">Create by {sourceName}</p>
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}
