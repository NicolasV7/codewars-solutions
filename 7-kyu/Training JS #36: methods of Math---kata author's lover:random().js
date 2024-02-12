function rndCode() {
  const randomChar = (dict) => dict[~~(dict.length * Math.random())];
  
  const dict1 = "ABCDEFGHIJKLM";
  const dict2 = "0123456789";
  const dict3 = "~!@#$%^&*";
  
  let str = '';

  for (let i = 1; i <= 8; i++) {
    if (i === 1 || i === 2) {
      str += randomChar(dict1);
    } else if (i > 2 && i < 7) {
      str += randomChar(dict2);
    } else {
      str += randomChar(dict3);
    }
  }

  return str;
}

