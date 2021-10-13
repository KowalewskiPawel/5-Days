import { useEffect, useState } from "react";

import filterDates from "./utils/filterDates";
import filterDays from "./utils/filterDays";

import StyledLogo from "./components/Logo";
import StyledInput from "./components/StyledInput";
import DateDisplay from "./components/DateDisplay";
import CityName from "./components/CityName";
import Forecast from "./components/Forecast";
import DaysSelection from "./components/DaysSelection";

import getForecast from "./services/getForecast";

import "./styles/app.css";

const App = () => {
  const [cityName, setCityName] = useState("");
  const [forecast, setForecast] = useState(null);
  const [day, setDay] = useState(0);

  let dates = [];
  let days = [];

  if (forecast?.list) {
    dates = filterDates(forecast);
    days = filterDays(forecast, dates);
  }

  useEffect(() => {
    const fetchForecast = async () => {
      const fetchedForecast = await getForecast(cityName);
      return setForecast(fetchedForecast);
    };

    fetchForecast();
  }, [cityName]);

  return (
    <main>
      <StyledLogo />
      <StyledInput setCityName={setCityName} />
      <DateDisplay />
      <CityName
        cityName={
          forecast?.city?.name || "Please input correct name of the city"
        }
      />
      <Forecast day={days[day]} />
      <DaysSelection dates={dates} days={days} setDay={setDay} />
    </main>
  );
};

export default App;
