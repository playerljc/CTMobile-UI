import PullRefresh from '@ctmobile/ui-pullrefresh/pullrefresh';
import DemoUtil from '@ctmobile/ui-demo-util';
import '@ctmobile/ui-pullrefresh/themes/default/pullrefresh.less';
import '@ctmobile/ui-pullrefresh/pullrefresh.less';
import './index.less';

DemoUtil.initial();

const scrollEl = document.getElementById('content');
const scrollInnerEl = document.getElementById('list');
const pullEl = document.getElementById('ct-pullrefresh');
const pullRefreshApiButton = document.getElementById('pullrefresh-api-button');

pullRefreshApiButton.addEventListener('click', () => {
  pullRefresh.refresh();
});

const pullRefresh = new PullRefresh({
  scrollEl, scrollInnerEl, pullEl,
});

pullRefresh.on('pullRefresh', (ins) => {
  setTimeout(() => {
    ins.reset();
  }, 1000 * 2);
});