const fs = require("fs");

/*

X - Lose,
Y - Draw,
Z - Win

A - Rock = 1;
B - Paper = 2;
C - Scissor = 3;

lost = 0;
draw = 3;
win = 6;

*/

const ME = {
  X: 0,
  Y: 3,
  Z: 6,
};

const totalPoints = fs
  .readFileSync("input", "utf8") // sample , input
  .split("\n")
  .filter((x) => x)
  .reduce((acc, x) => {
    const [opp, me] = x.split(" ");
    const score = getAllScore(me, opp);
    return score + acc;
  }, 0);

console.log(totalPoints);

/**
 * @param {string} me
 * @param {string} opp
 * @return {number}
 */
function getAllScore(me, opp) {
  return getMatchPoint(me, opp) + ME[me];
}

/**
 * @param {string} me
 * @param {string} opp
 * @returns {number}
 */
function getMatchPoint(me, opp) {
  const gameScore = ME[me];

  // Lose.
  if (gameScore === 0) {
    if (opp === "A") {
      return 3;
    }

    if (opp === "B") {
      return 1;
    }

    return 2;
  }

  // Draw.
  if (gameScore === 3) {
    if (opp === "A") {
      return 1;
    }

    if (opp === "B") {
      return 2;
    }

    return 3;
  }

  // Win.
  if (gameScore === 6) {
    if (opp === "A") {
      return 2;
    }

    if (opp === "B") {
      return 3;
    }

    return 1;
  }
}
