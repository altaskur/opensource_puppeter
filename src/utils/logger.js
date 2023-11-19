import chalk from "chalk";

export default {
  info: (...args) => {
    console.log(chalk.blue(...args));
  },
  error: (...args) => {
    console.log(chalk.red(...args));
  },
  warning: (...args) => {
    console.log(chalk.yellow(...args));
  },
  success: (...args) => {
    console.log(chalk.green(...args));
  },
};
