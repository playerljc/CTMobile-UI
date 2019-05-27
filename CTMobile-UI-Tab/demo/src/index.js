// import Tab, { TabItem } from '@ctmobile/ui-tab/tab';
// import '@ctmobile/ui-tab/tab.less';
// import './index.less';
//
// class MyTabItem extends TabItem {
//   constructor(index) {
//     super(index);
//   }
//
//   create() {
//     console.log(this.index, 'create');
//   }
//
//   show() {
//     console.log(this.index, 'show');
//   }
//
//   beforeHide() {
//     console.log(this.index, 'beforeHide');
//   }
// }
//
// const el = document.getElementById('tab');
// const tel = document.getElementById('ttab');
//
// const myTab = new Tab(el, tel, {
//   // 指示器
//   indicator: {
//     position: 'left',
//     type: 'average',
//     theme: 'oval',
//     slidesPerView: 3,
//     arrow: false,
//   },
//   content: {
//     mode: 'mulit',
//     isSwiper: true,
//     direction: 'horizontal',
//     classes: [MyTabItem, MyTabItem, MyTabItem, MyTabItem, MyTabItem, MyTabItem, MyTabItem, MyTabItem],
//   },
//   initialSlide: 0,
// });

import DemoUtil from '@ctmobile/ui-demo-util';

import './index.less';

DemoUtil.initial();
