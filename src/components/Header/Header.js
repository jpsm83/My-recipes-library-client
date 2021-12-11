import React from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/outline";
import { withAuth } from '../../context/auth.context';

function Header() {
  return (
    <header className="sticky top-0 z-50">

      {/* top navbar */}
      <div className="flex items-center justify-between bg-red-900 px-2">

        {/* left elements */}
        <div className="flex items-center">
          <Link
            to="/"
            className="flex text-yellow-500 cursor-pointer text-sm sm:text-xl items-center font-bold space-x-2 whitespace-nowrap"
          >
            <img
              src="./img/logo.png"
              alt="Food logo"
              width={60}
              height={40}
            />
            <div>
              <h1>My Recipe Library</h1>
            </div>
          </Link>
        </div>

        {/* search */}
        <div className="bg-yellow-400 hover:bg-yellow-500 hidden flex-grow mx-10 max-w-lg sm:flex items-center h-10 rounded-lg cursor-pointer">
          <input
            className="p-2 h-full w-6 flex-grow rounded-l-lg flex-shrink focus:outline-none px-4"
            type="text"
            placeholder="Dish Name"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* right elements */}
        <div className="text-gray-200 flex items-center text-right text-xs sm:text-sm space-x-6 mr-4 whitespace-nowrap">
          <Link to="/favorites">
          <div className="cursor-pointer">
            <p>Favorites</p>
            <p className="font-bold sm:text-sm">Recipes</p>
          </div>
          </Link>
          <div className="cursor-pointer">
            <p>SignIn</p>
            <p className="font-bold sm:text-sm">LogIn</p>
          </div>
        </div>
      </div>

      {/* botton navbar */}
      <div className="flex justify-between items-center overflow-scroll scrollbar-hide space-x-3 pl-2 py-2 bg-red-700 text-gray-300 text-xs sm:text-sm flex-grow">
        <p className="typesCousine">American</p>
        <p className="typesCousine">Chinese</p>
        <p className="typesCousine">Thay</p>
        <p className="typesCousine">Italian</p>
        <p className="typesCousine">Espanish</p>
        <p className="typesCousine">Brazilian</p>
        <p className="typesCousine">Japanese</p>
        <p className="typesCousine">Turkish</p>
        <p className="typesCousine">Others</p>
      </div>
    </header>
  );
}

export default withAuth(Header)
