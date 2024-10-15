import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';
import { resolve } from 'node:path';

const readFile = async (arg1) => {
  const fileStream = createReadStream(resolve(arg1));

  const rl = createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    console.log(line);
  }
};

export default readFile;
