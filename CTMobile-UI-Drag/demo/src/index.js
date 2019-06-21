import DrafFactory from '@ctmobile/ui-drag/drag';
import '@ctmobile/ui-drag/drag.less';
import DemoUtil from '@ctmobile/ui-demo-util';
import { Dom6 } from '@ctmobile/ui-util';
import 'normalize.less';
import './index.less';

DemoUtil.initial();

let sourceHoverEl1;
let sourceHoverEl2;
let sourceHoverEl3;

const drag1 = DrafFactory.create(document.getElementById('demo1'), {
  // 可以放置
  onPutSuccess(params) {
    const cloneEl = params.cloneSourceEl;
    cloneEl.classList.remove('ct-drag-source');

    const parentEl = Dom6.createElement('<li></li>');
    parentEl.appendChild(cloneEl);

    const targetEls = params.targetEls;
    targetEls[0].appendChild(parentEl);
    drag1.refresh();
    return true;
  },
  onSourceEnter(sourceEl) {
    sourceHoverEl1 = Dom6.createElement(
      '<div class="sourceMask"></div>'
    );
    const cloneNode = sourceEl.cloneNode(true);
    sourceHoverEl1.appendChild(cloneNode);
    sourceEl.parentElement.appendChild(sourceHoverEl1);
  },
  onSourceLeave(sourceEl) {
    if (sourceHoverEl1) {
      sourceHoverEl1.parentElement.removeChild(sourceHoverEl1);
      sourceHoverEl1 = null;
    }
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

const drag2 = DrafFactory.create(document.getElementById('demo2'), {
  // 可以放置
  onPutSuccess(params) {
    const cloneEl = params.cloneSourceEl;
    cloneEl.classList.remove('ct-drag-source');

    const parentEl = Dom6.createElement('<li></li>');
    parentEl.appendChild(cloneEl);

    const targetEls = params.targetEls;
    targetEls[0].appendChild(parentEl);
    drag2.refresh();
    return true;
  },
  onSourceEnter(sourceEl) {
    sourceHoverEl2 = Dom6.createElement(
      '<div class="sourceMask"></div>'
    );
    const cloneNode = sourceEl.cloneNode(true);
    sourceHoverEl2.appendChild(cloneNode);
    sourceEl.parentElement.appendChild(sourceHoverEl2);
  },
  onSourceLeave(sourceEl) {
    if (sourceHoverEl2) {
      sourceHoverEl2.parentElement.removeChild(sourceHoverEl2);
      sourceHoverEl2 = null;
    }
  },

  // 拖动对象的附加样式，拖动移动起来后触发
  dragSourceExtendClasses: ['sourceActive'],
  // 可放置对象的附加样式，当拖动到可以放置的区域时触发
  dragTargetExtendClasses: ['targetActive'],

  // 拖动后原始节点是否显示
  isDragSourceDisplay: true,
  // 拖动之后原始节点是否存在
  isDragSourceExist: false,
  // 不可放置的时候松开是否有动画返回效果
  noDragReturnAnimate: true,
});

const drag3 = DrafFactory.create(document.getElementById('demo3'), {
  // 可以放置,已经在ct-drag-target中的ct-drag-source不能拖放
  onPutSuccess(params) {
    const targetEls = params.targetEls;
    const sourceEl = params.sourceEl;
    const targetEl = targetEls[0];
    const index = Array.from(targetEl.querySelectorAll('.ct-drag-source')).findIndex((el) => {
      return el === sourceEl;
    });

    if (index !== -1) {
      return false;
    } else {
      sourceEl.parentElement.parentElement.removeChild(sourceEl.parentElement);
      const cloneEl = params.cloneSourceEl;
      const parentEl = Dom6.createElement('<li></li>');
      parentEl.appendChild(cloneEl);
      targetEl.appendChild(parentEl);
      drag3.refresh();
      return true;
    }
  },
  onSourceEnter(sourceEl) {
    sourceHoverEl3 = Dom6.createElement(
      '<div class="sourceMask"></div>'
    );
    const cloneNode = sourceEl.cloneNode(true);
    sourceHoverEl3.appendChild(cloneNode);
    sourceEl.parentElement.appendChild(sourceHoverEl3);
  },
  onSourceLeave(sourceEl) {
    if (sourceHoverEl3) {
      sourceHoverEl3.parentElement.removeChild(sourceHoverEl3);
      sourceHoverEl3 = null;
    }
  },

  // 拖动对象的附加样式，拖动移动起来后触发
  dragSourceExtendClasses: ['sourceActive'],
  // 可放置对象的附加样式，当拖动到可以放置的区域时触发
  dragTargetExtendClasses: ['targetActive'],

  // 拖动后原始节点是否显示
  isDragSourceDisplay: true,
  // 拖动之后原始节点是否存在
  isDragSourceExist: false,
  // 不可放置的时候松开是否有动画返回效果
  noDragReturnAnimate: true,
});
