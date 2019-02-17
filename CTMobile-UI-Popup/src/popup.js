import { Dom6, Events } from '@ctmobile/ui-util';

let prePopup;
let maskEl;
let el = document.body;

/**
 * bindEvents
 * @access private
 */
function bindEvents() {
  this.onInnerElTransitionend = this.onInnerElTransitionend.bind(this);
  this.onMaskElTransitionend = this.onMaskElTransitionend.bind(this);
}

/**
 * initEvents
 * @access private
 */
function initEvents() {
  if (this.config && this.config.listeners) {
    const { listeners = {} } = this.config;
    const keys = Object.keys(listeners);
    for (let i = 0; i < keys.length; i += 1) {
      const p = keys[i];
      this.events.on(p, listeners[p]);
    }
  }

  this.innerEl.addEventListener('transitionend', this.onInnerElTransitionend);
}

/**
 * LinkCaptureShow
 * @param {HtmlElement} - target
 * @access private
 * @return {boolean}
 */
function LinkCaptureShow(target) {
  // 不是a元素
  if (
    target.tagName.toLocaleLowerCase() !== 'a' &&
    !(target = Dom6.getParentElementByTag(target, 'a'))
  ) {
    return false;
  }

  const popupId = target.dataset.popup;
  if (!popupId) return false;

  if (!prePopup || (prePopup && (prePopup.getId() !== popupId))) {
    PopupFactory.show(PopupFactory.create(
      document.getElementById(popupId)
    ));
  } else {
    return false;
  }

  return true;
}

/**
 * LinkCaptureClose
 * @param {HtmlElement} - target
 * @access private
 * @return {boolean}
 */
function LinkCaptureClose(target) {
  // 不是a元素
  if (
    target.tagName.toLocaleLowerCase() !== 'a' &&
    !(target = Dom6.getParentElementByTag(target, 'a'))
  ) {
    return false;
  }

  if (!('close' in target.dataset)) return false;

  PopupFactory.closeAll();

  return true;
}

/**
 * CaptureElement
 * @access private
 */
const CaptureElement = (function () {
  const chain = [LinkCaptureShow, LinkCaptureClose];

  return function () {
    document.body.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target;
      if (!target) return false;

      for (let i = 0; i < chain.length; i++) {
        const CaptureTarget = chain[i];
        const flag = CaptureTarget(target);
        if (flag) break;
      }
    });
  };
}());

/**
 * createMask
 * @access private
 */
function createMask() {
  maskEl = Dom6.createElement('<div class="ct-popup-mask"></div>');
  el.appendChild(maskEl);
  maskEl.addEventListener('transitionend', this.onMaskElTransitionend);
}

/**
 * Popup
 * @class Popup
 * @classdesc Popup
 */
class Popup {
  /**
   * constructor
   * @param {HtmlElement} - tel <template>的el
   * @param config {Object} - config
   */
  constructor(tel, config = {}) {
    this.isShow = false;
    this.tel = tel;
    this.el = el;
    this.id = this.tel.id;
    this.config = config;
    this.events = new Events();
    this.innerEl = this.tel.content.querySelector('.ct-popup').cloneNode(true);
    bindEvents.call(this);
    initEvents.call(this);
    this.el.appendChild(this.innerEl);
    this.events.trigger('create', this.innerEl);
    Events.trigger('ct-popup-event-create', this, this.innerEl);
  }

  /**
   * 显示一个popup
   */
  show() {
    if (!maskEl) {
      createMask.call(this);
    }
    if (prePopup) {
      prePopup.close();
    }
    maskEl.style.display = 'block';
    this.innerEl.style.display = 'block';
    this.isShow = true;
    this.events.trigger('beforeshow');
    Events.trigger('ct-popup-event-beforeshow', this);
    setTimeout(() => {
      maskEl.classList.add('modal-in');
      this.innerEl.classList.add('modal-in');
    }, 100);
  }

  /**
   * 关闭一个popup
   */
  close() {
    if (!maskEl) {
      createMask.call(this);
    }

    this.isShow = false;
    this.events.trigger('beforeclose');
    Events.trigger('ct-popup-event-beforeclose', this);
    this.innerEl.classList.remove('modal-in');
    maskEl.classList.remove('modal-in');
  }

  /**
   * 销毁一个popup
   */
  distory() {
    this.innerEl.parentNode.removeChild(this.innerEl);
    this.innerEl = null;
    this.events.trigger('distory');
    Events.trigger('ct-popup-event-distory', this);
  }

  /**
   * onInnerElTransitionend
   */
  onInnerElTransitionend() {
    if (!this.isShow) {
      prePopup = null;
      this.innerEl.style.display = 'none';
      this.events.trigger('afterclose');
      Events.trigger('ct-popup-event-afterclose', this);
    } else {
      prePopup = this;
      this.events.trigger('aftershow');
      Events.trigger('ct-popup-event-aftershow', this);
    }
  }

  /**
   * onMaskElTransitionend
   */
  onMaskElTransitionend() {
    if (!this.isShow) {
      maskEl.style.display = 'none';
    }
  }

  /**
   * 是否已经销毁
   * @return {boolean}
   */
  isDistory() {
    return !this.innerEl;
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

  /**
   * getId
   * @return {string} - id
   */
  getId() {
    return this.id;
  }
}

/**
 * PopupFactory
 */
const PopupFactory = {
  /**
   * 创建一个Popup
   * @param {HtmlElement} - tel <template>元素
   * @param {Object} - config
   * @return {Popup} - Popup
   */
  create(tel, config) {
    return new Popup(tel, config);
  },

  /**
   * 显示一个popup
   * @param {Popup} popup
   */
  show(popup) {
    if (!popup) return false;
    if (popup.isDistory()) return false;
    if (popup === prePopup) return false;
    if (prePopup && (popup.getId() === prePopup.getId())) return false;
    popup.show();
  },

  /**
   * 关闭一个popup
   * @param {Popup} popup
   */
  close(popup) {
    if (!popup) return false;
    if (popup.isDistory()) return false;
    popup.close();
  },

  /**
   * 关闭所有
   */
  closeAll() {
    if (prePopup) {
      this.close(prePopup);
    }
  },

  /**
   * 销毁一个popup
   * @param {Popup} popup
   */
  distory(popup) {
    if (!popup) return false;
    if (popup.isDistory()) return false;
    popup.distory();
  },
  /**
   * getEl
   * @return {HTMLElement}
   */
  getEl() {
    return el;
  },
  /**
   * setEl
   * @param {HtmlElement} - el
   */
  setEl(tel) {
    el = tel;
  },
};

CaptureElement();

/**
 * Factory
 */
export default PopupFactory;
