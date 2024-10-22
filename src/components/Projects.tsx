import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div className="">
        {PROJECTS.map((data, index) => (
          <div className="mb-11 flex flex-wrap lg:justify-center" key={index}>
            <div className="w-full lg:w-1/4 flex justify-center items-center mr-6 ">
              <img src={data.image} alt={data.title} className="rounded max-h-44 max-w-64" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{data.title}</h6>
              <p className="mb-4 text-neutral-400">{data.description}</p>
              {data.teknologi.map((teknologi, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {teknologi}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
