import $ from 'jquery';
import CascadeCompared from '@ctmobile/ui-cascadecompared';
import DemoUtil from '@ctmobile/ui-demo-util';
import 'normalize.less';
import './index.less';

DemoUtil.initial();

let dynamicIndex = 0;

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

// 基本的
initListView($('#cascadecompared-demo-base .ct-stickuplayout-inner')[0]);
CascadeCompared($('#cascadecompared-demo-base')[0]);

// 动态的插入
initListView($('#cascadecompared-demo-dynamic .ct-stickuplayout-inner')[0]);
const cascadeComparedDynamic = CascadeCompared($('#cascadecompared-demo-dynamic')[0]);
$('#cascadecompared-demo-dynamic-append').on('click', () => {
  const $dynamicItemJO = $(getDynamicTemplate(`动态增加${++dynamicIndex}`));
  $('#cascadecompared-demo-dynamic .ct-stickuplayout-inner').append($dynamicItemJO);
  cascadeComparedDynamic.refresh();
  cascadeComparedDynamic.scrollToByHeaderEl($dynamicItemJO.prev().find('.ct-stickuplayout-item-header')[0]);
});

// 滚动到指定位置(通过索引)
initListView($('#cascadecompared-demo-scrollbyindex .ct-stickuplayout-inner')[0]);
const cascadeComparedScrollbyindex = CascadeCompared($('#cascadecompared-demo-scrollbyindex')[0]);
const $cascadeComparedScrollbyIndexItemJO = $('#cascadecompared-demo-scrollbyindex .ct-stickuplayout-inner .ct-stickuplayout-item');
$('#cascadecompared-demo-scrollbyindex-noanimation-btn').on('click', () => {
  cascadeComparedScrollbyindex.scrollToByIndex($cascadeComparedScrollbyIndexItemJO.length - 2, 0);
});
$('#cascadecompared-demo-scrollbyindex-animation-btn').on('click', () => {
  cascadeComparedScrollbyindex.scrollToByIndex($cascadeComparedScrollbyIndexItemJO.length - 2, 600);
});
$('#cascadecompared-demo-scrollbyindex-top-btn').on('click', () => {
  cascadeComparedScrollbyindex.scrollToByIndex(0);
});

// 滚动到指定位置(通过dom)
initListView($('#cascadecompared-demo-scrollbyel .ct-stickuplayout-inner')[0]);
const cascadeComparedScrollbyel = CascadeCompared($('#cascadecompared-demo-scrollbyel')[0]);
const $cascadeComparedScrollbyelItemJO = $('#cascadecompared-demo-scrollbyel .ct-stickuplayout-inner .ct-stickuplayout-item');
$('#cascadecompared-demo-scrollbyel-noanimation-btn').on('click', () => {
  cascadeComparedScrollbyel.scrollToByHeaderEl($cascadeComparedScrollbyelItemJO[$cascadeComparedScrollbyelItemJO.length - 2].querySelector('.ct-stickuplayout-item-header'), 0);
});
$('#cascadecompared-demo-scrollbyel-animation-btn').on('click', () => {
  cascadeComparedScrollbyel.scrollToByHeaderEl($cascadeComparedScrollbyelItemJO[$cascadeComparedScrollbyelItemJO.length - 2].querySelector('.ct-stickuplayout-item-header'), 600);
});
$('#cascadecompared-demo-scrollbyel-top-btn').on('click', () => {
  cascadeComparedScrollbyel.scrollToByHeaderEl($cascadeComparedScrollbyelItemJO[0].querySelector('.ct-stickuplayout-item-header'));
});

// 滚动到指定列
initListView($('#cascadecompared-demo-scrollbycolumn .ct-stickuplayout-inner')[0]);
const cascadeComparedScrollbycolumn = CascadeCompared($('#cascadecompared-demo-scrollbycolumn')[0]);
$('#cascadecompared-demo-scrollbycolumn-last-btn').on('click', () => {
  cascadeComparedScrollbycolumn.scrollToByColumn($('#cascadecompared-demo-scrollbycolumn .ct-cascadecompared-indicator .ct-cascadecompared-autoWrap .ct-cascadecompared-cell').length);
});
$('#cascadecompared-demo-scrollbycolumn-first-btn').on('click', () => {
  cascadeComparedScrollbycolumn.scrollToByColumn(1);
});