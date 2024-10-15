import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { resolve, basename, join } from 'node:path';

const copyFile = async (arg1, arg2) => {
  const source = resolve(arg1);
  const fileName = basename(source);
  const output = resolve(join(arg2, fileName));

  await pipeline(createReadStream(source), createWriteStream(output));
};

export default copyFile;
