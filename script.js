const sumArrElements = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(sumArrElements([12, 33, 44, 55, 33, 443, 44])); // 664
console.log(sumArrElements([1, 2, 3, 4, 5])); // 15
