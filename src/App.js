import { useEffect, useState } from "react";

import StyledLogo from "./components/Logo/Logo";
import StyledInput from "./components/StyledInput/StyledInput";
import DateDisplay from "./components/DateDisplay/DateDisplay";
import CityName from "./components/CityName/CityName";
import Forecast from "./components/Forecast/Forecast";
import DaysSelection from "./components/DaysSelection/DaysSelection";

import "./styles/app.css";

const App = () => {
  const [cityName, setCityName] = useState("");
  const [forecast, setForecast] = useState(null);
  const [day, setDay] = useState(0);

  const dates = [];
  const days = [];

  if (forecast?.list) {
    for (let i = 0; i < forecast.list.length; i++) {
      if (dates.includes(forecast.list[i].dt_txt.split(" ")[0])) continue;
      dates.push(forecast.list[i].dt_txt.split(" ")[0]);
    }

    for (let i = 0; i < 5; i++) {
      days.push(
        forecast.list.filter((item) => item.dt_txt.split(" ")[0] === dates[i])
      );
    }
  }

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setForecast(data))
      .catch((err) => console.error(err));
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
