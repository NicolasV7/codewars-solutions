function sortIt(arr) {
  return arr.slice().sort((a, b) =>
    arr.filter(x => x === a).length - arr.filter(x => x === b).length || b - a
  );
}

