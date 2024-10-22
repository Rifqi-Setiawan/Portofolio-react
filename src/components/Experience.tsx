import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {EXPERIENCES.map((data, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">{data.year}</div>
            <div className="w-full max-w-xl lg:3/4">
              <h6 className="mb-2 font-semibold">
                {data.role} -{" "}
                <span className="text-sm text-purple-100">{data.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{data.description}</p>
              {data.teknologi.map((data, index) => (
                <span className="mr-3 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800" key={index}>
                  {data}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
