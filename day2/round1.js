const fs = require("fs");

/*
  
A = X = Rock = 1;
B = Y = Paper = 2;
C = Z = Scissor = 3;

lost = 0;
draw = 3;
win = 6;

*/

const ME = {
  X: 1,
  Y: 2,
  Z: 3,
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
  return ME[me] + getMatchPoint(me, opp);
}

/**
 * @param {string} me
 * @param {string} opp
 * @returns {number}
 */
function getMatchPoint(me, opp) {
  // Lose.
  if (
    (me === "X" && opp === "B") ||
    (me === "Y" && opp === "C") ||
    (me === "Z" && opp === "A")
  ) {
    return 0;
  }

  // Draw.
  if (
    (me === "X" && opp === "A") ||
    (me === "Y" && opp === "B") ||
    (me === "Z" && opp === "C")
  ) {
    return 3;
  }
  // Win.
  if (
    (me === "X" && opp === "C") ||
    (me === "Y" && opp === "A") ||
    (me === "Z" && opp === "B")
  ) {
    return 6;
  }
}
