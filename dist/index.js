import { createRequire } from "module";
const require = createRequire(import.meta.url);
const art = require('ascii-art');
import chalk from 'chalk';
art.font('TSCalculator', 'rusted').then((ret) => console.log(chalk.greenBright(ret)));
//# sourceMappingURL=index.js.map