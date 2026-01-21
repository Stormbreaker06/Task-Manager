import type { Task } from "../models/tasks.js";
import { Priority } from "../models/tasks.js";
import { readTasks, writeTasks } from "./storage.js";

export function addTask(
    name: string,
    description: string,
    priority: Priority
): Task {
    const tasks = readTasks();
    const newId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;

    const newTask: Task = {
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
export function getAllTasks(): Task[] {
    return readTasks();
}

export function deleteTask(id: number): boolean {
  const tasks = readTasks();
  const initialLength = tasks.length;

  const updatedTasks = tasks.filter(task => task.id !== id);

  if (updatedTasks.length === initialLength) {
    return false;
  }

  writeTasks(updatedTasks);
  return true;
}
