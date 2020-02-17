// Code your solution in this file.

function lowerCaseDrivers(array) {
  return array.map(function(name) {
    return name.toLowerCase();
  });
}

function nameToAttributes(array) {
  return array.map(function(driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}