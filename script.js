const sumArrIElements = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(sumArrIElements([12, 33, 44, 55, 33, 443, 44])); // 664
console.log(sumArrIElements([1, 2, 3, 4, 5])); // 15
