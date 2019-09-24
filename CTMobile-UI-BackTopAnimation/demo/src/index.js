import DemoUtil from '@ctmobile/ui-demo-util';
import BackTopAnimation from '@ctmobile/ui-backtopanimation-sd';
import { Dom6 } from '@ctmobile/ui-util';
import './index.less';

DemoUtil.initial();

const listEl = document.getElementById('ct-list');
const f = document.createDocumentFragment();
for (let i = 0; i < 50; i++) {
  f.appendChild(Dom6.createElement('<li>CTMobileUI中的BackTopAnimation组件</li>'));
}
listEl.appendChild(f);

const parent = document.getElementById('ctmobile-ui-doc-demo-device');
const scrollEl = document.querySelector('.ct-list');
const BackTop = BackTopAnimation(parent, scrollEl);
BackTop.on('scrollTop', () => {
  console.log('scrollTop');
});