import { writeFile, rename, unlink } from 'node:fs/promises';
import { resolve } from 'node:path';

import getliat from './getList.js';
import readFile from './readFile.js';
import copyFile from './copyFile.js';
import osInfo from './osInfo.js';
import getHash from './getHash.js';
import * as zip from './zip.js';

const comands = {
  up() {
    process.chdir('..');
  },
  cd(arg1) {
    process.chdir(arg1);
  },
  async ls() {
    await getliat();
  },
  async cat(arg1) {
    await readFile(arg1);
  },
  async add(arg1) {
    await writeFile(resolve(arg1), '', { flag: 'wx+' });
  },
  async rn(arg1, arg2) {
    await rename(resolve(arg1), resolve(arg2));
  },
  async cp(arg1, arg2) {
    await copyFile(arg1, arg2);
  },
  async mv(arg1, arg2) {
    await copyFile(arg1, arg2);
    await unlink(resolve(arg1));
  },
  async rm(arg1) {
    await unlink(resolve(arg1));
  },
  os(arg1) {
    osInfo(arg1);
  },
  async hash(arg1) {
    await getHash(arg1);
  },
  async compress(arg1, arg2) {
    await zip.compress(arg1, arg2);
  },
  async decompress(arg1, arg2) {
    await zip.decompress(arg1, arg2);
  },
};

export default comands;
