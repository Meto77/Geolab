// filter
const arr = [
  {
    name: "gurama",
    age: 13,
  },
  {
    name: "davita",
    age: 18,
  },
  {
    name: "niko",
    age: 19,
  },
  {
    name: "bora",
    age: 15,
  },
  {
    name: "guramiko",
    age: 33,
  },
  {
    name: "jeko",
    age: 55,
  },
];

const numberArr = [1, 3, 4, 5, 33, 55, 66];

const filteredArr = arr.filter((item) => item.age > 17);
const findItem = arr.find((item) => item.name === "jeko");
const averageAge = arr.reduce((initialNumber, item) => {
  return (initialNumber += item.age);
}, 0);
const isEveryAdult = arr.every((item) => item.age >= 18);
const index = numberArr.indexOf(55);
const sortedArr = numberArr.sort((a, b) => a - b);
const sortedArrObj = arr.sort((a, b) => b.age - a.age);
const firstElement = numberArr.shift();
const lastElement = numberArr.pop();

console.log("filteredArr", filteredArr);
console.log("findItem", findItem);
console.log("averageAge", averageAge);
console.log("isEveryAdult", isEveryAdult);
console.log("index", index);
console.log("sortedArr", sortedArr);
console.log("sortedArrObj", sortedArrObj);
console.log("firstElement", firstElement);
console.log("lastElement", lastElement);
