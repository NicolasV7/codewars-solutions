function topSecret(str) {
  return str
    .split('')
    .map(char => {
      if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
        let shift = char.charCodeAt(0) - 3;
        if ((char >= 'a' && char <= 'z' && shift < 'a'.charCodeAt(0)) || (char >= 'A' && char <= 'Z' && shift < 'A'.charCodeAt(0))) {
          shift += 26;
        }
        return String.fromCharCode(shift);
      }
      return char;
    })
    .join('');
}
answer1 = "2334";
answer2 = "CfApNJ";
answer3 = "Banana peel";
