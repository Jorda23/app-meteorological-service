import { changeCity, startLoadingCities, notFoundCity } from "./citySlice";
import { weatherApi } from "../.././api/weatherApi";

export const getWeather = (value = "Managua") => {
  const REACT_KEY_API = '';

  return async (dispatch, getState) => {
    try {
      dispatch(startLoadingCities());

      const { data } = await weatherApi.get(
        `/forecast?appid=${REACT_KEY_API}&lang=en&q=${value}`
      );

      dispatch(
        changeCity({ forecasts: data.list, current: data.city, value: value })
      );
    } catch (error) {
      dispatch(notFoundCity());
    }
  };
};
