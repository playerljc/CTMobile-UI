// import Accordion from '@ctmobile/ui-accordion';
// import DemoUtil from '@ctmobile/ui-demo-util';
// import 'normalize.less';
// import './index.less';
//
// DemoUtil.initial();
// Accordion($('#cuddd-ct-accordion-radius')[0]);
// Accordion($('#cuddd-ct-accordion-base')[0]);
// Accordion($('#cuddd-ct-accordion-classic')[0]);
// Accordion($('#cuddd-ct-accordion-arrow')[0]);
// Accordion($('#cuddd-collapse')[0]);
// const collapseAll = Accordion($('#cuddd-collapse-all')[0]);
// const collapseRefresh = Accordion($('#cuaddd-refresh')[0]);
// const collapseMethods = Accordion($('#cuaddd-collapse-methods')[0]);
//
// // 展开全部
// $('#cuddd-collapse-openall').on('click', () => {
//   collapseAll.showAll();
// });
//
// // 关闭全部
// $('#cuddd-collapse-closeall').on('click', () => {
//   collapseAll.closeAll();
// });
//
//
// // 动态修改样式
// $('#cuaddd-refresh-dynamicclass').on('click', () => {
//   $('#cuaddd-refresh').find('[data-collapse="collapse"]').attr('data-collapse', '');
// });
//
// // 刷新
// $('#cuaddd-refresh-dynamicrefresh').on('click', () => {
//   collapseRefresh.refresh();
// });
//
//
// const $dt = $('#cuaddd-collapse-methods-dt');
//
// // 通过属性打开
// $('#cuaddd-collpase-methods-modiprops-open').on('click', () => {
//   $dt[0].dataset.collapse = 'collapse';
//   collapseMethods.refresh();
// });
// // 通过属性关闭
// $('#cuaddd-collpase-methods-modiprops-close').on('click', () => {
//   $dt[0].dataset.collapse = '';
//   collapseMethods.refresh();
// });
// // 通过api打开
// $('#cuaddd-collpase-methods-api-open').on('click', () => {
//   collapseMethods.show($dt[0]);
// });
// // 通过api关闭
// $('#cuaddd-collpase-methods-api-close').on('click', () => {
//   collapseMethods.close($dt[0]);
// });

import DrafFactory from '@ctmobile/ui-drag/dragtouch';
import '@ctmobile/ui-drag/drag.less';

const drag = DrafFactory.create(document.getElementById('container'), {
  // 可以放置
  onPutSuccess(params) {
    const cloneEl = params.sourceEl;
    cloneEl.style.position = 'fixed';
    cloneEl.style.zIndex = '9999';
    cloneEl.style.left = `${params.rect.left}px`;
    cloneEl.style.top = `${params.rect.top}px`;
    const targetEls = params.targetEls;
    targetEls[0].appendChild(cloneEl);
    drag.refresh();
    return true;
  },
  // 拖动对象的附加样式，拖动移动起来后触发
  dragSourceExtendClasses: ['sourceActive'],
  // 可放置对象的附加样式，当拖动到可以放置的区域时触发
  dragTargetExtendClasses: ['targetActive'],

  // 拖动后原始节点是否显示
  isDragSourceDisplay: true,
  // 拖动之后原始节点是否存在
  isDragSourceExist: true,
  // 不可放置的时候松开是否有动画返回效果
  noDragReturnAnimate: true,
});
