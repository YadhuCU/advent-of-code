const fs = require("fs");

/*
.234.....  2-4
.....678.  6-8

.23......  2-3
...45....  4-5

....567..  5-7
......789  7-9

.2345678.  2-8
..34567..  3-7

.....6...  6-6
...456...  4-6

.23456...  2-6
...45678.  4-8
 */

let count = 0;
fs.readFileSync("input", "utf-8")
  .split("\n")
  .filter((x) => x)
  .forEach((x) => {
    const [firstElf, secondElf] = x.split(",");
    const [firstElf_1, firstElf_2] = firstElf.split("-");
    const [secondElf_1, secondElf_2] = secondElf.split("-");

    if (!(+firstElf_2 < +secondElf_1 || +firstElf_1 > +secondElf_2)) {
      ++count;
    }
  });

console.log(count);
