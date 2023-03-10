import * as day01 from "../src/01";
import * as day02 from "../src/02";
import * as day03 from "../src/03";
import * as day04 from "../src/04";
import * as day05 from "../src/05";
import * as day06 from "../src/06";
import * as day07 from "../src/07";
import * as day08 from "../src/08";
import * as day09 from "../src/09";
import * as day10 from "../src/10";
import * as day11 from "../src/11";

it.each([
  [1, 1, 72017, day01.theMost],
  [1, 2, 212520, day01.topThree],
  [2, 1, 8890, day02.score],
  [2, 2, 10238, day02.score2],
  [3, 1, 7701, day03.dupSum],
  [3, 2, 2644, day03.badgeSum],
  [4, 1, 477, day04.coversCount],
  [4, 2, 830, day04.overlapCount],
  [5, 1, "TBVFVDZPN", day05.topCrates],
  [5, 2, "VLCWHTDSZ", day05.newTopCrates],
  [6, 1, 1210, day06.start],
  [6, 2, 3476, day06.message],
  [7, 1, 1432936, day07.dirSum],
  [7, 2, 272298, day07.sizeToDelete],
  [8, 1, 1816, day08.visible],
  [8, 2, 383520, day08.bestScene],
  [9, 1, 6503, day09.visited],
  [9, 2, 2724, day09.longerVisited],
  [10, 1, 11820, day10.sigStrength],
  [10, 2, "EPJBRKAH", day10.letters],
  [11, 1, 121450, day11.business],
  [11, 2, 28244037010, day11.bigBusiness],
])(
  "For day %p part %p. Expect %p.",
  (
    day: number,
    part: number,
    answer: number | string,
    actual: number | string
  ) => {
    expect(actual).toEqual(answer);
  }
);
