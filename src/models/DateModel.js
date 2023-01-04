import { format } from "date-fns";

export const DateModel = (forecast) => {
  const days = forecast.map((day) => {
    const formattedDate = format(new Date(day.dt * 1000), "MM/dd/yyyy ha");

    return {
      datetime: formattedDate,
    };
  });

  return {
    days,
  };
};
