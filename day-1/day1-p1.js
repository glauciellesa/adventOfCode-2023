const fs = require('node:fs');
const str = fs.readFileSync('./logicPlinio1.txt', 'utf8');

//const str = 'two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen';

const strToArray = (str) => {
  return str.split("\n")
}

const elementReplace = (str) => {
  if (!str) return;

  const words = strToArray(str);
  console.log(words);
  const keys = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const refNum = { one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9" };

  let newStr = [];
  words.forEach(word => {
    let chars = word.split("");
    let wordArray = [];

    for (let i = 0; i < chars.length; i++) {
      for (const key of keys) {
        const keyLength = key.length;
        const substring = chars.slice(i, i + keyLength).join('');

        if (substring === key) {
          wordArray.push(refNum[key]);
          i += keyLength - 1; // Move the index to the end of the matched substring
          break;
        }
      }

      // If no match is found, push the original character to the wordArray
      if (i === chars.length - 1 || wordArray.length === 0 || chars[i] !== chars[i - 1]) {
        wordArray.push(chars[i]);
      }
    }

    newStr.push(wordArray.join(""));
  });

  return newStr
};

const extractNumb = (words) => {
  if (!words) {
    return
  }
  /*const words = strToArray(str)*/

  let resul = 0

  for (const word of words) {
    const numReg = /\d/g
    const numb = word.match(numReg)
    if (!numb) {
      continue
    }

    let firstNum = numb[0]
    let lastNum = numb[numb.length - 1]

    if (firstNum != null && lastNum != null) {
      const num = firstNum + lastNum
      resul += +num
    }
  }

  return resul
}


const newStr = elementReplace(str)
console.log(newStr);
console.log(extractNumb(newStr));