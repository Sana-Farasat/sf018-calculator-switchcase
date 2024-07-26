#! /usr/bin/env node
//Shebang
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright.bold("\n\t\t ___Simple Calculator___ \t\n"));
let condition = true;
while (condition) {
    const answer = await inquirer.prompt([{
            name: "firstnumber",
            type: "number",
            message: chalk.greenBright("\n Enter your first number")
        },
        { name: "secondnumber",
            type: "number",
            message: chalk.greenBright("\n Enter your second number") },
        { name: 'operator',
            type: 'list',
            message: chalk.greenBright('\n select one of the operator to perform operations'),
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponent", "Modulus"],
        },
    ]);
    // console.log(answer.operator);
    //switch case statements for operations
    switch (answer.operator) {
        case "Addition":
            let add = (answer.firstnumber + answer.secondnumber);
            console.log(chalk.magentaBright(`\n\tAddition answer is: ` + add));
            break;
        case "Subtraction":
            let subtract = (answer.firstnumber - answer.secondnumber);
            console.log(chalk.magentaBright(`\n\tSubtraction answer is: ` + subtract));
            break;
        case "Multiplication":
            let multiply = (answer.firstnumber * answer.secondnumber);
            console.log(chalk.magentaBright(`\n\tMultiplication answer is: ` + multiply));
            break;
        case "Division":
            let divide = (answer.firstnumber / answer.secondnumber);
            console.log(chalk.magentaBright(`\n\tDivision answer is: ` + divide));
            break;
        case "Modulus":
            let modulus = (answer.firstnumber % answer.secondnumber);
            console.log(chalk.magentaBright(`\n\tModulus answer is: ` + modulus));
            break;
        case "Exponent":
            //let exponent = Math.pow(answer.firstnumber, answer.secondnumber);
            let exponent = (answer.firstnumber ** answer.secondnumber);
            console.log(chalk.magentaBright(`\n\tExponent answer is: ` + exponent));
            break;
        // default:
        // console.log(chalk.redBright.italic('Please Select a Valid Operator!'));
        // break;
    }
    if (isNaN(answer.firstnumber) || isNaN(answer.secondnumber)) {
        console.log(chalk.magentaBright.italic('\n\t Please select a valid number to perform operation!'));
    }
    else {
        true;
    }
    let condition2 = await inquirer.prompt({ name: 'continue',
        type: 'confirm',
        message: chalk.greenBright('\n Do you want to continue?'),
        default: 'false'
    });
    condition = condition2.continue;
}
;
console.log(chalk.magentaBright.italic("\n\t\t ....The End.... \t\n "));
