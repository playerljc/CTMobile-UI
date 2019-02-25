import PullRefresh from '@ctmobile/ui-pullrefresh';
import DemoUtil from '@ctmobile/ui-demo-util';
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

pullRefresh.on('pullStart', () => { console.log('pullStart'); });
pullRefresh.on('pullRebound', () => { console.log('pullRebound'); });
pullRefresh.on('pullCanRefresh', () => { console.log('pullCanRefresh'); });
pullRefresh.on('pullBottom', () => { console.log('pullBottom'); });
pullRefresh.on('pullRefresh', (ins) => {
  setTimeout(() => {
    ins.reset();
  }, 1000 * 2);
});
