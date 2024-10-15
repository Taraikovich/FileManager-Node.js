import { createInterface } from 'node:readline';

import phrases from './utils/phrases.js';
import comands from './comands/comands.js';

export const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: phrases.welcome(),
});
rl.prompt();

rl.on('line', async (line) => {
  const [command, arg1, arg2] = line.trim().split(' ');

  if (command === '.exit') {
    rl.close();
  } else if (comands[command]) {
    try {
      await comands[command](arg1, arg2);
      rl.setPrompt(phrases.cwd());
      rl.prompt();
    } catch (error) {
      rl.setPrompt(phrases.failed());
      rl.prompt();
    }
  } else {
    rl.setPrompt(phrases.invalidInput());
    rl.prompt();
  }
});

rl.on('close', () => {
  console.log(phrases.exit);
});
