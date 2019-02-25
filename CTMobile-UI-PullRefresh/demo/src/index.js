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
  scrollEl,
  scrollInnerEl,
  pullEl,
  // icon: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3869169037,1728020504&fm=58&s=95F35F36EC73B6014C2583EF03007027&bpow=121&bpoh=75',
  // label: '你好',
  // canLabel: '可以刷新',
  // loadingAnimation: '<div><img src="http://lorempixel.com/88/88/fashion/1"></div>',
});

pullRefresh.on('pullStart', () => { console.log('pullStart'); });
pullRefresh.on('pullRebound', () => { console.log('pullRebound'); });
pullRefresh.on('pullCanRefresh', () => { console.log('pullCanRefresh'); });
pullRefresh.on('pullBottom', () => { console.log('pullBottom'); });
pullRefresh.on('pullRefresh', (ins) => {
  setTimeout(() => {
    ins.reset();
  }, 1000 * 20);
});
