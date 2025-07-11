import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../public/logo.png";

const Navbar = ({ search, setSearch }) => {
  const[theme,setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light");
  const [sticky, setSticky] = useState(false);
  const element = document.documentElement;

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  useEffect(() => {
    if(theme === "dark"){
      element.classList.add("dark");
      localStorage.getItem("theme", "dark");
      document.body.classList.add("dark");
    }else{
      element.classList.remove("dark");
      localStorage.getItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme])
  
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/books"}>Books</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl dark:bg-gray-900  dark:text-white z-50 container mx-auto px-0 md:px-24 fixed top-0 right-0 left-0 ${
        sticky ? "sticky-navbar shadow-2xl bg-blue-950 dark:bg-[#1e222a] duration-300 ease-in-out transition-all" : ""
      }`}
    >
      <div className="navbar shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {items}
            </ul>
          </div>
          <div>
            <NavLink to={'/'}>
              <div className="font-semibold cursor-pointer text-2xl justify-center items-center flex flex-row">
                <img src={logo} alt="logo" className="size-16" />
                BookStore
              </div>
            </NavLink>
          </div>
        </div>
        <div className="navbar-end space-x-2">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{items}</ul>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center w-full max-w-sm border border-gray-300 rounded-md px-4 py-2 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="search"
                value={search}
                onChange={handleChange}
                placeholder="Search"
                className="w-full bg-transparent focus:outline-none text-sm text-gray-900 placeholder-gray-400 dark:text-white dark:placeholder-gray-500"
              />
            </div>
          </div>
          
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="synthwave" />
            <svg
              className="swap-off h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={()=>setTheme(theme === "light"?"dark":"light")}
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-on h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={()=>setTheme(theme === "dark"?"light":"dark")}
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;