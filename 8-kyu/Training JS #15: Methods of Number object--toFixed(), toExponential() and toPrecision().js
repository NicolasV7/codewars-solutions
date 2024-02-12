function howManySmaller(arr, n) {
  const roundedArr = arr.map(num => Number(num.toFixed(2)));

  const count = roundedArr.filter(num => num < n).length;

  return count;
}

