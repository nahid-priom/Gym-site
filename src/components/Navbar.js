import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.png";

export const navLinks = [
  { id: "subscription", title: "Subscription Plan" },
  { id: "blog", title: "Blog" },
  { id: "testimonials", title: "Testimonials" },
  { id: "about", title: "About" },
];

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [navbarShadow, setNavbarShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarShadow(true);
      } else {
        setNavbarShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname.split("/")[1];
    const currentNav = navLinks.find((nav) => nav.id === currentPath);
    if (currentNav) {
      setActive(currentNav.title);
    } else {
      setActive("Home");
    }
  }, [location]);

  return (
    <section className="bg-transparent">
      <nav
        className={`fixed left-0 right-0 z-50 transition-shadow ${
          navbarShadow ? "bg-white shadow-lg top-0" : "bg-transparent top-2 lg:top-6"
        }`}
      >
        <div className="max-w-[1200px] px-4 lg:px-0 mx-auto flex py-3 justify-between items-center">
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="lg:w-[141px] lg:h-[44px] w-[130px] h-[38px]" />
          </Link>

          <div className="flex gap-[24px]">
            <ul className="list-none font-inter sm:flex hidden justify-center items-center">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-inter font-normal cursor-pointer text-[16px] relative ${
                    active === nav.title ? "text-red-500" : "text-black"
                  } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <Link className="text-lg" to={`/${nav.id}`}>
                    {nav.title}
                    {active === nav.title && (
                      <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-red-600"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/my-subscriptions"
              className="bg-[#606DE5] w-[150px] h-[35px] lg:w-[170px] lg:h-[43px] rounded-[24px] text-white flex items-center justify-center text-sm lg:text-base font-semibold hover:bg-black"
            >
              My Subscriptions
            </Link>
          </div>

          {/* Sidebar for mobile */}
          <div className="sm:hidden flex justify-end items-center">
            <FontAwesomeIcon
              icon={toggle ? faTimes : faBars}
              className="w-[28px] h-[28px] pr-4 text-black cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            />
            <div
              className={`fixed top-0 right-0 h-full w-[250px]  backdrop-blur-lg bg-white/70 rounded-bl-2xl  p-6 z-50 transition-transform duration-300 ${
                toggle ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="absolute top-6 right-6">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="w-[32px] h-[32px] text-black cursor-pointer"
                  onClick={() => setToggle(false)}
                />
              </div>
              <ul className="list-none flex flex-col justify-start items-start ml-4 h-auto space-y-6 mt-20">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins ter font-medium cursor-pointer text-[18px] relative ${
                      active === nav.title ? "text-red-500" : "text-black"
                    }`}
                    onClick={() => {
                      setActive(nav.title);
                      setToggle(false);
                    }}
                  >
                    <Link to={`/${nav.id}`} className="text-xl">
                      {nav.title}
                      {active === nav.title && (
                        <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-white"></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
