const fs = require("fs");

let count = 0;
fs.readFileSync("input", "utf-8")
  .split("\n")
  .filter((x) => x)
  .forEach((x) => {
    const [firstElf, secondElf] = x.split(",");
    const [firstElf_1, firstElf_2] = firstElf.split("-");
    const [secondElf_1, secondElf_2] = secondElf.split("-");

    if (
      (+firstElf_1 <= +secondElf_1 && +firstElf_2 >= +secondElf_2) ||
      (+firstElf_1 >= +secondElf_1 && +firstElf_2 <= +secondElf_2)
    ) {
      ++count;
    }
  });

console.log(count);
