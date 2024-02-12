function colorOf(r, g, b) {
  const redHex = r.toString(16).padStart(2, '0');
  const greenHex = g.toString(16).padStart(2, '0');
  const blueHex = b.toString(16).padStart(2, '0');

  const colorCode = `#${redHex}${greenHex}${blueHex}`;

  return colorCode;
}

