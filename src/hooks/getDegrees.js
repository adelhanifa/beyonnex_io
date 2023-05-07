export const calculateDegree = (min, max, target) => {
  // To get the degree for each temperature:
  // 1. calculate the difference between the min temperature and max temperature.
  //    (range length)
  // 2. calculate the difference between the target temperature and min temperature.
  //    (to know where is the target temperature from the beginning of the range)
  // 3. 270 degrees is the whole thermometer range.
  //    (because of removing the bottom part 90 degrees)
  // 4. -45 degrees to start from the min temperature.
  //    (the min line is located on the -45 degree of the circle)

  const degrees = ((target - min) / (max - min)) * 270 - 45;

  return +degrees.toFixed(2);
};
