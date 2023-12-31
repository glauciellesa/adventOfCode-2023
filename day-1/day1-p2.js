import { readFileSync } from "fs";
const str = readFileSync(new URL("./day1.txt", import.meta.url), { encoding: "utf8" });
console.log(str);

const partOne = (str) => {
  const arrayOfValues = str.trim().split('\n')

  const values = arrayOfValues.map((str) => {
    console.log(str);
    let firstDigit = str.split('').find(digit => !Number.isNaN(Number(digit)))
    console.log(firstDigit)
    let lastDigit = str.split('').findLast(digit => !Number.isNaN(Number(digit)))
    return Number(firstDigit + lastDigit)
  })

  const sum = values.reduce((accumulator, currentValue) => accumulator + currentValue);

  return sum
}

console.log(partOne(str));