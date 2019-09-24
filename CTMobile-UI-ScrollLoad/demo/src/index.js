import DemoUtil from '@ctmobile/ui-demo-util';
import ScrollLoad, { CONSTANT } from '@ctmobile/ui-scrollload-sd';
// import '@ctmobile/ui-scrollload/themes/default/scrollload.less';
// import '@ctmobile/ui-scrollload/scrollload.less';

import './index.less';

DemoUtil.initial();

function appendData() {
  const df = document.createDocumentFragment();

  for (let i = 0; i < 30; i++) {
    df.appendChild($('<li>CTMobileUI移动框架中的ScrollLoad组件</li>')[0]);
  }

  listViewEl.appendChild(df);
}

const listViewEl = $('#listView')[0];
let count = 0;

appendData();

const scrollLoad = ScrollLoad(document.getElementById('container'));

scrollLoad.on('scrollbottom', (config) => {
  if (count === 3) {
    config.done(CONSTANT.EMPTY);
  } else {
    setTimeout(() => {
      appendData();
      config.done(CONSTANT.NORMAL);
      count++;
    }, 1000 * 3);
  }
});

scrollLoad.on('emptyclick', () => {
  console.log('emptyclick');
});

scrollLoad.on('errorclick', () => {
  console.log('errorclick');
});
