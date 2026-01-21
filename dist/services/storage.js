import * as fs from "fs";
import {} from "../models/tasks.js";
//import { Priority } from "../models/tasks";
const FILE_PATH = "./tasks.json";
export function readTasks() {
    if (!fs.existsSync(FILE_PATH)) {
        return [];
    }
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    if (!data) {
        return [];
    }
    return JSON.parse(data);
}
export function writeTasks(tasks) {
    let data = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(FILE_PATH, data);
}
//# sourceMappingURL=storage.js.map