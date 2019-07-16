// import { Dom6 } from '@ctmobile/ui-util';
const selectorPrefix = 'ct-drag-';
const scrollStep = 5;

/**
 * initEvents
 * @access private
 */
function initEvents() {
  const self = this;

  initDragSourceEvent.call(self);

  const {
    isDragSourceDisplay = true,
    isDragSourceExist = true,
    onBoundaryDetection,
    infinite = false,
  } = self.config;

  // document.body mousemove
  self.el.addEventListener('mousemove', (ev) => {
    if (!self.isdown) return false;

    if (!self.ismove) {
      self.ismove = true;
      if (!isDragSourceDisplay || !isDragSourceExist) {
        self.sourceEl.style.visibility = 'hidden';
      }
    }

    const curX = ev.pageX;
    const curY = ev.pageY;

    const incrementX = curX - self.firstX;
    const incrementY = curY - self.firstY;

    // 不是看curX和curY的值在不在targetEl里，而是看
    const moveInTargetEls = getMoveInTargetEls.call(self);

    // 不是无限画布
    if (!infinite) {
      if (moveInTargetEls.complete.length > 0) {
        // 可以放置
        self.cloneEl.style.cursor = 'pointer';
      } else {
        // 不可以放
        self.cloneEl.style.cursor = 'not-allowed';
      }

      self.cloneEl.style.left = `${self.baseX + incrementX}px`;
      self.cloneEl.style.top = `${self.baseY + incrementY}px`;
    }
    // 是无限画布
    else if (self.ismovecanput) {
      const boundaryDetection = moveInTargetEls.boundaryDetection;
      const { /* condition, */rect/* , el */ } = boundaryDetection[0];

      // if (condition.top) {
      //   self.cloneEl.style.top = `${rect.top}px`;
      // }
      //
      // if (condition.left) {
      //   self.cloneEl.style.left = `${rect.left}px`;
      // }
      //
      // if (condition.bottom) {
      //   self.cloneEl.style.top = `${rect.bottom - self.cloneEl.offsetHeight}px`;
      // }
      //
      // if (condition.right) {
      //   self.cloneEl.style.left = `${rect.right - self.cloneEl.offsetWidth}px`;
      // }

      // if (!condition.top && !condition.bottom && !condition.left && !condition.right) {
      const condition = {
        left: false,
        right: false,
        top: false,
        bottom: false,
      };

      if (self.baseX + incrementX < rect.left ||
           self.baseX + incrementX + self.cloneEl.offsetWidth > rect.right
      ) {
        if (self.baseX + incrementX < rect.left) {
          self.cloneEl.style.left = `${rect.left}px`;
          condition.left = true;
        }

        if (self.baseX + incrementX + self.cloneEl.offsetWidth > rect.right) {
          self.cloneEl.style.top = `${rect.right - self.cloneEl.offsetWidth}px`;
          condition.right = true;
        }
      } else {
        self.cloneEl.style.left = `${self.baseX + incrementX}px`;
      }


      if (self.baseY + incrementY < rect.top ||
          self.baseY + incrementY + self.cloneEl.offsetHeight > rect.bottom
      ) {
        if (self.baseY + incrementY < rect.top) {
          self.cloneEl.style.top = `${rect.top}px`;
          condition.top = true;
        }

        if (self.baseY + incrementY + self.cloneEl.offsetHeight > rect.bottom) {
          self.cloneEl.style.top = `${rect.bottom - self.cloneEl.offsetHeight}px`;
          condition.bottom = true;
        }
      } else {
        self.cloneEl.style.top = `${self.baseY + incrementY}px`;
      }

      if (condition.left || condition.right || condition.top || condition.bottom) {
        if (onBoundaryDetection) {
          onBoundaryDetection(condition, boundaryDetectionScroll.bind(self));
        }
      } else if (self.boundaryDetectionHandler) {
        cancelAnimationFrame(self.boundaryDetectionHandler);
        self.boundaryDetectionHandler = null;
      }

      // } else {
      //   // self.ismovecanput = false;
      //   if (onBoundaryDetection) {
      //     onBoundaryDetection(condition, boundaryDetectionScroll);
      //   }
      // }
    } else {
      if (moveInTargetEls.complete.length > 0) {
        // 可以放置
        self.ismovecanput = true;
        console.log('ismovecanput = true');
        self.cloneEl.style.cursor = 'pointer';
      } else {
        // 不可以放
        self.cloneEl.style.cursor = 'not-allowed';
      }

      self.cloneEl.style.left = `${self.baseX + incrementX}px`;
      self.cloneEl.style.top = `${self.baseY + incrementY}px`;
      console.log('222');
    }
  });

  // document.body mouseleave
  self.el.addEventListener('mouseleave', () => {
    if (!self.isdown) return false;
    goBack.call(self, this.sourceEl, this.targetEls);
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
    onSourceEnter,
    onSourceLeave,
    inclusionRelation = true,
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

        /**
         * 抬起的操作
         */
        self.cloneEl.addEventListener('mouseup', () => {
          debugger
          if (!self.ismove) {
            reset.call(self);
            return false;
          }

          // 非自由模式
          const moveInTargetEls = getMoveInTargetEls.call(self);
          const targetEls = [].concat(moveInTargetEls.section, moveInTargetEls.complete);
          if (moveInTargetEls.complete.length > 0) {
            // 可以放
            // target和source可能是包含关系，target包含source
            // 如果是包含关系可以放
            if (inclusionRelation) {
              Put.call(self, sourceEl, moveInTargetEls);
            } else {
              const completeTargetEls = moveInTargetEls.complete;
              let flag = false;
              for (let i = 0; i < completeTargetEls.length; i++) {
                const index = Array.from(completeTargetEls[i].querySelectorAll(`.${selectorPrefix}source`)).findIndex((el) => {
                  return el === sourceEl;
                });

                // 是兄弟的关系
                if (index === -1) {
                  flag = true;
                  break;
                }
              }

              // 有兄弟
              if (flag) {
                Put.call(self, sourceEl, moveInTargetEls);
              } else {
                // 全是爸爸
                goBack.call(self, sourceEl, targetEls);
              }
            }
          } else {
            // 不可以放
            goBack.call(self, sourceEl, targetEls);
          }
        });

        // append CloneNode
        self.el.appendChild(self.cloneEl);
      };
      handlerEntry.mousedown = handler;
      return handler;
    })());

    // 进入 mouseenter
    sourceEl.addEventListener('mouseenter', (() => {
      const handler = () => {
        sourceEl.style.cursor = 'move';
        if (onSourceEnter) {
          onSourceEnter(sourceEl);
        }
      };
      handlerEntry.mouseenter = handler;
      return handler;
    })());

    // 移出 mouseleave
    sourceEl.addEventListener('mouseleave', (() => {
      const handler = () => {
        sourceEl.style.cursor = 'default';
        if (onSourceLeave) {
          onSourceLeave(sourceEl);
        }
      };
      handlerEntry.mouseover = handler;
      return handler;
    })());

    // 记录mousedonw,mouseenter,mouseover事件的句柄
    self.sourceEventHanlder.set(sourceEl, handlerEntry);
  }
}

/**
 * Put
 * @param {HTMLElement} sourceEl
 * @param {Array<HTMLElement>} moveInTargetEls
 * @access private
 */
function Put(sourceEl, moveInTargetEls) {
  const self = this;
  const targetEls = [].concat(moveInTargetEls.section, moveInTargetEls.complete);
  const { onPutSuccess, isDragSourceExist = true } = self.config;
  if (onPutSuccess) {
    // 返给用的是原始节点克隆后的节点
    const cloneRect = self.cloneEl.getBoundingClientRect();
    const cloneSourceEl = sourceEl.cloneNode(true);
    cloneSourceEl.style.visibility = 'visible';
    cloneSourceEl.style.cursor = 'default';
    const isPut = onPutSuccess({
      cloneSourceEl,
      sourceEl,
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
      naturalRelease: {
        fn: naturalRelease,
        context: self,
      },
    });


    if (isPut) {
      // 放了
      if (!isDragSourceExist) {
        if (self.sourceEl) {
          self.sourceEl.parentElement.removeChild(self.sourceEl);
          self.sourceEl = null;
        }
      }

      reset.call(self, targetEls);
    } else {
      // 没放
      goBack.call(self, sourceEl, targetEls);
    }
  }
}

/**
 * getMoveInTargetEls
 * @access private
 */
function getMoveInTargetEls() {
  const completeResult = [];
  const sectionResult = [];
  const boundaryDetection = [];

  const cloneElRect = this.cloneEl.getBoundingClientRect();

  const { dragTargetExtendClasses = [] } = this.config;

  const targetEls = this.targetEls;
  for (let i = 0; i < targetEls.length; i++) {
    const targetEl = targetEls[i];
    const rect = targetEl.getBoundingClientRect();

    // 进入了target
    if (
      (
        (cloneElRect.left >= rect.left && cloneElRect.left <= rect.right) ||
        (cloneElRect.right >= rect.left && cloneElRect.right <= rect.right)
      ) &&
      (
        (cloneElRect.top >= rect.top && cloneElRect.top <= rect.bottom) ||
        (cloneElRect.bottom >= rect.top && cloneElRect.bottom <= rect.bottom)
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

      if (
        (
          (cloneElRect.left >= rect.left && cloneElRect.left <= rect.right) &&
          (cloneElRect.right >= rect.left && cloneElRect.right <= rect.right)
        ) &&
        (
          (cloneElRect.top >= rect.top && cloneElRect.top <= rect.bottom) &&
          (cloneElRect.bottom >= rect.top && cloneElRect.bottom <= rect.bottom)
        )
      ) {
        // 完全进入
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


    // 不管进步进入target都去走边缘检查
    // 只有完全进入的才进行边缘检测
    // (上 | 下 | 左 | 右) 看那些条件符合
    const condition = {
      top: false,
      bottom: false,
      left: false,
      right: false,
    };
    if (cloneElRect.top < rect.top) {
      condition.top = true;
    }
    if (cloneElRect.bottom > rect.bottom) {
      condition.bottom = true;
    }
    if (cloneElRect.left < rect.left) {
      condition.left = true;
    }
    if (cloneElRect.right > rect.right) {
      condition.right = true;
    }

    // console.log(cloneElRect, rect);

    boundaryDetection.push({
      el: targetEl,
      condition,
      rect,
    });
  }

  return {
    complete: completeResult,
    section: sectionResult,
    boundaryDetection,
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
    self.el.removeChild(self.cloneEl);
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
  self.isdown = false;
  self.ismove = false;
  self.baseX = null;
  self.baseY = null;
  self.preX = null;
  self.preY = null;
  self.firstX = null;
  self.firstY = null;
  self.cloneEl = null;
  self.sourceEl = null;
  self.ismovecanput = false;
  if (self.boundaryDetectionHandler) {
    cancelAnimationFrame(self.boundaryDetectionHandler);
    self.boundaryDetectionHandler = null;
  }
}

/**
 * 自然的放
 * @param {HTMLElement} - targetEl 放哪
 * @param {HTMLElement} - sourceEl 谁放
 * @access private
 */
function naturalRelease(targetEl, sourceEl) {
  const self = this;
  const cloneRect = self.cloneEl.getBoundingClientRect();

  // cloneEl的getBoundingClientRect的left,top
  const cleft = cloneRect.left;
  const ctop = cloneRect.top;

  // 很大的那个元素
  const rect = targetEl.getBoundingClientRect();

  // 真正元素的left和right
  // left: cloneEl的视口left-父亲视口left
  // top: cloneEl的视口top-父亲视口top
  const left = cleft - rect.left;
  const top = ctop - rect.top;

  // 落户的节点
  // left和top的赋值
  sourceEl.style.position = 'absolute';
  sourceEl.style.left = `${left}px`;
  sourceEl.style.top = `${top}px`;
  // const parentEl = Dom6.createElement(`<li style="position: absolute;left: ${left}px;top: ${top}px;"></li>`);
  // parentEl.appendChild(cloneEl);

  // 放入很大的节点
  targetEl.appendChild(sourceEl);
}

/**
 * 到达边缘的无限滚动
 * boundaryDetectionScroll
 * @param {Object} - condition
 * @param {HTMLElement} - targetEl
 * @access private
 */
function boundaryDetectionScroll({ top, bottom, left, right }, targetEl) {
  const self = this;
  if (top) {
    if (targetEl.scrollTop !== 0) {
      if (targetEl.scrollTop - scrollStep < 0) {
        targetEl.scrollTop = 0;
        // if (self.boundaryDetectionHandler) {
        //   cancelAnimationFrame(self.boundaryDetectionHandler);
        //   self.boundaryDetectionHandler = null;
        // }
      } else {
        targetEl.scrollTop -= scrollStep;
        // self.boundaryDetectionHandler = requestAnimationFrame(() => {
        //   boundaryDetectionScroll.call(self, { top, bottom, left, right }, targetEl);
        // });
      }
    }
  }

  if (bottom) {
    if (targetEl.scrollTop !== targetEl.scrollHeight) {
      if (targetEl.scrollTop + scrollStep > targetEl.scrollHeight) {
        targetEl.scrollTop = targetEl.scrollerHeight;
        // if (self.boundaryDetectionHandler) {
        //   cancelAnimationFrame(self.boundaryDetectionHandler);
        //   self.boundaryDetectionHandler = null;
        // }
      } else {
        targetEl.scrollTop += scrollStep;
        // self.boundaryDetectionHandler = requestAnimationFrame(() => {
        //   boundaryDetectionScroll.call(self, { top, bottom, left, right }, targetEl);
        // });
      }
    }
  }

  if (left) {
    if (targetEl.scrollLeft !== 0) {
      if (targetEl.scrollLeft - scrollStep < 0) {
        targetEl.scrollLeft = 0;
        // if (self.boundaryDetectionHandler) {
        //   cancelAnimationFrame(self.boundaryDetectionHandler);
        //   self.boundaryDetectionHandler = null;
        // }
      } else {
        targetEl.scrollLeft -= scrollStep;
        // self.boundaryDetectionHandler = requestAnimationFrame(() => {
        //   boundaryDetectionScroll.call(self, { top, bottom, left, right }, targetEl);
        // });
      }
    }
  }

  if (right) {
    if (targetEl.scrollLeft !== targetEl.scrollWidth) {
      if (targetEl.scrollLeft + scrollStep > targetEl.scrollWidth) {
        targetEl.scrollLeft = targetEl.scrollWidth;
        // if (self.boundaryDetectionHandler) {
        //   cancelAnimationFrame(self.boundaryDetectionHandler);
        //   self.boundaryDetectionHandler = null;
        // }
      } else {
        targetEl.scrollLeft += scrollStep;
        // self.boundaryDetectionHandler = requestAnimationFrame(() => {
        //   boundaryDetectionScroll.call(self, { top, bottom, left, right }, targetEl);
        // });
      }
    }
  }
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
    this.targetEls = this.el.querySelectorAll(`.${selectorPrefix}target`);
    this.isdown = false; // 是否按下了
    this.ismove = false; // 是否move了
    this.baseX = null;
    this.baseY = null; // 节点原始距离page的坐标
    this.preX = null;
    this.preY = null;
    this.firstX = null;
    this.firstY = null; // 第一次点击时page的坐标
    this.cloneEl = null;
    this.sourceEl = null;
    this.ismovecanput = false; // 是否成功移动到target内部
    this.boundaryDetectionHandler = null;

    initEvents.call(this);
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
    this.sourceEls = this.el.querySelectorAll(`.${selectorPrefix}source`);
    this.targetEls = this.el.querySelectorAll(`.${selectorPrefix}target`);
    initDragSourceEvent.call(this);
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
