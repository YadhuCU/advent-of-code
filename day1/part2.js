const fs = require("fs");

let tmp = 0;

let m1 = 0;
let m2 = 0;
let m3 = 0;

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
  // .sort((a, b) => b - a);
  .forEach((x) => {
    if (x > m1) {
      m3 = m2;
      m2 = m1;
      m1 = x;
    }

    if (x > m2 && x < m1) {
      m3 = m2;
      m2 = x;
    }

    if (x > m3 && x < m2) {
      m3 = x;
    }
  });

// console.log(max1, max2, max3);
console.log(m1 + m2 + m3);
