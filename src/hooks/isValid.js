// to check the inputs: I allowed the Minimum temperature and Maximum temperature values to be between 0 and 1000.
// (as an example)

export const formValidation = (min, max, target) => {
  // 1- the Minimum temperature value can be started from 0 until the Maximum temperature value
  // 2- the Maximum temperature value can be started from the Minimum temperature value until 1000
  // 3- the Minimum temperature and Maximum temperature values can not be the same
  // 4- the Target temperature value should be only between the Minimum temperature and Maximum temperature values

  const valid = { min: true, max: true, target: true };
  if (min < 0 || min > 1000) {
    alert(`The minimum temperature should be between 0 and 1000.`);
    return { ...valid, min: false };
  }
  if (max > 1000 || max < min) {
    alert(`The maximum temperature should be between ${min} and 1000.`);
    return { ...valid, max: false };
  }
  if (max === min) {
    alert(`The minimum temperature can not be equal the maximum temperature.`);
    return { ...valid, min: false, max: false };
  }
  if (target < 0 || target > 1000 || target < min || target > max) {
    alert(`The Target temperature should be between ${min} and ${max}.`);
    return { ...valid, target: false };
  }
  return { ...valid };
};
