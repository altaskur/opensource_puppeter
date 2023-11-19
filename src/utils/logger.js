import chalk from "chalk";

const { log } = console;

export default {
  info: (...args) => {
    log(chalk.blue(...args));
  },
  error: (...args) => {
    log(chalk.red(...args));
  },
  warning: (...args) => {
    log(chalk.yellow(...args));
  },
  success: (...args) => {
    log(chalk.green(...args));
  },
};
