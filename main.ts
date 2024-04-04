#! /usr/bin/env node

import inquirer from "inquirer";

 let todos = [];
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
                    message:"Do you want to add more ?",
                    default:"false"
                }
            ]
        );
        todos.push(addTask.todo);
        condition = addTask.addMore
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
                    message:"Do you want to no more place ?",
                    default:"false"
                }
            ]
        );
        todays.push(deleteOption.today);
        location = deleteOption.noMore
        console.log(todays)
    }