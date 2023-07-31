import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import HeroImg from "../../assets/logo.webp";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
    const [nav, setNav] = useState(false);
    const hover = "hover:text-subMain transitions text-white";
    const Hover = ({isActive}) => (isActive ? 'text-subMain' : hover);
    const handleNav = () => {
      setNav(!nav);
    };
    const navigate = useNavigate ();
    return (
      <div className="w-full h-[90px] bg-purple-500 bg-opacity-80">
        <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
          <Link to="/">
            <img src={HeroImg} alt="logo" className="w-20" size="40" />
          </Link>
            <div>
              <div className="hidden md:flex">
                <ul className="flex text-white items-center">
                  <NavLink to="/movies" className={Hover}>
                    <li>Movie</li>
                  </NavLink>
                  <NavLink to="/about-us" className={Hover}>
                    <li>About Us</li>
                  </NavLink>
                  <NavLink to="/contact-us" className={Hover}>
                    <li>Contact Us</li>
                  </NavLink>
                  <NavLink to="/login">
                    <button>Sign In</button>
                  </NavLink>
                  <NavLink to="/signup">
                    <button>Sign Up</button>
                  </NavLink>
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
        </div>
      </div>
    );
  };

export default Header;
