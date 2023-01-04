import React from "react";

const CountrySelect = ({ cityModel, handleChangeCity }) => {
  return (
    <div className="container mx-auto mx-8 mt-8 pt-[120px]  flex justify-center absolute">
      <div className="relative my-2 ">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {cityModel.map(({ name }) => (
            <button
              type="button"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white bg-teal-700 hover:bg-teal-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
              key={name}
              onClick={() => handleChangeCity(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountrySelect;
