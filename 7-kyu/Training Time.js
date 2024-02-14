function shuffleIt(arr, ...swaps) {
  for (const [index1, index2] of swaps) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }
  return arr;
}

