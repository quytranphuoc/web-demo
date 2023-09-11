import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import HeroImg from "../../assets/logo.webp";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { UserAuth } from "../../features/Auth/AuthContext";
const Header = () => {
  const { user, logOut } = UserAuth();
  const [nav, setNav] = useState(false);

  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);
  const handleNav = () => {
    setNav(!nav);
  };
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="sticky w-full h-[90px] bg-main">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <img src={HeroImg} alt="logo" className="w-20" size="50" />
        </Link>

       
        {/* Account */}
        {user?.email ? (
          <div>
            <div className="hidden w-full md:block md:w-auto ">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 b md:flex-row md:space-x-8 md:mt-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <NavLink to="/movies" className={Hover}>
                  <li>Movie</li>
                </NavLink>
                <NavLink to="/about-us" className={Hover}>
                  <li>About Us</li>
                </NavLink>
                <NavLink to="/contact-us" className={Hover}>
                  <li>Contact Us</li>
                </NavLink>
                <NavLink to="/account">
                  <div className="text-white text-center items-end hover:text-subMain hover:scale-110 ">
                    <BiSolidUserCircle
                      className="flex flex-wrap items-center justify-center w-full"
                      size={50}
                    />
                    {/* Account */}
                  </div>
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="text-white hover:shadow-md hover:scale-110"
                >
                  LogOut
                </button>
              </ul>
            </div>
            <div onClick={handleNav} className="block md:hidden">
              {nav ? (
                <AiOutlineClose size={30} className="text-white" />
              ) : (
                <AiOutlineMenu size={30} className="text-white" />
              )}
            </div>
            {/* {Mobile Menu} */}
            <div
              className={
                nav
                  ? "w-full bg-purple-500 bg-opacity-80 text-white absolute top-[90px] left-0 flex justify-center text-center"
                  : "absolute left-[-100%]"
              }
            >
              <ul>
                <li className="text-2xl">PLatform</li>
                <li className="text-2xl">Developers</li>
                <li className="text-2xl">Community</li>
                <li className="text-2xl">About</li>
                <NavLink to="/login">
                  <button>Sign In</button>
                </NavLink>
                <NavLink to="/signup">
                  <button>Sign Up</button>
                </NavLink>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <div className="hidden md:flex">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 b md:flex-row md:space-x-8 md:mt-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <NavLink to="/about-us" className={Hover}>
                  <li>About Us</li>
                </NavLink>
                <NavLink to="/contact-us" className={Hover}>
                  <li>Contact Us</li>
                </NavLink>
                <NavLink to="/login" className="text-white">
                  <button>Sign In</button>
                </NavLink>
                <NavLink to="/signup" className="text-white">
                  <button>Sign Up</button>
                </NavLink>
                {/* <NavLink to="/dashboard">
                  <button>Dashboard</button>
                </NavLink> */}
              </ul>
            </div>
            {/* {Hambuger menu} */}
            <div onClick={handleNav} className="block md:hidden">
              {nav ? (
                <AiOutlineClose size={30} className="text-white" />
              ) : (
                <AiOutlineMenu size={30} className="text-white" />
              )}
            </div>
            {/* {Mobile Menu} */}
            <div
              className={
                nav
                  ? "w-full bg-purple-500 bg-opacity-80 text-white absolute top-[90px] left-0 flex justify-center text-center"
                  : "absolute left-[-100%]"
              }
            >
              <ul>
                <li className="text-2xl">PLatform</li>
                <li className="text-2xl">Developers</li>
                <li className="text-2xl">Community</li>
                <li className="text-2xl">About</li>
                <NavLink to="/login">
                  <button>Sign In</button>
                </NavLink>
                <NavLink to="/signup">
                  <button>Sign Up</button>
                </NavLink>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
