import {
  Accordion,
  BackTopAnimation,
  CascadeCompared,
  DragLayout,
  FontSizeSetting,
  Form,
  ImageViewer,
  JdCategoryTab,
  KwList,
  MessageDialog,
  Notification,
  Popup,
  PullRefresh,
  Revolving,
  SidePanel,
  SliderScaleFactory,
  StickupLayout,
  SurnamesFactory,
  SwipeoutListFactory,
  TreeFactory,
  Tabs,
  ScrollLoad,
  Util,
} from '@ctmobile/ui';

import './index.less';

const { Dom6 } = Util;


window.onload = function () {
  Accordion(document.getElementById('accordion'));


  const listEl = document.getElementById('ct-list');
  const f = document.createDocumentFragment();
  for (let i = 0; i < 50; i++) {
    f.appendChild(Dom6.createElement('<li>CTMobileUI中的BackTopAnimation组件</li>'));
  }
  listEl.appendChild(f);

  const parent = document.getElementById('backtopanimationWrap');
  const scrollEl = parent.querySelector('.ct-list');
  const BackTop = BackTopAnimation(parent, scrollEl);
  BackTop.on('scrollTop', () => {
    console.log('scrollTop');
  });


  function getDynamicTemplate(title) {
    return (
      `<li class="ct-stickuplayout-item">
      <div class="ct-stickuplayout-item-header"><span class="title">${title}</span></div>
      <div class="ct-stickuplayout-item-content">
        <div class="ct-cascadecompared-fixedWrap">
          <div class="ct-cascadecompared-item">
            <span class="ct-cascadecompared-cell">厂家指导价</span>
          </div>
          <div class="ct-cascadecompared-item">
            <span class="ct-cascadecompared-cell">厂家指导价</span>
          </div>
          <div class="ct-cascadecompared-item">
            <span class="ct-cascadecompared-cell">厂家指导价</span>
          </div>
        </div>
        <div class="ct-cascadecompared-autoWrap">
          <div class="ct-cascadecompared-autoInner">
            <div class="ct-cascadecompared-item">
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
            </div>
            <div class="ct-cascadecompared-item">
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
            </div>
            <div class="ct-cascadecompared-item">
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
              <span class="ct-cascadecompared-cell">厂家指导价</span>
            </div>
          </div>
        </div>
      </div>
    </li>`
    );
  }

  function initListView(el) {
    let str = '';
    for (let i = 0; i < 10; i++) {
      str += getDynamicTemplate(`header${i + 1}`);
    }

    $(el).append(str);
  }
  initListView($('#cascadecompared-demo-base .ct-stickuplayout-inner')[0]);
  CascadeCompared(document.getElementById('cascadecompared-demo-base'));
};

