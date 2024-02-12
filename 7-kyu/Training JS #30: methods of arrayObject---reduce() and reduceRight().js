function tailAndHead(arr) {
  return arr.slice(0, -1).reduce((result, current, index) => {
    const tail = current % 10;
    const head = Number(String(arr[index + 1])[0]);
    return result * (tail + head);
  }, 1);
}
