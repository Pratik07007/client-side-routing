import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4 h-32 flex flex-col justify-center">
      <div className="container mx-auto flex justify-between items-center text-3xl">
        <div className="text-white text-3xl font-semibold">MyApp</div>
        <div className="space-x-4">
          <NavLink
            className={({ isActive }) => {
              return [isActive ? "text-red-400" : "text-white"];
            }}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return [isActive ? "text-red-400" : "text-white"];
            }}
            to={"/about"}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
