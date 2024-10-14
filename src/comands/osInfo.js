import { EOL, cpus, homedir, userInfo, arch } from 'node:os';

const osInfo = (arg1) => {
  if (arg1 === '--EOL') console.log(`> EOL: ${JSON.stringify(EOL)}`);
  else if (arg1 === '--homedir') console.log(`> Home directory: ${homedir}`);
  else if (arg1 === '--username')
    console.log(`> User Name: ${userInfo().username}`);
  else if (arg1 === '--architecture') console.log(`> Architecture: ${arch}`);
  else if (arg1 === '--cpus') {
    const cpuInfo = cpus();

    console.log(`Overall amount of CPUs: ${cpuInfo.length}`);
    console.log(`Model: ${cpuInfo[0].model}`);
    console.log('Clock rate:');

    cpuInfo.forEach((item, index) => {
      console.log(` CPU ${index + 1}: ${(item.speed / 1000).toFixed(2)} GHz`);
    });
  } else console.log('> Invalid input');
};

export default osInfo;
