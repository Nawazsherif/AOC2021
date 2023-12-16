import { promises as fs } from "fs";
import {iif} from "../utils/functions";

const calculateIncreasedDepths = async() => {
  const fileInput = await fs.readFile("./inputs/day1.txt");
  const lines = fileInput.toString().split("\n");
  const sumReducer = (total: number, num: number) => total + num;

  iif(function part1(){
    const value = lines.map((line, index) => {
      return Number(parseInt(line) < parseInt(lines[index+1]));
    });
    console.log(value.reduce(sumReducer, 0));
  });

  iif(function part2(){
    const value = lines.map((line, index) => {
      return Number((parseInt(line)+ parseInt(lines[index + 1]) + parseInt(lines[index +2])) <
       (parseInt(lines[index + 1])+ parseInt(lines[index + 2]) + parseInt(lines[index + 3])));
    });

    console.log(value.reduce(sumReducer,0));
  });

}

calculateIncreasedDepths();
