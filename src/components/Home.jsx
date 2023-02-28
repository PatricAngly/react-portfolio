import React from "react";
import HeroImage from "../assets/cv-bild2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      name="home"
      className="md:h-auto w-full bg-gradient-to-b from-black to-slate-400 "
    >
      <div className="max-w-screen-lg gap-10 md:gap-0 mx-auto flex flex-col items-center h-screen sm:h-auto md:h-screen justify-center px-4 md:flex-row pt-24">
        <div className="flex flex-col justify-center mt-20 md:mt-0">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-end Developer
          </h2>
          <p className="text-white py-4 max-w-md">
            I am a dedicated Front-end Developer student, passionate about
            creating and developing modern and user-friendly websites. With a
            strong foundation in HTML, CSS, JavaScript, React, and Angular, I am
            constantly striving to enhance my skills and take them to the next
            level.
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
            className="rounded-2xl mx-auto w-2/5 md:w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
