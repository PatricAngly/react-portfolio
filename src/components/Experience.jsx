import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import Angular from "../assets/Angular.png";
import mysql from "../assets/mysqlworkbench.png";
import csharp from "../assets/C_sharp.svg.png";
import netcore from "../assets/NET_Core_Logo.svg.png";
import azure from "../assets/azure1.svg.png";
import node from "../assets/Node.js_logo.svg.png";
import ts from "../assets/Typescript_logo_2020.svg.png";
import restapi from "../assets/rest-api.png";
import GraphQL from "../assets/GraphQL.svg.png";
import Strapi from "../assets/strapi.png";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: Angular,
      title: "Angular",
      style: "shadow-red-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: mysql,
      title: "MySql",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: csharp,
      title: "C#",
      style: "shadow-purple-400",
    },
    {
      id: 11,
      src: azure,
      title: "Azure",
      style: "shadow-blue-400",
    },
    {
      id: 12,
      src: netcore,
      title: ".Net Core",
      style: "shadow-purple-400",
    },
    {
      id: 13,
      src: node,
      title: "Node.js",
      style: "shadow-green-400",
    },
    {
      id: 14,
      src: ts,
      title: "TypeScript",
      style: "shadow-blue-400",
    },
    {
      id: 15,
      src: restapi,
      title: "REST Api",
      style: "shadow-blue-400",
    },
    {
      id: 16,
      src: GraphQL,
      title: "GraphQL",
      style: "shadow-purple-400",
    },
    {
      id: 17,
      src: Strapi,
      title: "Strapi",
      style: "shadow-purple-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-slate-400 w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col  w-full h-full text-white pt-32">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
