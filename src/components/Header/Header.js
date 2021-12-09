import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      {/* top navbar */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* left elements */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Link to="/home">
            <img
              src="https://w7.pngwing.com/pngs/1013/530/png-transparent-cafe-italian-cuisine-breakfast-menu-eat-food-logo-eating.png"
              alt="Food logo"
              width={150}
              height={40}
              objectFit="contain"
              className="cursor-pointer"
            />
            <div>
              <h2>My Recipe Library</h2>
            </div>
          </Link>
        </div>
        {/* right elements */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Favorites</p>
            <p className="font-extrabold md:text-sm">Recipes</p>
          </div>
          <div className="link">
            <p>SignIn</p>
            <p className="font-extrabold md:text-sm">LogIn</p>
          </div>
        </div>
      </div>
      {/* botton navbar */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link">American</p>
        <p className="link">Chinese</p>
        <p className="link">Thay</p>
        <p className="link hidden lg:inline-flex">Italian</p>
        <p className="link hidden lg:inline-flex">Espanish</p>
        <p className="link hidden lg:inline-flex">Brazilian</p>
        <p className="link hidden lg:inline-flex">Japanese</p>
        <p className="link hidden lg:inline-flex">Turkish</p>
        <p className="link hidden lg:inline-flex">Others</p>
      </div>
    </header>
  );
}
