import React from "react";
import HeroImage from "../assets/cv-bild2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      name="home"
      className="md:h-auto w-full bg-gradient-to-b from-black to-slate-400 "
    >
      <div className="max-w-screen-lg gap-2 md:gap-0 mx-auto flex flex-col items-center  sm:h-auto md:h-screen px-4 md:flex-row pt-32">
        <div className="flex flex-col  ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-white py-4 max-w-md">
            I create websites that are visually appealing, user-friendly, and
            aligned with modern web standards. Proficient in JavaScript, React,
            and API integration, I focus on delivering effective solutions while
            continuously enhancing my skills.
          </p>

          <div>
            <Link
              to="/portfolio"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-black to-slate-600 cursor-pointer"
            >
              Portfolio
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto  md:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
