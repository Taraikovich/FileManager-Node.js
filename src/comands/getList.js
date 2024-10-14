import { readdir, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const getliat = async () => {
  const files = await readdir(resolve(process.cwd()));

  const table = await Promise.all(
    files.map(async (file) => {
      const filePath = resolve(process.cwd(), file);
      try {
        const fileStat = await stat(filePath);

        return {
          name: file,
          type: fileStat.isFile() ? 'file' : 'directory',
        };
      } catch {
        return;
      }
    })
  );

  table.sort((a, b) => {
    if (a.type === b.type) {
      return a.name.localeCompare(b.name);
    }
    return a.type === 'directory' ? -1 : 1;
  });

  console.table(table.filter((item) => item));
};

export default getliat;
