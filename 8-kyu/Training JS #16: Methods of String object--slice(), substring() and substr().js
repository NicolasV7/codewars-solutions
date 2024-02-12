function cutIt(arr) {
  const minLength = arr.reduce((min, str) => Math.min(min, str.length), Infinity);

  const result = arr.map(str => str.slice(0, minLength));

  return result;
}

