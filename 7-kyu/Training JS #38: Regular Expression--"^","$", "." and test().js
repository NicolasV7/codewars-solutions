function findSimilarity(str, word) {
  const regStr = `${word[0]}${word.slice(1, -1).replace(/./g, ".")}${word.slice(-1)}`;
  const regExp = new RegExp(`^${regStr}$`);
  return str.split(' ').filter((v) => regExp.test(v)).join(' ');
}

