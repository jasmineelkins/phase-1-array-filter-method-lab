// Code your solution here
// We have an array of drivers with various information. We need to write functions
// using the `filter()` method so that PickMeUp Taxi service employees can easily
// query the data. Run the tests to see what conditions need to be met by each
// function _before_ you start writing JavaScript code.

// You'll be writing three functions:

// * `findMatching`- This function takes an array of drivers' names and a `string`
//   as arguments, and returns the matching list of drivers. The function should be
//   case insensitive.

function findMatching(driverList, name) {
  return driverList.filter(function (item) {
    if (name.toLowerCase() === item.toLowerCase()) {
      return item;
    }
  });

  // another way to do this:
  // return driverList.filter(function (item) {
  //   return item.toLowerCase().indexOf(name.toLowerCase()) !== -1;
  // });
}

// * `fuzzyMatch` - This function takes an array of drivers' names and a `string`
//   as arguments for querying the array, and returns all drivers whose names begin
//   with the provided letters.

function fuzzyMatch(driverList, str) {
  return driverList.filter((driverList) => driverList.startsWith(str));
}

// * `matchName` - This function takes an array of `driver` objects and a `string`
//   as arguments. Each `driver` object has two properties: `name` and `hometown`.
//   The function should return each element whose `name` property matches the
//   provided `string` argument.

function matchName(driverList, str) {
  return driverList.filter(function (item) {
    if (str.toLowerCase() === item.name.toLowerCase()) {
      return item;
    }
  });
}
