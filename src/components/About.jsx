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
          My name is Patric Angly, I am 30 years old, and I live in Helsingborg.
          I graduated as a frontend developer in the summer of 2024 and I am
          currently still working at my previous job. In my free time I like to
          code and learn more about programming, but I also enjoy playing video
          games to relax. When I'm not in front of the computer I like to play
          padel or golf, which helps me keep a good balance between being active
          and working with technology.
        </p>
        <br />
        <p className="text-xl">
          My interest in web development started long before my education. I
          created and managed my own WordPress websites and built online stores
          using Shopify and Wix. Through these projects I learned the basics of
          designing and developing websites. During my studies I learned more
          about technologies like C#/.NET and React. One of my biggest projects
          was building a complete product management system. This included
          everything from designing the interface to working with API
          integrations, databases, and user management. It was a great learning
          experience that helped me understand how all parts of web development
          work together.
        </p>

        <br />

        <p className="text-xl">
          I am passionate about solving problems through creative and efficient
          solutions, especially when it comes to technical challenges in web
          development. Few things compare to the satisfaction of seeing a
          solution come together after hard work.
        </p>
      </div>
    </div>
  );
};

export default About;
