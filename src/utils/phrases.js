import username from './userName.js';
import { homedir } from 'node:os';

process.chdir(homedir());

const phrases = {
  welcome() {
    return `> Welcome to the File Manager, ${username()}!\n${this.cwd()}`;
  },
  cwd() {
    return `> You are currently in ${process.cwd()}\n> `;
  },
  invalidInput() {
    return `> Invalid input\n${this.cwd()}`;
  },
  failed() {
    return `> Operation failed\n${this.cwd()}`;
  },
  exit: `\n\nThank you for using File Manager, ${username()}, goodbye!`,
};

export default phrases;
