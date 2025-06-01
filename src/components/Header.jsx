import React, { useContext, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { Tooltip } from "react-tooltip";
import { FiSun, FiMoon } from "react-icons/fi";
import { toast } from "react-toastify";

const Header = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Successfully added garden tip", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header className="p-3">
      <nav
        className="flex items-center justify-between w-full md:container mx-auto relative bg-white dark:bg-gray-800 rounded-full px-5 shadow">

        {/* logo */}
        <div>
          <img src="https://i.imgur.com/DGGbzmK.png" alt="logo" className="w-[70px] " />
        </div>

        {/* nav links */}
        <ul className="items-center gap-[20px] text-[1rem] text-[#424242] dark:text-gray-200 lg:flex hidden">

          <li className="before:w-0 hover:before:w-full before:bg-green-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-green-600 transition-all duration-300 before:left-0 cursor-pointer capitalize">
            <NavLink to="/">Home</NavLink>
          </li>

          <li className="before:w-0 hover:before:w-full before:bg-green-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-green-600 transition-all duration-300 before:left-0 cursor-pointer capitalize">
            <NavLink to="/explore-gardeners">Explore Gardeners</NavLink>
          </li>

          <li className="before:w-0 hover:before:w-full before:bg-green-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-green-600 transition-all duration-300 before:left-0 cursor-pointer capitalize">
            <NavLink to="/browse-tips">Browse Tips</NavLink>
          </li>

          <li className="before:w-0 hover:before:w-full before:bg-green-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-green-600 transition-all duration-300 before:left-0 cursor-pointer capitalize">
            <NavLink to="/share-garden-tip">Share a Garden Tip</NavLink>
          </li>

          <li className="before:w-0 hover:before:w-full before:bg-green-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-green-600 transition-all duration-300 before:left-0 cursor-pointer capitalize">
            <NavLink to="/my-tips">My Tips</NavLink>
          </li>
        </ul>

        {/* action buttons */}
        <div className="items-center gap-[10px] flex">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <FiSun className="w-5 h-5 text-yellow-400" />
            ) : (
              <FiMoon className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {user ? (
            <div className="flex items-center gap-[10px] z-40">
              <img
                src={user?.photoURL}
                alt="user"
                className="w-[30px] h-[30px] rounded-full cursor-pointer"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={`${user.displayName}`} />
              <Tooltip id="my-tooltip" />
              <button onClick={handleLogout}
                className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-green-600 text-white hover:bg-green-700 transition-all duration-300 sm:flex cursor-pointer hidden">Logout</button>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-green-600 text-white hover:bg-green-700 transition-all duration-300 sm:flex cursor-pointer hidden">Sign
              in
            </Link>
          )}

          <CiMenuFries
            className="text-[1.8rem] mr-1 text-[#424242] dark:text-gray-200 cursor-pointer lg:hidden flex"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
        </div>

        {/* mobile sidebar */}
        <aside
          className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[-200px] opacity-0 z-[-1]"} lg:hidden bg-white dark:bg-gray-800 p-4 text-center absolute top-[100px] right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}>
          <div className="relative mb-5">
            <input
              className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white outline-none focus:border-green-600"
              placeholder="Search..." />
            <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 dark:text-gray-400 text-[1.3rem]" />
          </div>
          <ul className="items-center gap-[20px] text-[1rem] text-gray-600 dark:text-gray-200 flex flex-col">

            <li className="before:w-0 hover:before:w-full before:bg-green-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-green-600 transition-all duration-300 before:left-0 cursor-pointer capitalize">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="before:w-0 hover:before:w-full before:bg-green-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-green-600 transition-all duration-300 before:left-0 cursor-pointer capitalize">
              <NavLink to="/explore-gardeners">Explore Gardeners</NavLink>
            </li>

            <li className="before:w-0 hover:before:w-full before:bg-green-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-green-600 transition-all duration-300 before:left-0 cursor-pointer capitalize">
              <NavLink to="/browse-tips">Browse Tips</NavLink>
            </li>

            <li className="before:w-0 hover:before:w-full before:bg-green-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-green-600 transition-all duration-300 before:left-0 cursor-pointer capitalize">
              <NavLink to="/share-garden-tip">Share a Garden Tip</NavLink>
            </li>

            <li className="before:w-0 hover:before:w-full before:bg-green-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-green-600 transition-all duration-300 before:left-0 cursor-pointer capitalize">
              <NavLink to="/my-tips">My Tips</NavLink>
            </li>

          </ul>
        </aside>
      </nav>
    </header>
  )
}

export default Header
