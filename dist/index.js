import { Priority } from "./models/tasks.js";
import { addTask, getAllTasks, deleteTask } from "./services/taskservice.js";
import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function displayMenu() {
    console.log("\n--- Task Manager ---");
    console.log("1. List all tasks");
    console.log("2. Add a new task");
    console.log("3. Delete a task");
    console.log("4. Exit");
}
function listTasks() {
    const tasks = getAllTasks();
    if (tasks.length === 0) {
        console.log("No tasks found.");
    }
    else {
        console.log("--- All Tasks ---");
        tasks.forEach(task => {
            console.log(`ID: ${task.id} | Name: ${task.name} | Priority: ${task.priority}`);
            if (task.description) {
                console.log(`  Description: ${task.description}`);
            }
        });
    }
    mainMenu();
}
function addTaskPrompt() {
    rl.question("Enter task name: ", (name) => {
        rl.question("Enter task description: ", (description) => {
            rl.question("Enter priority (low, medium, high): ", (priorityInput) => {
                const priority = priorityInput.toLowerCase();
                if (Object.values(Priority).includes(priority)) {
                    addTask(name, description, priority);
                    console.log("Task added successfully!");
                }
                else {
                    console.log("Invalid priority. Task not added.");
                }
                mainMenu();
            });
        });
    });
}
function deleteTaskPrompt() {
    const tasks = getAllTasks();
    if (tasks.length === 0) {
        console.log("No tasks to delete.");
        mainMenu();
        return;
    }
    console.log("--- Select a task to delete ---");
    tasks.forEach(task => {
        console.log(`ID: ${task.id} | Name: ${task.name}`);
    });
    rl.question("Enter the ID of the task to delete: ", (idInput) => {
        const id = parseInt(idInput, 10);
        if (isNaN(id)) {
            console.log("Invalid ID. Please enter a number.");
        }
        else {
            const success = deleteTask(id);
            if (success) {
                console.log("Task deleted successfully!");
            }
            else {
                console.log("Task with that ID not found.");
            }
        }
        mainMenu();
    });
}
function mainMenu() {
    displayMenu();
    rl.question("Choose an option: ", (choice) => {
        switch (choice) {
            case "1":
                listTasks();
                break;
            case "2":
                addTaskPrompt();
                break;
            case "3":
                deleteTaskPrompt();
                break;
            case "4":
                console.log("Exiting Task Manager. Goodbye!");
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please try again.");
                mainMenu();
                break;
        }
    });
}
console.log("Welcome to the Task Manager CLI!");
mainMenu();
//# sourceMappingURL=index.js.map