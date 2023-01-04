import { useTranslation } from 'react-i18next';

const DictionaryWeather = () => {
  const [t, i18n] = useTranslation("global");
  
  const mainTitle = {
    Thunderstorm: t("card.ThunderstormDic"),
    Drizzle: t("card.DrizzleDic"),
    Rain: t("card.RainDic"),
    Snow: t("card.SnowDic"),
    Mist: t("card.MistDic"),
    Smoke: t("card.SmokeDic"),
    Haze: t("card.HazeDic"),
    Dust: t("card.DustDic"),
    Fog: t("card.FogDic"),
    Sand: t("card.SandDic"),
    Ash: t("card.AshDic"),
    Squall: t("card.SquallDic"),
    Tornado: t("card.TornadoDic"),
    Clear: t("card.ClearDic"),
    Clouds: t("card.CloudsDic"),
  };

  const DicWeather = {
    "thunderstorm with light rain": t("card.Thunderstorm1"),
    "thunderstorm with rain": t("card.Thunderstorm2"),
    "thunderstorm with heavy rain": t("card.Thunderstorm3"),
    "light thunderstorm": t("card.Thunderstorm4"),
    thunderstorm: t("card.Thunderstorm5"),
    "heavy thunderstorm": t("card.Thunderstorm6"),
    "ragged thunderstorm": t("card.Thunderstorm7"),
    "thunderstorm with light drizzle": t("card.Thunderstorm8"),
    "thunderstorm with drizzle": t("card.Thunderstorm9"),
    "thunderstorm with heavy drizzle": t("card.Thunderstorm10"),

    "light intensity drizzle": t("card.Drizzle1"),
    drizzle: t("card.Drizzle2"),
    "heavy intensity drizzle": t("card.Drizzle3"),
    "light intensity drizzle rain": t("card.Drizzle4"),
    "drizzle rain": t("card.Drizzle5"),
    "heavy intensity drizzle rain": t("card.Drizzle6"),
    "shower rain and drizzle": t("card.Drizzle7"),
    "heavy shower rain and drizzle": t("card.Drizzle8"),
    "shower drizzle": t("card.Drizzle9"),

    "light rain": t("card.Rain1"),
    "moderate rain": t("card.Rain2"),
    "heavy intensity rain": t("card.Rain3"),
    "very heavy rain": t("card.Rain4"),
    "extreme rain": t("card.Rain5"),
    "freezing rain": t("card.Rain6"),
    "light intensity shower rain": t("card.Rain7"),
    "shower rain": t("card.Rain8"),
    "heavy intensity shower rain": t("card.Rain9"),
    "ragged shower rain": t("card.Rain10"),

    "light snow": t("card.Snow1"),
    Snow: t("card.Snow2"),
    "Heavy snow": t("card.Snow3"),
    Sleet: t("card.Snow4"),
    "Light shower sleet": t("card.Snow5"),
    "Shower sleet": t("card.Snow6"),
    "Light rain and snow": t("card.Snow7"),
    "Rain and snow": t("card.Snow8"),
    "Light shower snow": t("card.Snow9"),
    "Shower snow": t("card.Snow10"),
    "Heavy shower snow": t("card.Snow11"),

    mist: t("card.Atmosphere1"),
    Smoke: t("card.Atmosphere2"),
    Haze: t("card.Atmosphere3"),
    sand: t("card.Atmosphere4"),
    fog: t("card.Atmosphere5"),
    sand: t("card.Atmosphere6"),
    dust: t("card.Atmosphere7"),
    "volcanic ash": t("card.Atmosphere8"),
    squalls: t("card.Atmosphere9"),
    Tornado: t("card.Atmosphere10"),

    "clear sky": t("card.Clouds1"),
    "few clouds": t("card.Clouds2"),
    "scattered clouds": t("card.Clouds3"),
    "broken clouds": t("card.Clouds4"),
    "overcast clouds": t("card.Clouds5"),
  };

  return {
    DicWeather, 
    mainTitle
  };
};

export default DictionaryWeather;
