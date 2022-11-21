#! /usr/bin/env node
import { createRequire } from "module";
import inquirer from "inquirer";
const require = createRequire(import.meta.url);
const art = require('ascii-art');
import chalk from 'chalk';
let banner = await art.font('TSCalculator', 'Doom').completed();
console.log(chalk.greenBright(banner));
let developer = await art.font('Developed_by:_Azhar_ul_Islam', 'rusted').completed();
console.log(chalk.cyan(developer));
console.log(chalk.bgCyanBright.black('Welcome to the terminal calculator developed using TypeScript. Please follow the guidelines provided by the program as below. '));
let history = [];
while (true) {
    let answers;
    answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'operand1',
            message: 'Enter first number'
        }, {
            type: 'number',
            name: 'operand2',
            message: 'Enter second number'
        }, {
            type: 'list',
            name: 'operator',
            message: 'What operation you want to apply? (Use Arrow Keys)',
            choices: ['Add', 'Subtract', 'Multiply', 'Divide']
        }
    ]);
    const op1 = Number(answers.operand1);
    const op2 = Number(answers.operand2);
    let answer;
    let oper;
    try {
        switch (answers.operator) {
            case 'Add':
                answer = op1 + op2;
                oper = '+';
                history.push(`${op1} + ${op2} = ${answer}`);
                break;
            case 'Subtract':
                answer = op1 - op2;
                oper = '-';
                history.push(`${op1} - ${op2} = ${answer}`);
                break;
            case 'Multiply':
                answer = op1 * op2;
                oper = 'X';
                history.push(`${op1} X ${op2} = ${answer}`);
                break;
            case 'Divide':
                answer = op1 / op2;
                oper = '/';
                history.push(`${op1} / ${op2} = ${answer}`);
                break;
            default:
                answer = 0;
                oper = 'Oper';
        }
    }
    catch (e) {
        answer = 0;
        console.error('The requested operation is not possible');
    }
    console.log(chalk.cyanBright(`Answer is ${answer}`));
    let response;
    response = await (inquirer.prompt([{ type: "list", name: "whatNext", message: "What next? repeat? Show/Clear History?", choices: ["Yes", "No", "Show", "Clear"] }]));
    if (response.whatNext === "No")
        break;
    if (response.whatNext === "Show")
        console.table(history);
    if (response.whatNext === "Clear") {
        console.info('History cleared!!!');
        history.length = 0;
    }
}
