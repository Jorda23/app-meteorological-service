import { useEffect, useCallback } from "react";
import SearchCity from "../SearchCity";
import Spinner from "../Spinner";
import { useTranslation } from "react-i18next";
import CountrySelect from "../CountrySelect";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../redux/slices/thunks";
import ForecastCard from "./components/ForecastCard";
import { CityModel } from "../../models/CityModel";
import { DateModel } from "../../models/DateModel";
import DictionaryWeather from "../../helpers/DictionaryWeather";
import Header from "../Header";
import MainDescription from "./components/MainDescription";

export const Cards = () => {
  const [t, i18n] = useTranslation("global");

  const dispatch = useDispatch();
  const currentCity = useSelector((state) => state.city.current);
  const loading = useSelector((state) => state.city.isLoading);
  const forecast = useSelector((state) => state.city.forecasts);
  const { DicWeather } = DictionaryWeather();

  const handleChangeCity = useCallback(
    async (name) => {
      dispatch(getWeather(name));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getWeather());
  }, []);

  const { days } = DateModel(forecast);

  return (
    <>
      <div className="mt-6 ml-2 mr-2 drop-shadow-lg">
        <div className="max-w-lg mx-auto bg-emerald-50 rounded-xl shadow-md overflow-hidden md:max-w-5xl">
          <div className="md:flex">
            <div className="md:shrink-0 relative flex justify-center items-center">
              <Header />
              <p className="text-2xl font-medium text-slate-50 absolute mb-8 pb-8 drop-shadow-lg">
                {t("navbar.Meteorological-service")}
              </p>
              <CountrySelect
                cityModel={CityModel}
                handleChangeCity={handleChangeCity}
              />
              <SearchCity handleChangeCity={handleChangeCity} />
              <img
                className="w-full object-cover md:h-full md:w-50"
                src="https://images.unsplash.com/photo-1531951286638-d1b6cdae30c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                alt="Modern building architecture"
              />
            </div>

            {loading === true ? (
              <div className="m8 items-center pb-8 pt-8">
                <Spinner />
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-1 relative flex justify-center items-center">
                <MainDescription
                  forecast={forecast}
                  datetime={days}
                  currentCity={currentCity}
                  DicWeather={DicWeather}
                />

                <div className="pl-6">
                  <p className="text-gray-600 text-2xl font-semibold">
                    {t("navbar.coming")}
                  </p>
                </div>
                <ForecastCard forecast={forecast} datetime={days} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
