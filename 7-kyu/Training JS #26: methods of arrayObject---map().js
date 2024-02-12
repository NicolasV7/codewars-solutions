function isolateIt(arr) {
  return arr.map(str => {
    const middle = Math.floor(str.length / 2);
    return str.length % 2 === 0
      ? str.slice(0, middle) + '|' + str.slice(middle)
      : str.slice(0, middle) + '|' + str.slice(middle + 1);
  });
}
