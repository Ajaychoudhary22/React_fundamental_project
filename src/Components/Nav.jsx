import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
        <div className="flex items-center justify-center gap-x-10 text-sm mb-10">
      <NavLink
        to="/"
        className={(e) => (e.isActive ? "text-red-300" : "")}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={(e) => (e.isActive ? "text-red-300" : "")}
      >
        About
      </NavLink>

      <NavLink
        to="/recipes"
        className={(e) => (e.isActive ? "text-red-300" : "")}
      >
        Recipes
      </NavLink>
     <NavLink
  to="/create"
  className={(e) =>
    `py-2 px-4 bg-gray-900 rounded-md text-white ${
      e.isActive ? "text-red-300" : ""
    }`
  }
>

        Create-Recipes
      </NavLink>
           <NavLink
  to="/fav"
  className={(e) =>
    `py-2 px-4 bg-gray-900 rounded-md text-white ${
      e.isActive ? "text-red-300" : ""
    }`
  }
>

        Favorite Recipes
      </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
