import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { Link, NavLink } from "react-router";



const Header = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <header className="p-3">
      <nav
        className="flex items-center justify-between w-full md:container mx-auto relative bg-white rounded-full px-5 shadow">

        {/* logo */}
        <div>
          <img src="https://i.imgur.com/DGGbzmK.png" alt="logo" className="w-[70px] " />
        </div>

        {/* nav links */}
        <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">

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
            <NavLink to="/share-a-garden-tip">Share a Garden Tip</NavLink>
          </li>

          <li className="before:w-0 hover:before:w-full before:bg-green-600 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-green-600 transition-all duration-300 before:left-0 cursor-pointer capitalize">
            <NavLink to="/my-tips">My Tips</NavLink>
          </li>
        </ul>

        {/* action buttons */}
        <div className="items-center gap-[10px] flex">
          <Link
            to="/auth/login"
            className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-green-600 transition-all duration-300 sm:flex hidden">Sign
            in
          </Link>
          <Link
            to="/auth/signup"
            className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-green-600 text-white hover:bg-green-700 transition-all duration-300 sm:flex hidden">Sign
            up
          </Link>

          <CiMenuFries
            className="text-[1.8rem] mr-1 text-[#424242] cursor-pointer lg:hidden flex"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
        </div>

        {/* mobile sidebar */}
        <aside
          className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[-200px] opacity-0 z-[-1]"} lg:hidden bg-white p-4 text-center absolute top-[100px] right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}>
          <div className="relative mb-5">
            <input
              className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-green-600"
              placeholder="Search..." />
            <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]" />
          </div>
          <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">

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
              <NavLink to="/share-a-garden-tip">Share a Garden Tip</NavLink>
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
