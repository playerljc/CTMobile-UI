import DemoUtil from '@ctmobile/ui-demo-util';

import './index.less';

if (process.env.NODE_ENV === 'production') {
  document.getElementById('iframe').setAttribute('src', '/playerljc.github.io/ctmobile-ui/html/Tab/mobile.html');
}

DemoUtil.initial();
