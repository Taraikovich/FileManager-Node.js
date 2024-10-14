import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { resolve, basename, join } from 'node:path';
import { createGzip, createUnzip, createBrotliCompress, createBrotliDecompress } from 'node:zlib';

export const compress = async (arg1, arg2) => {
  const source = resolve(arg1);
  const output = resolve(arg2);

  await pipeline(
    createReadStream(source),
    createBrotliCompress(),
    createWriteStream(output)
  );
};

export const decompress = async (arg1, arg2) => {
  const source = resolve(arg1);
  const output = resolve(arg2);

  await pipeline(
    createReadStream(source),
    createBrotliDecompress(),
    createWriteStream(output)
  );
};
