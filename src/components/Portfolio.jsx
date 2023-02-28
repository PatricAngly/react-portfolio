import React from "react";
import wackamole from "../assets/Portfolio/wackamole.png";
import weatherApi from "../assets/Portfolio/weatherApi.png";
import minesweeper from "../assets/Portfolio/minesweeper.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: wackamole,
      ref: "https://github.com/PatricAngly/WhackAMoleGame",
      name: "Wack a mole Game Angular",
    },
    {
      id: 2,
      src: weatherApi,
      ref: "https://github.com/PatricAngly/GasCloud-Nordic-API",
      name: "Current weather API Vanilla JS",
    },
    {
      id: 3,
      src: minesweeper,
      ref: "https://github.com/PatricAngly/minesweeper",
      name: "Minesweeper Game React",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b  from-black to-slate-400 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full pt-32">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, ref, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex flex-col items-center justify-center">
                <h3 className="block mt-2 capitalize">{name} </h3>
                <a
                  href={ref}
                  className=" duration-200 hover:scale-105 hover:text-black cursor-pointer"
                >
                  See code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
