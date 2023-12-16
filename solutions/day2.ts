import {promises as fs} from "fs";
import {iif} from "../utils/functions";

type shipCoOrdinates = {
  x: number;
  y: number;
  aim: number;
};

type CoOrdinateOptions = { command: string, steps: number, aim: number };

const calculateCoOrdinatesOfShip = async () => {
  const fileInput = await fs.readFile("./inputs/day2.txt");
  const inputs = fileInput.toString().split("\n");

  function calculateCorOrdinateForPart1(data: CoOrdinateOptions): shipCoOrdinates {
    if (data.command === "forward") {
      return ({x: data.steps, y: 0, aim: 0})
    }
    if (data.command === "up") {
      return ({x: 0, y: -data.steps,aim: 0})
    }
    if (data.command === "down") {
      return ({x: 0, y: data.steps, aim: 0})
    }
    return ({x: 0, y: 0, aim: 0});
  };

  function calculateCorOrdinateForPart2(data: CoOrdinateOptions): shipCoOrdinates {
    if (data.command === "forward") {
      return ({x: data.steps, y: (data?.aim || 0) * data.steps, aim: 0})
    }
    if (data.command === "up") {
      return ({x: 0, y: 0, aim: -data.steps})
    }
    if (data.command === "down") {
      return ({x: 0, y: 0, aim: data.steps})
    }
    return ({x: 0, y: 0, aim: 0});
  };

  iif(function part1() {
    let coOrdinate: shipCoOrdinates = {x: 0, y: 0, aim: 0};
    inputs.forEach((input) => {
      const [command, steps] = input.split(" ");
      const {x, y} = calculateCorOrdinateForPart1({command, steps: parseInt(steps),aim: 0});
      coOrdinate.x += x;
      coOrdinate.y += y;
    });
    console.log(coOrdinate.x * coOrdinate.y);
  });

  iif(function part2() {
    let coOrdinate: shipCoOrdinates = {x: 0, y: 0, aim: 0};
    inputs.forEach((input) => {
      const [command, steps] = input.split(" ");
      const {x, y, aim} = calculateCorOrdinateForPart2({command, steps: parseInt(steps), aim: coOrdinate.aim});
      coOrdinate.x += x;
      coOrdinate.y += y;
      coOrdinate.aim += aim || 0;
    });
    console.log(coOrdinate.x * coOrdinate.y);
  });
}

calculateCoOrdinatesOfShip();
