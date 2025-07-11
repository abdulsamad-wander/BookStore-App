import { ReactTyped } from "react-typed";
import React from "react";
import { NavLink } from "react-router-dom";
import img from "../assets/img.png";
import AboutPage from "./About";

const Home = () => {
  return (
    <>
      <div className="container max-w-screen-2xl mx-auto px-0 md:px-26 flex flex-col md:flex-row mb-3">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h1 className="text-3xl mt-5 md:mt-32 font-semibold">
            {" "}
            Hello, Welcome Here to{" "}
            <span className="hidden md:inline text-pink-500">
              <ReactTyped
                strings={["learn", "build", "grow"]}
                typeSpeed={60}
                backSpeed={60}
                loop
              />
            </span>
            <span className="inline md:hidden text-pink-500">learn</span>
            <br className="hidden md:block" /> something new Everyday <span className="text-pink-500">!!!</span>
          </h1>
          <p className="mt-5">
            Reading good books enriches the mind, broadening your knowledge and
            perspectives. They offer insights into Fresh{" "}
            <br className="hidden md:block" /> cultures, ideas, and experiences,
            fostering empathy and understanding. A good Book can transport you
            to other <br className="hidden md:block" />
            worlds, provide comfort, and inspire personal growth. The{" "}
            <br className="hidden md:block" /> habit of reading cultivates
            critical thinking and creativity,
            <br className="hidden md:block" /> making it an invaluable pursuit
            for lifelong learning.
          </p>
          <NavLink to={"/contact"}>
            <button
              type="button"
              className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Contact us
            </button>
          </NavLink>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 mt-6">
          <img src={img} alt="img" />
        </div>
      </div>
      <hr />
        <AboutPage/>
    </>
  );
};

export default Home;
