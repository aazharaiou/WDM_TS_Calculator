import {createRequire} from "module";
import inquirer from "inquirer";

const require = createRequire(import.meta.url);
const art = require('ascii-art');
import chalk from 'chalk';

let banner : string = await art.font('TSCalculator', 'Doom').completed();
console.log(chalk.greenBright(banner));
console.log(chalk.bgCyanBright.black('Welcome to the terminal calculator developed using TypeScript. Please follow the guidelines provided by the program as below. '));
let history : string[] = [];
while(true) {
    let answers: { operand1: string; operand2: string; operator: "Add" | "Subtract" | "Multiply" | "Divide" };
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
        }]);
    const op1: number = Number(answers.operand1);
    const op2: number = Number(answers.operand2);
    let answer: number;
    let oper: string;
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
    } catch (e) {
        answer = 0;
        console.error('The requested operation is not possible');
    }
    console.log(chalk.cyanBright(`Answer is ${answer}`));
    let response : {whatNext: "Yes" | "No" | "Show" | "Clear"};
    response = await(inquirer.prompt([{type:"list", name:"whatNext", message:"What next? repeat? Show/Clear History?", choices:["Yes", "No", "Show", "Clear"]}]));
     if (response.whatNext === "No")
         break;
     if(response.whatNext === "Show")
         console.table(history);
     if(response.whatNext === "Clear")
     {
         console.info('History cleared!!!');
         history.length = 0;
     }
}