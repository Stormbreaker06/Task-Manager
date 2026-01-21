import * as fs from "fs";
import { type Task} from "../models/tasks.js";
//import { Priority } from "../models/tasks";
const FILE_PATH = "./tasks.json";

export function readTasks(): Array<Task> {
  if (!fs.existsSync(FILE_PATH)) {
    return [];
  }
  const data = fs.readFileSync(FILE_PATH, "utf-8");
  if (!data) {
    return [];
  }
  return JSON.parse(data) as Task[];
}
export function writeTasks(tasks:Task[]):void{
    let data=JSON.stringify(tasks,null,2);
    fs.writeFileSync(FILE_PATH,data);
}