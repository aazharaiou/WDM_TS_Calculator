import { createRequire } from "module";
// @ts-ignore
const require = createRequire(import.meta.url);
const art = require('ascii-art');
import chalk from 'chalk';
art.font('TSCalculator', 'rusted').then((ret : string)=> console.log(chalk.greenBright(ret)));

