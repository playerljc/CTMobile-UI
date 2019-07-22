const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');
const commandArgs = require('./commandArgs');

const runtimePath = path.dirname(__dirname);
const binPath = path.join(runtimePath, 'node_modules', '.bin');

/**
 * decode
 * @param - {String} - str
 * @return {String}
 */
function decode(str) {
  // 一般可以先转换为标准 unicode 格式（有需要就添加：当返回的数据呈现太多\\\u 之类的时）
  let result = unescape(str.replace(/\\u/g, '%u'));
  // 再对实体符进行转义
  // 有 x 则表示是16进制，$1 就是匹配是否有 x，$2 就是匹配出的第二个括号捕获到的内容，将 $2 以对应进制表示转换
  result = result.replace(/&#(x)?(\w+);/g, ($, $1, $2) => {
    return String.fromCharCode(parseInt($2, $1 ? 16 : 10));
  });

  return result;
}

/**
 * conversion
 * @return {Promise<any>}
 */
function conversion() {
  return new Promise((resolve) => {
    // 转换的文件路径,一般为html文件路径
    const srcPath = commandArgs.getArgs()[0];

    const command = process.platform === 'win32' ? path.join(binPath, 'bd.cmd') : path.join(binPath, 'bd');
    const taskProcess = spawn(
      command,
      [srcPath],
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

    taskProcess.on('close', () => {
      const fileName = path.basename(srcPath, '.html');
      const mdFilePath = path.join(path.dirname(srcPath), `${fileName}.md`);
      fs.readFile(mdFilePath, 'utf8', (err, data) => {
        const str = decode(data);
        fs.writeFileSync(mdFilePath, str);
        resolve();
      });
    });
  });
}

conversion().then(() => {
  console.log('转换成功！');
}).catch(() => {
  console.log('转换失败!');
});
