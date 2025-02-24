import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import En from "../../assets/en-lang.png";
import Rus from "../../assets/rus-lang.png";
import Logo from "../../assets/logo.png";
import { RiSearch2Line } from "react-icons/ri";
import { TfiMenu } from "react-icons/tfi";
import { CgCloseO } from "react-icons/cg";

function Header() {
  const [selectedLang, setSelectedLang] = useState("en");

  const [menu, setMenu] = useState(false);
  const headermenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="headerbg">
      <div className="headerbgtop">
        <div className="max-w-[1240px] h-[100px] mx-auto px-5 flex items-center justify-between relative">
          {/* Logo */}
          <div className="w-[120px] max-[400px]:w-[90px] ">
            <img src={Logo} alt="Logo" className="w-full h-full" />
          </div>
          {/* Search */}
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-2 p-[2px]">
              <button
                className={`cursor-pointer rounded-[14px] ${
                  selectedLang === "en" ? "w-[25px]" : "w-[13px]"
                }`}
                onClick={() => setSelectedLang("en")}
              >
                <img src={En} alt="en" className="w-full h-full" />
              </button>
              <button
                className={`cursor-pointer rounded-[14px] ${
                  selectedLang === "ru" ? "w-[25px]" : "w-[13px]"
                }`}
                onClick={() => setSelectedLang("ru")}
              >
                <img src={Rus} alt="rus" className="w-full h-full" />
              </button>
            </div>
            <form
              action=""
              className="formbg w-[200px] h-[37px] ml-2 px-2  rounded-full flex items-center gap-1 max-[500px]:w-[40px]"
            >
              <p className="">
                <RiSearch2Line className="text-2xl text-white font-bold z-10" />
              </p>
              <input
                type="text"
                className="placeholder-gray-500 outline-none text-white w-[150px] max-[1100px]:hidden"
                placeholder="Search..."
              />
            </form>
          </div>
          {/* Navbar */}
          <nav className="flex flex-col items-end gap-5 max-[1100px]:hidden">
            <ul className="flex items-center gap-5">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `relative text-lg fond-normal pb-1 transition-all duration-300 
                      after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                      after:w-0 after:h-[1px] after:bg-red-500 after:rounded-full 
                      after:transition-all after:duration-500 hover:after:w-full hover:after:left-0 
                      ${isActive ? "active" : "text-gray-100 hover:text-white"}`
                  }
                >
                  CARS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/brands"
                  className={({ isActive }) =>
                    `relative text-lg fond-normal pb-1 transition-all duration-300 
                        after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                        after:w-0 after:h-[1px] after:bg-red-500 after:rounded-full 
                        after:transition-all after:duration-500 hover:after:w-full hover:after:left-0 
                        ${
                          isActive ? "active" : "text-gray-100 hover:text-white"
                        }`
                  }
                >
                  BRAND
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="services"
                  className={({ isActive }) =>
                    `relative text-lg fond-normal pb-1 transition-all duration-300 
                      after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                      after:w-0 after:h-[1px] after:bg-red-500 after:rounded-full 
                      after:transition-all after:duration-500 hover:after:w-full hover:after:left-0 
                      ${isActive ? "active" : "text-gray-100 hover:text-white"}`
                  }
                >
                  SERVISE
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `relative text-lg fond-normal pb-1 transition-all duration-300 
                      after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                      after:w-0 after:h-[1px] after:bg-red-500 after:rounded-full 
                      after:transition-all after:duration-500 hover:after:w-full hover:after:left-0 
                      ${isActive ? "active" : "text-gray-100 hover:text-white"}`
                  }
                >
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `relative text-lg fond-normal pb-1 transition-all duration-300 
                      after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                      after:w-0 after:h-[1px] after:bg-red-500 after:rounded-full 
                      after:transition-all after:duration-500 hover:after:w-full hover:after:left-0 
                      ${isActive ? "active" : "text-gray-100 hover:text-white"}`
                  }
                >
                  CONTACTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `relative text-lg fond-normal pb-1 transition-all duration-300 
                      after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                      after:w-0 after:h-[1px] after:bg-red-500 after:rounded-full 
                      after:transition-all after:duration-500 hover:after:w-full hover:after:left-0 
                      ${isActive ? "active" : "text-gray-100 hover:text-white"}`
                  }
                >
                  BLOG
                </NavLink>
              </li>
            </ul>
            <div>
              <a
                href="tell:+998941445597"
                className="text-white text-md font-normal cursor"
              >
                +998(93)755-04-12
              </a>
            </div>
          </nav>
          {/* menu button  */}
          <div className="w-[27px] h-[27px] min-[1100px]:hidden ">
            <button onClick={headermenu}>
              <TfiMenu className="text-red-500 text-2xl" />
            </button>
          </div>
        </div>
        {/* menu navbar  */}
        {menu ? (
          <div className="h-full absolute top-0 right-0 z-100 w-[300px] flex items-start p-5 bg-[#000000]">
            <nav className=" w-full h-full flex flex-col items-start gap-5  rounded-2xl ">
              <ul className=" flex flex-col items-start gap-5">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `relative text-lg fond-normal pb-1 transition-all duration-300 
                              after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                              after:w-0 after:h-[1px] after:bg-red-500 after:rounded-full 
                              after:transition-all after:duration-500 hover:after:w-full hover:after:left-0 
                              ${
                                isActive
                                  ? "active"
                                  : "text-gray-100 hover:text-white"
                              }`
                    }
                  >
                    CARS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/brands"
                    className={({ isActive }) =>
                      `relative text-lg fond-normal pb-1 transition-all duration-300

                              after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                              after:w-0 after:h-[1px] after:bg-red-500 after:rounded-full 
                              after:transition-all after:duration-500 hover:after:w-full hover:after:left-0 
                              ${
                                isActive
                                  ? "active"
                                  : "text-gray-100 hover:text-white"
                              }`
                    }
                  >
                    BRAND
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `relative text-lg fond-normal pb-1 transition-all duration-300 
                            after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                            after:w-0 after:h-[1px] after:bg-red-500 after:rounded-full 
                            after:transition-all after:duration-500 hover:after:w-full hover:after:left-0 
                            ${
                              isActive
                                ? "active"
                                : "text-gray-100 hover:text-white"
                            }`
                    }
                  >
                    SERVISE
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `relative text-lg fond-normal pb-1 transition-all duration-300 
                            after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                            after:w-0 after:h-[1px] after:bg-red-500 after:rounded-full 
                            after:transition-all after:duration-500 hover:after:w-full hover:after:left-0 
                            ${
                              isActive
                                ? "active"
                                : "text-gray-100 hover:text-white"
                            }`
                    }
                  >
                    ABOUT US
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `relative text-lg fond-normal pb-1 transition-all duration-300 
                            after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                            after:w-0 after:h-[1px] after:bg-red-500 after:rounded-full 
                            after:transition-all after:duration-500 hover:after:w-full hover:after:left-0 
                            ${
                              isActive
                                ? "active"
                                : "text-gray-100 hover:text-white"
                            }`
                    }
                  >
                    CONTACTS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      `relative text-lg fond-normal pb-1 transition-all duration-300 
                            after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                            after:w-0 after:h-[1px] after:bg-red-500 after:rounded-full 
                            after:transition-all after:duration-500 hover:after:w-full hover:after:left-0 
                            ${
                              isActive
                                ? "active"
                                : "text-gray-100 hover:text-white"
                            }`
                    }
                  >
                    BLOG
                  </NavLink>
                </li>
              </ul>
              <div>
                <a
                  href="tell:+998941445597"
                  className="text-white text-md font-normal cursor"
                >
                  +998(93)755-04-12
                </a>
              </div>
            </nav>
            <button onClick={() => headermenu(false)}>
              <CgCloseO className="text-2xl text-red-500" />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Header;
