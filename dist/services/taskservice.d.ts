import type { Task } from "../models/tasks.js";
import { Priority } from "../models/tasks.js";
export declare function addTask(name: string, description: string, priority: Priority): Task;
export declare function getAllTasks(): Task[];
export declare function deleteTask(id: number): boolean;
//# sourceMappingURL=taskservice.d.ts.map