import DictionaryWeather from "../../../helpers/DictionaryWeather";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ForecastCard = ({ forecast, datetime }) => {
  const { DicWeather } = DictionaryWeather();

  return (
    <div className="max-w-2xl max-h-48 p-2 bg-sky-900 shadow-lg rounded-lg m-5  md:max-w-2xl">
      <Swiper
        slidesPerView={1}
        spaceBetween={2}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
        }}
        className="mySwiper"
      >
        {forecast.map((d, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-lg mx-2 bg-teal-700 shadow-lg rounded-lg m-5 flex justify-center items-center">
              <div className="m-2">
                <p className="text-white text-base font-semibold">
                  {datetime[index]?.datetime}
                </p>

                <p className="text-xs capitalize mt-2 pr-8 text-white font-medium md:shrink-0">
                  <img
                    src={`http://openweathermap.org/img/wn/${d?.weather[0].icon}@2x.png`}
                    alt="icon"
                    className="w-3/6 drop-shadow-md"
                  />
                  {DicWeather[d?.weather[0].description]}
                </p>

                <p className="text-2xl flex items-center text-amber-500 font-bold">
                  {(d?.main.temp - 273.15).toFixed(1)}ºC
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ForecastCard;
