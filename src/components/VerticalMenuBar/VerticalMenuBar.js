import React, { useState } from "react";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/solid";

export default function VerticalMenuBar() {
  const [showMeetMenu, setShowMeetMenu] = useState(false);
  const [showVegMenu, setShowVegMenu] = useState(false);
  const [showlegumesMenu, setShowlegumesMenu] = useState(false);
  const [showfruitsMenu, setShowfruitsMenu] = useState(false);

  const toggleMenu = (food, setFood) => {
    setFood(!food);
  };

  const meets = ["Beet", "Pork", "Chicken", "Duck", "Rabbit"];
  const vegetables = [
    "Carrot",
    "Broccoli",
    "Aspargus",
    "Cauliflower",
    "Corn",
    "Cucumber",
    "Eggplant",
    "Green Pepper",
    "Lettuce",
    "Mushrooms",
    "Onios",
    "Potato",
    "Pumpkin",
    "Red Pepper",
    "Tomato",
    "Beetrrot",
    "Brussel Sprouts",
    "Peas",
    "Zucchini",
    "Artichoke",
  ];
  const legumes = [
    "Beans",
    "Soybeans",
    "Chickpeas",
    "Penuts",
    "Lentils",
    "Lupins",
    "Mesquite",
    "Carob",
    "Tamarind",
    "Alfalfa",
    "Clover",
  ];
  const fruits = [
    "Banana",
    "Apples",
    "Strawberries",
    "Grapes",
    "Oranges",
    "Watermelon",
    "Blueberries",
    "Lemons",
    "Peach",
    "Avocado",
    "Pineapple",
    "Cherries",
    "Cantaloupe",
    "Pears",
    "Limes",
    "Plums",
    "Nectarines",
  ];

  return (
    <div className="w-36 min-h-full rounded-lg p-2 shadow-2xl space-y-2 overflow-scroll scrollbar-hide">
      <div className="border-b-2">
        <div
          className="flex justify-between cursor-pointer items-center"
          onClick={() => toggleMenu(showMeetMenu, setShowMeetMenu)}
        >
          <h2 className="text-md font-bold text-gray-600 sm:text-lg">Meet</h2>
          {showMeetMenu ? (
            <ChevronDoubleUpIcon className="h-4 text-red-500" />
          ) : (
            <ChevronDoubleDownIcon className="h-4 text-green-600" />
          )}
        </div>
        {showMeetMenu
          ? meets.map((meet) => {
              return (
                <div className="pl-2">
                  <input type="checkbox" id={meet} name="meet" value={meet} />
                  <label
                    htmlFor={meet}
                    className="pl-1 text-sm text-gray-800 sm:text-md"
                  >
                    {meet}
                  </label>
                </div>
              );
            })
          : null}
      </div>

      <div className="border-b-2">
        <div
          className="flex justify-between cursor-pointer items-center"
          onClick={() => toggleMenu(showVegMenu, setShowVegMenu)}
        >
          <h2 className="text-md font-bold text-gray-600 sm:text-lg">
            Vegetables
          </h2>
          {showVegMenu ? (
            <ChevronDoubleUpIcon className="h-4 text-red-500" />
          ) : (
            <ChevronDoubleDownIcon className="h-4 text-green-600" />
          )}
        </div>
        {showVegMenu
          ? vegetables.map((vegetable) => {
              return (
                <div className="pl-2">
                  <input
                    type="checkbox"
                    id={vegetable}
                    name="vegetable"
                    value={vegetable}
                  />
                  <label
                    htmlFor={vegetable}
                    className="pl-1 text-sm text-gray-800 sm:text-md"
                  >
                    {vegetable}
                  </label>
                </div>
              );
            })
          : null}
      </div>

      <div className="border-b-2">
        <div
          className="flex justify-between cursor-pointer items-center"
          onClick={() => toggleMenu(showlegumesMenu, setShowlegumesMenu)}
        >
          <h2 className="text-md font-bold text-gray-600 sm:text-lg">
            Legumes
          </h2>
          {showlegumesMenu ? (
            <ChevronDoubleUpIcon className="h-4 text-red-500" />
          ) : (
            <ChevronDoubleDownIcon className="h-4 text-green-600" />
          )}
        </div>
        {showlegumesMenu
          ? legumes.map((legume) => {
              return (
                <div className="pl-2">
                  <input
                    type="checkbox"
                    id={legume}
                    name="legume"
                    value={legume}
                  />
                  <label
                    htmlFor={legume}
                    className="pl-1 text-sm text-gray-800 sm:text-md"
                  >
                    {legume}
                  </label>
                </div>
              );
            })
          : null}
      </div>

      <div className="border-b-2">
        <div
          className="flex justify-between cursor-pointer items-center"
          onClick={() => toggleMenu(showfruitsMenu, setShowfruitsMenu)}
        >
          <h2 className="text-md font-bold text-gray-600 sm:text-lg">Fruits</h2>
          {showfruitsMenu ? (
            <ChevronDoubleUpIcon className="h-4 text-red-500" />
          ) : (
            <ChevronDoubleDownIcon className="h-4 text-green-600" />
          )}
        </div>
        {showfruitsMenu
          ? fruits.map((fruit) => {
              return (
                <div className="pl-2">
                  <input
                    type="checkbox"
                    id={fruit}
                    name="fruit"
                    value={fruit}
                  />
                  <label
                    htmlFor={fruit}
                    className="pl-1 text-sm text-gray-800 sm:text-md"
                  >
                    {fruit}
                  </label>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
