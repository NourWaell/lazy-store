import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { useEffect } from "react";

const themes = {
  dracula: "dracula",
  autumn: "autumn",
};

const getThemesFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.autumn;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemesFromLocalStorage());

  const handleChangeTheme = () => {
    const { autumn, dracula } = themes;
    const newTheme = theme === dracula ? autumn : dracula;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            L
          </NavLink>

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="w-6 h-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-small dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleChangeTheme} />
            <BsSunFill className="swap-on w-4 h-4" />
            <BsMoonFill className="swap-off w-4 h-4" />
          </label>

          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                0
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
