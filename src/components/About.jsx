import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-black to-slate-400 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full pt-32">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Patric Angly and I'm 29 years old. I live in Helsingborg
          and I am junior frontend developer.
        </p>
        <br />
        <p className="text-xl">
          I have a passion for technology and problem-solving and found my
          interest in programming a few years ago when I started building simple
          websites.
        </p>

        <br />

        <p className="text-xl">
          I decided to focus on frontend development and learned about HTML,
          CSS, and JavaScript. I became fascinated with the opportunity to
          improve the user experience and make websites more intuitive and
          accessible for everyone.
        </p>

        <br />

        <p className="text-xl">
          I am passionate about building websites and highly value the
          opportunity to always keep learning and growing in my career. I look
          forward to all the new challenges and opportunities that await me as a
          frontend developer.
        </p>
      </div>
    </div>
  );
};

export default About;
