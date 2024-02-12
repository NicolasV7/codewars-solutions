function bigToSmall(arr) {
  const flatArray = arr.flat();
  const sortedArray = flatArray.sort((a, b) => b - a);
  const resultString = sortedArray.join('>');

  return resultString;
}


