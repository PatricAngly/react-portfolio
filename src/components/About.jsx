import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-black to-slate-400 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-24">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I have always had a passion for technology and problem-solving. I
          found my love for programming a few years ago and started
          experimenting with building simple websites. I became fascinated with
          the ability to create something from scratch and see it come to life
          on the screen.
        </p>

        <br />

        <p className="text-xl">
          The more I learned about web development, the more I realized the
          importance of creating user-friendly and accessible websites. I began
          to focus on front-end development and learned about HTML, CSS, and
          JavaScript. The more I worked with it, the more I became fascinated
          with the opportunity to improve the user experience and make websites
          more intuitive and accessible for everyone.
        </p>

        <br />

        <p className="text-xl">
          I love the challenge of building websites that are fast, easy to use,
          and look great. I also love the opportunity to always keep learning
          and growing in my career. I believe in always striving to be better,
          and I look forward to all the new challenges and opportunities that
          will come my way as a front-end developer.
        </p>
      </div>
    </div>
  );
};

export default About;
