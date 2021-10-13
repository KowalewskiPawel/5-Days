const filterDays = (forecast, dates) => {
  const tempDaysArray = [];
  for (let i = 0; i < 5; i++) {
    tempDaysArray.push(
      forecast.list.filter((item) => item.dt_txt.split(" ")[0] === dates[i])
    );
  }

  return tempDaysArray;
};

export default filterDays;
