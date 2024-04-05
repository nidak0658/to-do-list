#! /usr/bin/env node

// Part 01

import inquirer from "inquirer";
import chalk from "chalk";

 /* let todos = [];
 let condition = true;

while(condition)
    {
        let addTask = await inquirer.prompt(
            [
                {
                    name:'todo',
                    type:'input',
                    message:"What you want to add in your Todos?" 
                },
                {
                    name:'addMore',
                    type:'confirm',
                    message:"Do you want to add more?",
                    default:"false"
                }
            ]
        );
        todos.push(addTask.todo);
        condition = addTask.addMore;
        console.log(todos)
    }
    
 let todays = [];
 let location = true;

while(location)
    {
        let deleteOption = await inquirer.prompt(
            [
                {
                    name:'today',
                    type:'intput',
                    message:"What you want to library Todays?" 
                },
                {
                    name:'noMore',
                    type:'confirm',
                    message:"Do you want to no more place?",
                    default:"false"
                }
            ]
        );
        todays.push(deleteOption.today);
        location = deleteOption.noMore;
        console.log(todays)
    } */

// Part 02

 /* let todos = []; // Shopper []
 let condition = true;

while(condition)
    {
        let todoQuestions = await inquirer.prompt(
            [
                {
                    name:'firstQuestion',
                    type:'input',
                    message:"What would you like to add in you todos?"
                },
                {
                    name:'secondQuestion',
                    type:'confirm', // When type is confirm answer is in yes or no
                    message:"Would you like to add more in your todos?",
                    default:"true"
                }
            ]
        );
        todos.push(todoQuestions.firstQuestion);
        // The loop is running on the based of this variable condition 
        condition = todoQuestions.secondQuestion;
        console.log(todos)
    } */

// Home Work
// Read, Update, Add, Delete, Empty

// Part 03

 let Task1: string[] = ["Sadaf", "Hadaf", "Huda", "Fiza"];
 let condition = true;
async function createToday(Task1: string[]) {
    do {
        let ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: " select an operation",
            choices: ["Add", "update", "view", "delete"],
        });
        if (ans.select == "Add") {
            let addToday = await inquirer.prompt({
                type: "input",
                message: "Add items in the list",
                name: "today",
            });
            Task1.push(addToday.today);
            Task1.forEach((today) => console.log(today));
            // console.log(Task1);
        }
        if (ans.select == "update") {
            let uupdateToday = await inquirer.prompt({
                type: "list",
                message: "update items in the list",
                name: "today",
                choices: Task1.map((item) => item),
            });
            let addToday = await inquirer.prompt({
                type: "input",
                message: "Add items in the list",
                name: "today",
            });
            let newToday = Task1.filter((val) => val != uupdateToday.today);
            Task1 = [...newToday, addToday.today];
            console.log(Task1);
        }
        if (ans.select == "view") {
            console.log("\t***TO DO LIST***");
            console.log(Task1);
            console.log("\t**************");
        }
        if (ans.select == "delete") {
            let deleteToday = await inquirer.prompt({
                type: "list",
                message: "update items in the list",
                name: "today",
                choices: Task1.map((item) => item),
            });
            let newToday = Task1.filter((val) => val != deleteToday.today);
            Task1 = [...newToday];
            console.log(chalk.bgBlueBright(Task1));
        }
    } while (true);
}
createToday(Task1);
if (Task1.length > 0) {
    console.log(`List of TODO's ${Task1}`);
}
