import { addTask, getAllTasks ,deleteTask} from "./services/taskservice.js";
import { Priority } from "./models/tasks.js";

addTask("Learn TypeScript", "Finish task manager", Priority.HIGH);
console.log(getAllTasks());

addTask("Starter","ECHO",Priority.LOW);
console.log(getAllTasks());
//deleteTask()
