const path = require('path');
const { spawn } = require('child_process');
const components = require('../package.json').components;

const runtimePath = path.dirname(__dirname);
const binPath = path.join(runtimePath, 'node_modules', '.bin');

let index = 0;

function copy(componentName) {
  return new Promise((resolve, reject) => {
    const taskProcess = spawn(process.platform === 'win32' ? path.join(binPath, 'ctcopy.cmd') : path.join(binPath, 'ctcopy'),
      [
        'dist',
        `../../../playerljc.github.io/ctmobile-ui/html/${componentName}`,
      ],
      {
        cwd: path.join(runtimePath, `CTMobile-UI-${componentName}`, 'demo'),
        encoding: 'utf-8',
      });

    taskProcess.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    taskProcess.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    taskProcess.on('close', (code) => {
      resolve();
    });
  });
}

function task(componentName) {
  return new Promise((resolve, reject) => {
    const demoPath = path.join(runtimePath, `CTMobile-UI-${componentName}`, 'demo');
    const taskProcess = spawn(process.platform === 'win32' ? path.join(binPath, 'ctbuild.cmd') : path.join(binPath, 'ctbuild'),
      [
        '--type',
        'buildapp',
      ],
      {
        cwd: demoPath,
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
      copy(componentName).then(() => {
        resolve();
      }).catch(() => {
        reject();
      });
    });
  });
}

/**
 * loopTask
 * @return {Promise}
 */
function loopTask() {
  return new Promise((resolve, reject) => {
    if (index >= components.length) {
      resolve();
    } else {
      const componentName = components[index++];
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

function build() {
  loopTask().then(() => {
    console.log('finish');
    process.exit();
  }).catch((error) => {
    console.log(error);
  });
}

build();
