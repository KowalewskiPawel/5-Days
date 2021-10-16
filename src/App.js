import { useState } from "react";

import filterDates from "./utils/filterDates";
import filterDays from "./utils/filterDays";

import useFetchForecast from "./hooks/useFetchForecast";

import StyledLogo from "./components/Logo";
import StyledInput from "./components/StyledInput";
import DateDisplay from "./components/DateDisplay";
import CityName from "./components/CityName";
import Forecast from "./components/Forecast";
import DaysSelection from "./components/DaysSelection";

import "./styles/app.css";

const App = () => {
  const [day, setDay] = useState(0);

  const [{ forecast, isLoading }, doFetch] = useFetchForecast("");

  let dates = [];
  let days = [];

  if (forecast?.list) {
    dates = filterDates(forecast);
    days = filterDays(forecast, dates);
  }

  return (
    <main>
      <StyledLogo />
      <StyledInput doFetch={doFetch} />
      <DateDisplay />
      <CityName
        cityName={
          isLoading ? "Loading" : forecast?.city?.name || forecast?.message
        }
      />
      <Forecast day={days[day]} />
      <DaysSelection dates={dates} days={days} setDay={setDay} />
    </main>
  );
};

export default App;
