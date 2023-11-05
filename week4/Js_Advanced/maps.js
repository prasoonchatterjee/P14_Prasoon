function calcWordFrequencies(sentence) {
  const splitWords = sentence.split(' ');

  const output = new Map();

  for (let i = 0; i < splitWords.length; i++) {
    if (output.has(splitWords[i])) {
      output.set(splitWords[i], output.get(splitWords[i]) + 1);
    } else {
      output.set(splitWords[i], 1);
    }
  }
  output.forEach((val, key) => console.log(key, val));
}

calcWordFrequencies('hey hi Mark hi mark');
