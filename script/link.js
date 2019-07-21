const { spawn } = require('child_process');
const links = require('../package.json').links;

// 运行命令的路径
const runtimePath = process.cwd();
// 命令的路径
// const codePath = __dirname;

let index = 0;

function task(componentName) {
  return new Promise((resolve, reject) => {
    const taskProcess = spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm',
      [
        'link',
        componentName,
      ],
      {
        cwd: runtimePath,
        encoding: 'utf-8',
      });

    taskProcess.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    taskProcess.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    taskProcess.on('close', (code) => {
      console.log(`link：${code}`);
      resolve();
    });
  });
}

/**
 * loopTask
 * @return {Promise}
 */
function loopTask() {
  return new Promise((resolve, reject) => {
    if (index >= links.length) {
      resolve();
    } else {
      const componentName = links[index++];
      if (componentName) {
        task(componentName).then(() => {
          loopTask().then(() => {
            resolve();
          });
        }).catch((error) => {
          reject(error);
        });
      } else {
        reject();
      }
    }
  });
}

function link() {
  loopTask().then(() => {
    console.log('finish');
    process.exit();
  }).catch((error) => {
    console.log(error);
  });
}

link();
