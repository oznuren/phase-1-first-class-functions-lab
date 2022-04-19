// Code your solution in this file!
let drivers = [];
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (num) {
  return function (fare) {
    return num * fare;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func) {
  if (func == returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
  } else if (func == returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
  }
}
