function alienLanguage(str) {
  str = str.toUpperCase();

  var words = str.split(" ");

  for (var i = 0; i < words.length; i++) {
    var lastLetter = words[i].slice(-1).toLowerCase();
    words[i] = words[i].slice(0, -1) + lastLetter;
  }

  return words.join(" ");
}
