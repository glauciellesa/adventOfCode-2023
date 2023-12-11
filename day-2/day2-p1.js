const fs = require('node:fs');
const str = fs.readFileSync('./day2.txt', 'utf8').toString();

//const str = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"

const strToArray = (str) => str.trim().split("\n")

const eachGame = (game) => game.split(":")

const eachRound = (round) => round.split(";")

const possibleGame = (str) => {
  const ref = {
    red: 12,
    green: 13,
    blue: 14
  }

  if (!str) {
    return
  }

  const games = strToArray(str)
  console.log(games);

  let sumGameIds = 0
  for (const currentGame of games) {
    console.log(currentGame);
    const [gameLabel, subSets] = eachGame(currentGame)
    console.log(gameLabel);
    console.log(subSets);
    const gameId = +gameLabel?.match(/\d+/g)
    console.log(gameId)
    const gameRes = subSets?.match(/\d+ \w+/g)
    console.log(gameRes);
    let isGamePossible = true
    for (const res of gameRes) {
      const [num, color] = res.split(' ')
      console.log(num);
      console.log(color);
      if (+num > ref[color]) {
        isGamePossible = false
        break
      }
    }
    if (isGamePossible) {
      sumGameIds += gameId
    }
  }
  return (sumGameIds);
}


console.log(possibleGame(str));