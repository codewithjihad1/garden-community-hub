
import React from "react";

// react icons
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { NavLink } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-white shadow-xl rounded-xl w-full md:container mx-auto p-6 md:p-9">
            <div className="flex flex-col items-center justify-center gap-[30px] flex-wrap w-full sm:px-32">
                <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
                    <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                        <NavLink to="/explore-gardeners">Explore Gardeners</NavLink>
                    </li>

                    <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                        <NavLink to="/browse-tips">Browse Tips</NavLink>
                    </li>

                    <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                        <NavLink to="/share-a-garden-tip">Share a Garden Tip</NavLink>
                    </li>

                    <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                        <NavLink to="/my-tips">My Tips</NavLink>
                    </li>
                </ul>

                <div className="flex items-center flex-wrap gap-[10px] text-[#424242]">
                    <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300">
                        <CgFacebook />
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300">
                        <BsTwitter />
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300">
                        <BsInstagram />
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300">
                        <BsLinkedin />
                    </a>
                </div>


                <div
                    className="md:flex-row border-t border-gray-200 pt-[20px] flex-col flex items-center gap-[15px] w-full justify-between mt-8">

                    <div
                        className="flex flex-wrap gap-y-[6px] gap-x-[15px] sm:gap-[15px] text-gray-400">
                        <span>
                            <a
                                className="text-[0.9rem] hover:text-blue-400 cursor-pointer">Privacy Policy</a>
                        </span>
                        <span><a
                            className="text-[0.9rem] hover:text-blue-400 cursor-pointer">Terms of Use</a>
                        </span>

                    </div>
                    <p className="text-gray-400 cursor-pointer text-[0.8rem]">© 2025 Gardening Community All Rights
                        Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
