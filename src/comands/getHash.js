import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';

const getHash = async (arg1) => {
  const file = resolve(arg1);
  const hashSum = createHash('sha256');

  const stream = createReadStream(file);

  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => {
      hashSum.update(chunk);
    });

    stream.on('end', () => {
      const hex = hashSum.digest('hex');
      console.log(hex);
      resolve(hex);
    });

    stream.on('error', (err) => {
      console.error('Error reading file:', err);
      reject(err);
    });
  });
};

export default getHash;
