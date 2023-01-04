import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const SearchCity = ({ handleChangeCity }) => {
  const [t, i18n] = useTranslation("global");
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (city === "" || !city) return;
    handleChangeCity(city);
  };

  return (
    <>
      <div className="container mx-auto px-8 mt-8 absolute">
        <div className="relative my-2 ">
          <form onSubmit={onSubmit}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-slate-200 placeholder-gray-400 text-gray-900 focus:shadow focus:outline-none"
              placeholder={t("form.city")}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-teal-700  hover:bg-teal-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
            >
              {t("form.search")}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchCity;
