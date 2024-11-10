const fs = require("fs");

let tmp = 0;
let max = 0;
fs.readFileSync("input", "utf8")
  .split("\n")
  .map((x) => {
    if (!x) {
      const tmp2 = tmp;
      tmp = 0;
      return tmp2;
    } else {
      tmp += +x;
    }
  })
  .filter((x) => x)
  .forEach((x) => {
    max = Math.max(x, max);
  });

console.log(max);
