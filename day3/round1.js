const fs = require("fs");
/*
a = 97
A = 65
*/

/** @type {string [] } */
const priorityList = [];

/** @type {number} */
let prioritySum = 0;

fs.readFileSync("input", "utf-8")
  .split("\n")
  .filter((x) => x)
  .forEach((x) => {
    const [first, second] = [
      x.slice(0, x.length / 2).split(""),
      x.slice(x.length / 2).split(""),
    ];
    const repeatingItem = [];
    first.forEach((y) => {
      if (second.includes(y)) {
        repeatingItem.push(y);
      }
    });
    [...new Set(repeatingItem)].forEach((x) => {
      priorityList.push(x);
    });
  });

getPriorityTotal(priorityList);
console.log(prioritySum);

/** @param {string[]} chars */
function getPriorityTotal(chars) {
  chars.forEach((x) => {
    if (x.match(/^[a-z]$/)) {
      prioritySum += getLowercasePriorityNumber(x);
    } else {
      prioritySum += getUppercasePriorityNumber(x);
    }
  });
}

/*
a = 97 1  - 26
A = 65 27 - 52
*/
/**
 * @param {string} char
 * @returns {number}
 */
function getLowercasePriorityNumber(char) {
  return char.charCodeAt(0) - 96;
}

/**
 * @param {string} char
 * @returns {number}
 */
function getUppercasePriorityNumber(char) {
  return char.charCodeAt(0) - 38;
}
