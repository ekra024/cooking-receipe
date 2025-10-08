import React from "react";
import { IoSearchOutline, IoPersonCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex justify-between w-10/12 mx-auto my-5">
      <h1 className="font-bold text-2xl">Recipe Calories</h1>
      <div className="lg:flex  hidden">       
        <ul className="flex  justify-around gap-5 text-sm items-center">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Recipes</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Search</a>
        </li>
      </ul>
      </div>
      <div className="flex gap-4  w-1/4">
        <div className="bg-gray-100 rounded-full flex  items-center w-full pl-5 gap-2">
          <IoSearchOutline className=""></IoSearchOutline>
          <span className="text-sm">Search</span> <span></span>
        </div>
        <div className="bg-[#0BE58A] rounded-full p-1  flex items-center">
          <IoPersonCircleOutline className="text-2xl"></IoPersonCircleOutline>
        </div>
      </div>
    </div>
  );
};

export default Header;
