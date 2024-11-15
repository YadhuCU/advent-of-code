const fs = require("fs");

let priorityList = [];
let tempArray = [];
fs.readFileSync("input", "utf-8")
  .split("\n")
  .filter((x) => x)
  .map((x, id) => {
    // console.log({ map: x, id: id + 1 });
    if ((id + 1) % 3 === 0) {
      tempArray.push(x.split(""));
      const y = tempArray;
      tempArray = [];
      return y;
    } else {
      tempArray.push(x.split(""));
    }
  })
  .filter((x) => x)
  .forEach((x) => {
    const [row1, row2, row3] = x;
    let type = "";
    row1.forEach((x) => {
      if (row2.includes(x) && row3.includes(x)) {
        return (type = x);
      }
    });

    if (type) {
      priorityList.push(type);
    }
  });

console.log(getPriorityTotal(priorityList));

/** @param {string[]} chars */
function getPriorityTotal(chars) {
  let prioritySum = 0;
  chars.forEach((x) => {
    if (x.match(/^[a-z]$/)) {
      prioritySum += getLowercasePriorityNumber(x);
    } else {
      prioritySum += getUppercasePriorityNumber(x);
    }
  });
  return prioritySum;
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
