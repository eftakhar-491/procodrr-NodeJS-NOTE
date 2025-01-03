#!node
import { readFile } from "node:fs/promises";

const fileContant = await readFile("./35_Module System in Nodejs.txt");
console.log(fileContant.toString());
