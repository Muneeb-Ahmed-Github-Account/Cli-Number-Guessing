#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        message: "Please guess a Number 1-10:",
        type: "number",
        name: "userGuessedNumber",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You guessed a right Number.");
}
else {
    console.log("You guessed a wrong Number.");
}
