import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { resolve, basename, join } from 'node:path';
import { createGzip, createUnzip } from 'node:zlib';


export const compress = async (arg1, arg2) => {
    const source = resolve(arg1);
    const fileName = basename(source);
    const output = resolve(join(arg2, fileName + '.br'));

    await pipeline(
      createReadStream(source),
      createGzip(),
      createWriteStream(output)
    );
  }

  export const decompress = async (arg1, arg2) => {
    const source = resolve(arg1);
    const fileName = basename(source);
    const output = resolve(join(arg2, fileName.slice(0, -3)));

    await pipeline(
      createReadStream(source),
      createUnzip(),
      createWriteStream(output)
    );
  }
