import { useTranslation } from "react-i18next";

const MainDescription = ({ forecast, datetime, currentCity, DicWeather }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="max-w-2xl p-8 bg-teal-700 shadow-lg rounded-lg m-5 grid grid-cols-2 gap-2 md:max-w-2x ">
      <div className="md:flex ">
        <div className="m-2 w-[300px] md:shrink-0 mr-8 md:h-full md:w-48">
          <p className="text-white text-3xl font-semibold">
            {" "}
            {currentCity.name}
          </p>
          <p className="text-base pt-1 text-white font-semibold">
            {datetime[0]?.datetime}
          </p>

          <p className="text-xl pr-8 pt-1 text-white font-medium capitalize">
            {DicWeather[forecast[0]?.weather[0].description]}
          </p>

          <div className="grid grid-cols-2 gap-2 w-40 md:max-w-2xl">
            <p className="text-xl mt-8 text-amber-500 font-extrabold">
              {(forecast[0]?.main.temp - 273.15).toFixed(1)}ºC
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast[0]?.weather[0].icon}@2x.png`}
              alt="icon"
              className="w-2/2 drop-shadow-md"
            />
          </div>
        </div>

        <div className="flex justify-center mt-8 w-[200px]">
          <ul className="border-l-2 pl-2 text-white text-xs w-48 h-32">
            <li className="mb-2 mt-5">
              {t("card.MaxTemp")}:{" "}
              {(forecast[0]?.main.temp_max - 273.15).toFixed(1)}ºC
            </li>
            <li className="mb-2">
              {t("card.Min-Temp")}:{" "}
              {(forecast[0]?.main.temp_min - 273.15).toFixed(1)}ºC
            </li>
            <li className="mb-2">
              {t("card.Humidity-Status")}: {forecast[0]?.main.humidity}%
            </li>
            <li className="mb-0">
              {t("card.Wind-Speed")}: {forecast[0]?.wind.speed}m/s
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainDescription;
