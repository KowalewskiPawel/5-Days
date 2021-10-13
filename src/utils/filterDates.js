const filterDates = (forecast) => {
  const tempDatesArray = [];
  for (let i = 0; i < forecast.list.length; i++) {
    if (tempDatesArray.includes(forecast.list[i].dt_txt.split(" ")[0]))
      continue;
    tempDatesArray.push(forecast.list[i].dt_txt.split(" ")[0]);
  }

  return tempDatesArray;
};

export default filterDates;
