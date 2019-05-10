import { Events, Dom6 } from '@ctmobile/ui-util';

/**
 * parent: dom元素
 * width: 宽度 left和right时才有效，top和bottom无效
 * height: left和right无效 top和bottom有效
 * mask: boolean 是否有遮罩
 * zIndex: number 层级 9999
 * type:[overlay(覆盖) | reveal(揭示) | push(推动)],
 * time:300ms number
 * direction: overlay : [left | right | top | bottom]
 *            reveal :  [left | right]
 *            push :    [left | right]
 *
 * 基本布局：
 *     overlay:<div class="ct-sidepanel-overlay"></div>
 *
 *     reveal: <div class="ct-sidepanel-reveal"></div>
 *             <div class="ct-sidepanel-reveal-master"></div>
 *
 *     push:   <div class="ct-sidepanel-push-master">
 *                <div class="ct-sidepanel-push"></div>
 *                <div class="ct-sidepanel-push-slave"></div>
 *             </div>
 */
const selectorPrefix = 'ct-sidepanel-';
const positionConfig = {
  init: {
    overlay: {
      left() {
        silder.call(this, this.el, '-100%', 0, 0, 0);
      },
      right() {
        silder.call(this, this.el, `${document.body.offsetWidth}px`, 0, 0, 0);
      },
      top() {
        silder.call(this, this.el, 0, '-100%', 0, 0);
      },
      bottom() {
        silder.call(this, this.el, 0, `${document.body.offsetHeight}px`, 0, 0);
      },
    },
    reveal: {
      left() {
        this.el.style.zIndex = this.config.zIndex;
        this.rMasterEl.style.zIndex = this.config.zIndex + 1;
        this.el.style.left = '0';
      },
      right() {
        this.el.style.zIndex = this.config.zIndex;
        this.rMasterEl.style.zIndex = this.config.zIndex + 1;
        this.el.style.right = '0';
      },
    },
    push: {
      left() {
        this.el.style.left = '0';
        this.pSlaveEl.style.left = `${this.el.offsetWidth}px`;
        silder.call(this, this.pMasterEl, `-${this.el.offsetWidth}px`, 0, 0, 0);
      },
      right() {
        this.el.style.right = '0';
        this.pSlaveEl.style.right = `${this.el.offsetWidth}px`;
        silder.call(this, this.pMasterEl, `${this.el.offsetWidth}px`, 0, 0, 0);
      },
    },
  },
  show: {
    overlay: {
      left() {
        silder.call(this, this.el, 0, 0, 0, `${this.config.time}ms`, afterShowCallback);
        if (this.maskEl) this.maskEl.style.display = 'block';
      },
      right() {
        silder.call(this, this.el, `${document.body.offsetWidth - this.el.offsetWidth}px`, 0, 0, `${this.config.time}ms`, afterShowCallback);
        if (this.maskEl) this.maskEl.style.display = 'block';
      },
      top() {
        silder.call(this, this.el, 0, 0, 0, `${this.config.time}ms`, afterShowCallback);
        if (this.maskEl) this.maskEl.style.display = 'block';
      },
      bottom() {
        silder.call(this, this.el, 0, `${document.body.offsetHeight - this.el.offsetHeight}px`, 0, `${this.config.time}ms`, afterShowCallback);
        if (this.maskEl) this.maskEl.style.display = 'block';
      },
    },
    reveal: {
      left() {
        this.el.style.zIndex = this.config.zIndex;
        this.maskEl.style.zIndex = this.config.zIndex - 1;
        this.rMasterEl.style.zIndex = this.config.zIndex - 2;

        silder.call(this, this.rMasterEl, `${this.el.offsetWidth}px`, 0, 0, `${this.config.time}ms`, afterShowCallback);
        if (this.maskEl) this.maskEl.style.display = 'block';
      },
      right() {
        this.el.style.zIndex = this.config.zIndex;
        this.maskEl.style.zIndex = this.config.zIndex - 1;
        this.rMasterEl.style.zIndex = this.config.zIndex - 2;

        silder.call(this, this.rMasterEl, `-${this.el.offsetWidth}px`, 0, 0, `${this.config.time}ms`, afterShowCallback);
        if (this.maskEl) this.maskEl.style.display = 'block';
      },
    },
    push: {
      left() {
        silder.call(this, this.pMasterEl, 0, 0, 0, `${this.config.time}ms`, afterShowCallback);
        if (this.maskEl) this.maskEl.style.display = 'block';
      },
      right() {
        silder.call(this, this.pMasterEl, 0, 0, 0, `${this.config.time}ms`, afterShowCallback);
        if (this.maskEl) this.maskEl.style.display = 'block';
      },
    },
  },
  close: {
    overlay: {
      left() {
        silder.call(this, this.el, '-100%', 0, 0, `${this.config.time}ms`, afterCloseCallback);
        if (this.maskEl) this.maskEl.style.display = 'none';
      },
      right() {
        silder.call(this, this.el, `${document.body.offsetWidth}px`, 0, 0, `${this.config.time}ms`, afterCloseCallback);
        if (this.maskEl) this.maskEl.style.display = 'none';
      },
      top() {
        silder.call(this, this.el, 0, `-${document.body.offsetHeight}px`, 0, `${this.config.time}ms`, afterCloseCallback);
        if (this.maskEl) this.maskEl.style.display = 'none';
      },
      bottom() {
        silder.call(this, this.el, 0, `${document.body.offsetHeight}px`, 0, `${this.config.time}ms`, afterCloseCallback);
        if (this.maskEl) this.maskEl.style.display = 'none';
      },
    },
    reveal: {
      left() {
        this.el.style.zIndex = this.config.zIndex;
        this.rMasterEl.style.zIndex = this.config.zIndex + 1;
        silder.call(this, this.rMasterEl, 0, 0, 0, `${this.config.time}ms`, afterCloseCallback);
        if (this.maskEl) this.maskEl.style.display = 'none';
      },
      right() {
        this.el.style.zIndex = this.config.zIndex;
        this.rMasterEl.style.zIndex = this.config.zIndex + 1;
        silder.call(this, this.rMasterEl, 0, 0, 0, `${this.config.time}ms`, afterCloseCallback);
        if (this.maskEl) this.maskEl.style.display = 'none';
      },
    },
    push: {
      left() {
        silder.call(this, this.pMasterEl, `-${this.el.offsetWidth}px`, 0, 0, `${this.config.time}ms`, afterCloseCallback);
        if (this.maskEl) this.maskEl.style.display = 'none';
      },
      right() {
        silder.call(this, this.pMasterEl, `${this.el.offsetWidth}px`, 0, 0, `${this.config.time}ms`, afterCloseCallback);
        if (this.maskEl) this.maskEl.style.display = 'none';
      },
    },
  },
};

/**
 * createMask
 * @access private
 */
function createMask() {
  const self = this;
  const maskEl = Dom6.createElement(`<div class='${selectorPrefix}mask'></div>`); // 9997
  maskEl.style.zIndex = self.config.zIndex - 1;
  maskEl.addEventListener('click', () => {
    self.close();
  });
  return maskEl;
}

/**
 * initEvents
 * @access private
 */
function initEvents() {
  if (this.config.listeners) {
    const { listeners = {} } = this.config;
    const keys = Object.keys(listeners);
    for (let i = 0; i < keys.length; i += 1) {
      const p = keys[i];
      this.events.on(p, listeners[p]);
    }
  }
}

/**
 * init
 * @access private
 */
function init() {
  const { config, el/* , maskEl */ } = this;

  if (config.direction === 'left' || config.direction === 'right') {
    // 赋值宽度
    el.style.height = '100%';
    // if (maskEl) maskEl.style.height = '100%';
    config.width ? el.style.width = config.width : el.style.width = `${document.body.offsetWidth * 0.9}px`;
  } else {
    // 赋值高度
    el.style.width = '100%';
    // if (maskEl) maskEl.style.height = '100%';
    config.height ? el.style.height = config.height : el.style.height = `${document.body.offsetHeight * 0.3}px`;
  }

  // 赋值默认位置
  positionConfig.init[config.type][config.direction].call(this);
}

/**
 * 平移
 * @param {HtmlElement} el
 * @param {String} x
 * @param {String} y
 * @param {String} z
 * @param {String} time
 * @param {Function} callback
 * @access private
 */
function silder(el, x = '0', y = '0', z = '0', time = '0', callback) {
  if (callback) {
    callback.call(this, el);
  }
  el.style.transform = el.style.webkitTransform = `translate3d(${x},${y},${z})`;
  el.style.transition = el.style.webkitTransition = `all ${time} ease`;
}

/**
 * 显示之后的事件触发
 * @param {HTMLElement} el
 * @access private
 */
function afterShowCallback(el) {
  const self = this;

  function onTransitionend(e) {
    e.stopPropagation();
    self.events.trigger('afterShow', self);
    el.removeEventListener('afterShow', onTransitionend);
  }

  el.addEventListener('transitionend', onTransitionend);
}

/**
 * 关闭之后的事件触发
 * @param {HTMLElement} el
 * @access private
 */
function afterCloseCallback(el) {
  const self = this;

  function onTransitionend(e) {
    e.stopPropagation();
    self.events.trigger('afterClose', self);
    el.removeEventListener('afterClose', onTransitionend);
  }

  el.addEventListener('transitionend', onTransitionend);
}

/**
 * SidePanel
 * @class SidePanel
 * @classdesc SidePanel
 */
class SidePanel {
  /**
   * constructor
   * @constructor
   * @param {HtmlElement} el
   * @param {object} config
   */
  constructor(el, config) {
    this.el = el; // 9999
    this.config = Object.assign({ mask: true, type: 'overlay', direction: 'left', time: 300, zIndex: 9999 }, config);

    this.rMasterEl = this.el.parentNode.querySelector(`.${selectorPrefix}reveal-master`);
    this.pMasterEl = this.el.parentNode;
    this.pSlaveEl = this.pMasterEl ? this.pMasterEl.querySelector(`.${selectorPrefix}push-slave`) : null; // 9998

    this.el.style.zIndex = this.config.zIndex;
    if (this.rMasterEl) this.rMasterEl.style.zIndex = this.config.zIndex + 1;
    if (this.pMasterEl) this.pMasterEl.style.zIndex = this.config.zIndex - 1;
    if (this.pSlaveEl) this.pSlaveEl.style.zIndex = this.config.zIndex - 2;

    this.collapse = false;

    this.el.classList.add(this.config.direction);

    this.events = new Events();

    // 创建遮罩插入到panel之后
    if (config.mask) {
      this.maskEl = createMask.call(this);
      Dom6.insertAfter(this.maskEl, this.el);
    }

    initEvents.call(this);

    init.call(this);

    this.events.trigger('create', this);
  }

  /**
   * show
   * @return {SidePanel}
   */
  show() {
    this.events.trigger('beforeShow', this);

    const { config: { type, direction } } = this;

    positionConfig.show[type][direction].call(this);

    this.collapse = true;

    return this;
  }

  /**
   * close
   * @return {SidePanel}
   */
  close() {
    this.events.trigger('beforeClose', this);

    const { config: { type, direction } } = this;

    positionConfig.close[type][direction].call(this);

    this.collapse = false;

    return this;
  }

  /**
   * isCollapse
   * @returns {boolean}
   */
  isCollapse() {
    return this.collapse;
  }

  /**
   * on 注册事件
   * @param {string} type
   * @param {Function} handler
   */
  on(type, handler) {
    this.events.on(type, handler);
  }

  /**
   * 删除指定type下的事件或清除所有
   * @param {string} type
   * @param {Function} handler
   */
  off(type, handler) {
    if (type) {
      if (handler) {
        this.events.remove(type, handler);
      } else {
        this.events.clear(type);
      }
    } else {
      this.events.clearAll();
    }
  }
}

/**
 * SidePanel
 * @param {HtmlElement} el
 * @param {object} config
 * @return {SidePanel}
 */
export default function (el, config) {
  return new SidePanel(el, config);
}
