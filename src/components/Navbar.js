import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-wrap justify-center ">
      <Link to="Multiplayer">
        <NavLink to="/Multiplayer">
          <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded ml-30 relative top-20">
            Play Local
          </button>
        </NavLink>

        <NavLink to="/">
          <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded ml-10 relative top-20">
            Play Computer
          </button>
        </NavLink>
      </Link>
    </nav>
  );
}

export default Navbar;
