const selectorPrefix = 'ct-drag-';

/**
 * initEvents
 * @access private
 */
function initEvents() {
  const self = this;

  initDragSourceEvent.call(self);

  const { isDragSourceDisplay = true, isDragSourceExist = true } = self.config;

  // document.body mousemove
  document.body.addEventListener('mousemove', (ev) => {
    if (!self.isdown) return false;

    if (!self.ismove) {
      self.ismove = true;
      if (!isDragSourceDisplay || !isDragSourceExist) {
        self.sourceEl.style.visibility = 'hidden';
      }
    }

    const curX = ev.pageX;
    const curY = ev.pageY;

    // 不是看curX和curY的值在不在targetEl里，而是看
    const moveInTargetEls = getMoveInTargetEls.call(self).complete;
    if (moveInTargetEls.length > 0) {
      // 可以放置
      self.cloneEl.style.cursor = 'pointer';
    } else {
      // 不可以放置
      self.cloneEl.style.cursor = 'not-allowed';
    }

    const incrementX = curX - self.firstX;
    const incrementY = curY - self.firstY;

    self.cloneEl.style.left = `${self.baseX + incrementX}px`;
    self.cloneEl.style.top = `${self.baseY + incrementY}px`;
  });

  // document.body mouseleave
  document.body.addEventListener('mouseleave', () => {
    if (!self.isdown) return false;
    reset.call(self);
  });

  // window resize
  window.addEventListener('resize', () => {
    createTargetsIndex.call(self);
  });
}

/**
 * initDragSourceEvent
 * @access private
 */
function initDragSourceEvent() {
  const self = this;

  const {
    dragSourceExtendClasses = [],
    onDragClone,
    onPutSuccess,
    isDragSourceExist = true,
  } = self.config;

  self.sourceEventHanlder = new WeakMap();

  // dragSource
  for (let i = 0; i < this.sourceEls.length; i++) {
    const sourceEl = this.sourceEls[i];
    const handlerEntry = {};

    // 点击 mousedown
    sourceEl.addEventListener('mousedown', (() => {
      function createCloneEl() {
        const cloneEl = sourceEl.cloneNode(true);
        if (dragSourceExtendClasses) {
          cloneEl.className += ` ${dragSourceExtendClasses.join(' ')}`;
        } else {
          cloneEl.style.border = '1px dashed black';
        }
        return cloneEl;
      }

      const handler = (ev) => {
        self.isdown = true;
        self.sourceEl = sourceEl;
        const rect = sourceEl.getBoundingClientRect();
        self.baseX = rect.left;
        self.baseY = rect.top;

        self.firstX = ev.pageX;
        self.firstY = ev.pageY;

        // create CloneNode
        if (onDragClone) {
          self.cloneEl = onDragClone(sourceEl);
          if (!self.cloneEl) {
            self.cloneEl = createCloneEl();
          }
        } else {
          self.cloneEl = createCloneEl();
        }

        self.cloneEl.setAttribute('id', '');
        self.cloneEl.style.minWidth = `${sourceEl.offsetWidth}px`;
        self.cloneEl.style.minHeight = `${sourceEl.offsetHeight}px`;
        self.cloneEl.style.position = 'fixed';
        self.cloneEl.style.zIndex = '9999';
        self.cloneEl.style.left = `${self.baseX}px`;
        self.cloneEl.style.top = `${self.baseY}px`;
        self.cloneEl.style.margin = '0';
        self.cloneEl.addEventListener('mouseup', () => {
          if (!self.ismove) {
            reset.call(self);
            return false;
          }

          const moveInTargetEls = getMoveInTargetEls.call(self);
          if (moveInTargetEls.complete.length > 0) {
            // 可以放
            if (onPutSuccess) {
              // 返给用的是原始节点克隆后的节点
              const cloneRect = self.cloneEl.getBoundingClientRect();
              const cloneSourceEl = sourceEl.cloneNode(true);
              cloneSourceEl.style.visibility = 'visible';
              cloneSourceEl.style.cursor = 'default';
              const isPut = onPutSuccess({
                sourceEl: cloneSourceEl,
                targetEls: moveInTargetEls.complete,
                rect: {
                  left: cloneRect.left,
                  right: cloneRect.right,
                  top: cloneRect.top,
                  bottom: cloneRect.bottom,
                  width: cloneRect.width,
                  height: cloneRect.height,
                  x: cloneRect.x,
                  y: cloneRect.y,
                },
              });

              // 放了
              if (isPut) {
                if (!isDragSourceExist) {
                  if (self.sourceEl) {
                    self.sourceEl.parentElement.removeChild(self.sourceEl);
                    cloneSourceEl.sourceEl = null;
                  }
                }

                reset.call(self, moveInTargetEls.complete);
              } else {
                // 没放
                goBack.call(self, cloneSourceEl, moveInTargetEls.complete);
              }
            }
          } else {
            // 不可以放
            goBack.call(self, sourceEl, moveInTargetEls.section);
          }
        });

        // append CloneNode
        document.body.appendChild(self.cloneEl);
      };
      handlerEntry.mousedown = handler;
      return handler;
    })());

    // 进入 mouseenter
    sourceEl.addEventListener('mouseenter', (() => {
      const handler = () => {
        sourceEl.style.cursor = 'move';
      };
      handlerEntry.mouseenter = handler;
      return handler;
    })());

    // 移出 mouseover
    sourceEl.addEventListener('mouseover', (() => {
      const handler = () => {
        sourceEl.style.cursor = 'default';
      };
      handlerEntry.mouseover = handler;
      return handler;
    })());

    // 记录mousedonw,mouseenter,mouseover事件的句柄
    self.sourceEventHanlder.set(sourceEl, handlerEntry);
  }
}

/**
 * createTargetsIndex
 * @access private
 */
function createTargetsIndex() {
  this.targetEls = this.el.querySelectorAll(`.${selectorPrefix}target`);
  this.targetsIndex = new WeakMap();
  for (let i = 0; i < this.targetEls.length; i++) {
    const targetEl = this.targetEls[i];
    this.targetsIndex.set(targetEl, targetEl.getBoundingClientRect());
  }
}

/**
 * getMoveInTargetEls
 * @access private
 */
function getMoveInTargetEls() {
  const completeResult = [];
  const sectionResult = [];
  const elRect = this.cloneEl.getBoundingClientRect();

  const { dragTargetExtendClasses = [] } = this.config;

  for (let i = 0; i < this.targetEls.length; i++) {
    const targetEl = this.targetEls[i];
    const rect = this.targetsIndex.get(targetEl);
    if (
      (
        (elRect.left >= rect.left && elRect.left <= rect.right) ||
        (elRect.right >= rect.left && elRect.right <= rect.right)
      ) &&
      (
        (elRect.top >= rect.top && elRect.top <= rect.bottom) ||
        (elRect.bottom >= rect.top && elRect.bottom <= rect.bottom)
      )
    ) {
      if (dragTargetExtendClasses) {
        dragTargetExtendClasses.map((Class) => {
          if (Class) {
            targetEl.classList.remove(Class);
          }
        });
        targetEl.className += ` ${dragTargetExtendClasses.join(' ')}`;
      } else {
        targetEl.style.border = '2px dashed black';
      }

      // 完全进入
      if (
        (
          (elRect.left >= rect.left && elRect.left <= rect.right) &&
          (elRect.right >= rect.left && elRect.right <= rect.right)
        ) &&
        (
          (elRect.top >= rect.top && elRect.top <= rect.bottom) &&
          (elRect.bottom >= rect.top && elRect.bottom <= rect.bottom)
        )
      ) {
        completeResult.push(targetEl);
      } else {
        // 部分进入
        sectionResult.push(targetEl);
      }
    } else if (dragTargetExtendClasses) {
      dragTargetExtendClasses.map((t) => {
        if (t) {
          targetEl.classList.remove(t);
        }
      });
    } else {
      targetEl.style.border = '0';
    }
  }
  return {
    complete: completeResult,
    section: sectionResult,
  };
}

/**
 * goBack
 * @param {HTMLElement} - sourceEl
 * @param {HTMLElement} - targetEls
 */
function goBack(sourceEl, targetEls) {
  const self = this;

  const { noDragReturnAnimate = false } = this.config;
  if (noDragReturnAnimate) {
    setTimeout(() => {
      self.isdown = false;

      function onTransitionend() {
        self.cloneEl.removeEventListener('transitionend', onTransitionend);
        reset.call(self, targetEls);
        sourceEl.style.visibility = 'visible';
      }

      self.cloneEl.addEventListener('transitionend', onTransitionend);
      self.cloneEl.style.transition = 'all .25s ease-out';
      self.cloneEl.style.transform = 'translateZ(0)';
      const rect = sourceEl.getBoundingClientRect();
      self.cloneEl.style.left = `${rect.left}px`;
      self.cloneEl.style.top = `${rect.top}px`;
    }, 100);
  } else {
    reset.call(self, targetEls);
    sourceEl.style.visibility = 'visible';
  }
}

/**
 * reset
 * @param {Array<HTMLElement>} - targetEls
 * @access private
 */
function reset(targetEls) {
  const self = this;
  const { dragTargetExtendClasses = [] } = this.config;
  if (self.cloneEl) {
    document.body.removeChild(self.cloneEl);
  }

  // 删除targets的样式
  if (targetEls && targetEls.length > 0) {
    for (let i = 0; i < targetEls.length; i++) {
      if (dragTargetExtendClasses) {
        dragTargetExtendClasses.map((Class) => {
          if (Class) {
            targetEls[i].classList.remove(Class);
          }
        });
      } else {
        targetEls[i].style.border = '0';
      }
    }
  }
  self.isdown = false; // 是否按下了
  self.ismove = false; // 是否移动了
  self.baseX = null;
  self.baseY = null; // 节点原始距离page的坐标
  self.firstX = null;
  self.firstY = null; // 第一次点击时page的坐标
  self.cloneEl = null;
  self.sourceEl = null;
}

/**
 * Drag
 * @class Drag
 * @classdesc Drag
 */
class Drag {
  /**
   * constructor
   * @constructor
   * @param {HTMLElement} - el
   * @param {Object} - config
   */
  constructor(el, config) {
    this.el = el;
    this.config = Object.assign({}, config);

    this.sourceEls = this.el.querySelectorAll(`.${selectorPrefix}source`);
    this.isdown = false; // 是否按下了
    this.ismove = false; // 是否move了
    this.baseX = null;
    this.baseY = null; // 节点原始距离page的坐标
    this.firstX = null;
    this.firstY = null; // 第一次点击时page的坐标
    this.cloneEl = null;
    this.sourceEl = null;

    initEvents.call(this);
    createTargetsIndex.call(this);
  }

  /**
   * refresh
   */
  refresh() {
    for (let i = 0; i < this.sourceEls.length; i++) {
      const sourceEl = this.sourceEls[i];
      const sourceHandlerEntry = this.sourceEventHanlder.get(sourceEl);
      for (const p in sourceHandlerEntry) {
        sourceEl.removeEventListener(p, sourceHandlerEntry[p]);
      }
    }
    this.sourceEls = document.querySelectorAll(`.${selectorPrefix}source`);
    initDragSourceEvent.call(this);
    createTargetsIndex.call(this);
  }
}

/**
 * DragFactory
 */
const DragFactory = {
  /**
   * 创建一个Drag
   * @param {HtmlElement} - el
   * @param {Object} - config
   * @return {Drag} - Drag
   */
  create(el, config) {
    return new Drag(el, config);
  },
};

export default DragFactory;
