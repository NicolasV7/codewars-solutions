function maxMin(arr1, arr2) {
  const differences = arr2.map((v, i) => Math.abs(v - arr1[i]));
  return [Math.max(...differences), Math.min(...differences)];
}
