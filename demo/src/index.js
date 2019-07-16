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
  CascadeCompared.initTouch();
  CascadeCompared.create(document.getElementById('cascadecompared-demo-base'));
};

DragLayout($('#ct-draglayout-demo')[0], {
  showCallback() {

  },
  hideCallback() {

  },
});


const fontDom = $('#font')[0];
const curValueDom = $('#setCurValue')[0];
const baseRem = 0.7,
  baseValue = 33.3;

curValueDom.addEventListener('input', () => {
  fontSizeSetting.setValue(curValueDom.value);
});

const fontSizeSetting = FontSizeSetting($('#ct-fontsizesetting-demo')[0], {
  min: '0',
  max: '100',
  setp: '1',
  value: '33.3',
});
fontSizeSetting.on('change', (value) => {
  let val = parseInt(value);
  if (val === 0) {
    val = 1;
  }
  fontDom.style.fontSize = `${(value * baseRem / baseValue)}rem`;
  $('#curValue')[0].innerText = fontSizeSetting.getValue();
});


const validatePropagationDom = document.getElementById('validatePropagation');
const validateStopPropagationDom = document.getElementById('validateStopPropagation');
const submitDom = document.getElementById('submit');

validatePropagationDom.addEventListener('click', () => {
  const flag = form.validatePropagation();
  console.log(flag);
  return false;
});

validateStopPropagationDom.addEventListener('click', () => {
  const flag = form.validateStopPropagation();
  console.log(flag);
  return false;
});

submitDom.addEventListener('click', () => {
  const entry = form.getEntrys();
  alert(JSON.stringify(entry));
  return false;
});

const form = Form(document.getElementById('containerdemo'), [
  'autoheighttextarea',
  'clearinput',
  'pwdtoggle',
  'select',
  'slider',
  'radio',
  'checkbox',
  'switch',
  'spinner',
  'radiogroup',
  'checkboxgroup',
]);

