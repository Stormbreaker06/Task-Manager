import { Priority } from "../models/tasks.js";
import { readTasks, writeTasks } from "./storage.js";
export function addTask(name, description, priority) {
    const tasks = readTasks();
    const newId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
    const newTask = {
        id: newId,
        createdAt: new Date(),
        name,
        description,
        priority
    };
    tasks.push(newTask);
    writeTasks(tasks);
    return newTask;
}
export function getAllTasks() {
    return readTasks();
}
export function deleteTask(id) {
    const tasks = readTasks();
    const initialLength = tasks.length;
    const updatedTasks = tasks.filter(task => task.id !== id);
    if (updatedTasks.length === initialLength) {
        return false;
    }
    writeTasks(updatedTasks);
    return true;
}
//# sourceMappingURL=taskservice.js.map