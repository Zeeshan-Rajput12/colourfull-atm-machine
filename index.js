#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 5000;
let myPin = 1234;
console.log(chalk.blue("\n \twelcome\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter you pin code:")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("pin is correct, login successfully!"));
    //console.log(`current account balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["withdraw Ammount", "check Balance"]
        }
    ]);
    if (operationAns.operation === "withdraw Ammount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "select a withdrawal method:",
                choices: ["fast cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "fast cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: "select Amount",
                    choices: [1000, 2000, 5000, 10000, 20000, 50000]
                }
            ]);
            if (fastCashAns.fastcash > myBalance) {
                console.log(chalk.red("Insufficient Balanc"));
            }
            else {
                myBalance -= fastCashAns.fastcash;
                console.log(`${fastCashAns.fastcash} withdraw successfully`);
                console.log(`your Remaning Balance is:${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let AmmountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:"
                }
            ]);
            if (AmmountAns.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= AmmountAns.amount;
                console.log(`${AmmountAns.amount} withdraw successfuly`);
                console.log(`your Remaning Balance is: ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "check Balance") {
        console.log(`your account Balance is: ${myBalance}`);
    }
}
else {
    console.log(chalk.red("pin is Incorrect", "Try Again!"));
}
