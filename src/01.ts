import * as utils from "./lib/utils";

const getElves = (data: string) =>
  data.split("\n\n").map((elf) => utils.arraySum(elf.split("\n").map(Number)));

const data = utils.readFile(1);
const elves = getElves(data);

export const theMost = Math.max(...elves);
console.log(
  `Day 01 Part 1: The elf with the most calories has ${theMost} calories.`
);

export const topThree = utils.arraySum(elves.sort().slice(-3));
console.log(`Day 01 Part 2: The top 3 elves have ${topThree} calories.`);
