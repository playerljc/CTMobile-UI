import $ from 'jquery';
import StickupLayout from '@ctmobile/ui-stickuplayout';
import DemoUtil from '@ctmobile/ui-demo-util';
import 'normalize.less';
import './index.less';

let dynamicIndex = 0;

function getDynamicTemplate() {
  return (
    `<li class="ct-stickuplayout-item">
      <div class="ct-stickuplayout-item-header"><span class="title">动态增加${++dynamicIndex}</span></div>
      <div class="ct-stickuplayout-item-content">
        <table>
          <tr>
          <td>长度(mm)</td>
          <td></td>
          <td></td>
          </tr>
          <tr>
          <td>宽度(mm)</td>
          <td></td>
          <td></td>
          </tr>
          <tr>
          <td>高度(mm)</td>
          <td></td>
          <td></td>
          </tr>
          <tr>
          <td>轴距(mm)</td>
          <td></td>
          <td></td>
          </tr>
          <tr>
          <td>前轮距(mm)</td>
          <td></td>
          <td></td>
          </tr>
          <tr>
          <td>后轮距(mm)</td>
          <td></td>
          <td></td>
          </tr>
          <tr>
          <td>车身结构</td>
          <td></td>
          <td></td>
          </tr>
          <tr>
          <td>最大扭矩(NH)</td>
          <td></td>
          <td></td>
          </tr>
          <tr>
          <td>最大扭矩(NH)</td>
          <td></td>
          <td></td>
          </tr>
        </table>
      </div>
    </li>`
  );
}

DemoUtil.initial();

// 基本的
StickupLayout($('#stickuplayout-demo-base')[0]);

// 动态的插入
const stickuplayoutDynamic = StickupLayout($('#stickuplayout-demo-dynamic')[0]);
$('#stickuplayout-demo-dynamic-append').on('click', () => {
  const $dynamicItemJO = $(getDynamicTemplate());
  $('#stickuplayout-demo-dynamic .ct-stickuplayout-inner').append($dynamicItemJO);
  stickuplayoutDynamic.refresh();
  stickuplayoutDynamic.scrollToByHeaderEl($dynamicItemJO.find('.ct-stickuplayout-item-header')[0]);
});

// 通过索引滚动到指定位置
const stickuplayoutScrollByIndex = StickupLayout($('#stickuplayout-demo-scrollbyindex')[0]);
const $stickuplayoutScrollbyindexItemJO = $('#stickuplayout-demo-scrollbyindex .ct-stickuplayout-inner .ct-stickuplayout-item');
$('#stickuplayout-demo-scrollbyindex-noanimation-btn').on('click', () => {
  stickuplayoutScrollByIndex.scrollToByIndex($stickuplayoutScrollbyindexItemJO.length - 1, 0);
});
$('#stickuplayout-demo-scrollbyindex-animation-btn').on('click', () => {
  stickuplayoutScrollByIndex.scrollToByIndex($stickuplayoutScrollbyindexItemJO.length - 1, 600);
});
$('#stickuplayout-demo-scrollbyindex-top-btn').on('click', () => {
  stickuplayoutScrollByIndex.scrollToByIndex(0);
});


// 通过dom滚动到指定位置
const stickuplayoutScrollByDom = StickupLayout($('#stickuplayout-demo-scrollbyel')[0]);
const $stickuplayoutScrollbyelItemJO = $('#stickuplayout-demo-scrollbyel .ct-stickuplayout-inner .ct-stickuplayout-item');
$('#stickuplayout-demo-scrollbyel-noanimation-btn').on('click', () => {
  stickuplayoutScrollByDom.scrollToByHeaderEl($stickuplayoutScrollbyelItemJO[$stickuplayoutScrollbyelItemJO.length - 1].querySelector('.ct-stickuplayout-item-header'), 0);
});
$('#stickuplayout-demo-scrollbyel-animation-btn').on('click', () => {
  stickuplayoutScrollByDom.scrollToByHeaderEl($stickuplayoutScrollbyelItemJO[$stickuplayoutScrollbyelItemJO.length - 1].querySelector('.ct-stickuplayout-item-header'), 600);
});
$('#stickuplayout-demo-scrollbyel-top-btn').on('click', () => {
  stickuplayoutScrollByDom.scrollToByHeaderEl($stickuplayoutScrollbyelItemJO[0].querySelector('.ct-stickuplayout-item-header'));
});