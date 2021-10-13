const calculateAvgTempAndClouds = (days) => {
  return days.map((item) => {
    const tempAvg = item
      .map((array) => array.main.temp)
      .reduce((prev, curr) => prev + curr);
    const cloudsAvg = item
      .map((array) => array.clouds.all)
      .reduce((prev, curr) => prev + curr);
    const tempObject = {
      averageTemp: Math.trunc(tempAvg / item.length),
      averageClouds: Math.trunc(cloudsAvg / item.length),
    };
    return tempObject;
  });
};

export default calculateAvgTempAndClouds;
