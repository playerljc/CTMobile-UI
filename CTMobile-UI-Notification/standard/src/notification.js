import { Events, Dom6, uuid } from '@ctmobile/ui-util';

const defaultConfig = {
  style: 'material',
  type: 'top',
};
const className = ['ct', 'notification'];

/**
 * init
 * @access private
 */
function init() {
  this.config = Object.assign({}, defaultConfig, this.config);
  this.el.classList.remove([].concat(className).concat([
    (this.config.type === 'top' ? 'bottom' : 'top'),
    this.config.style,
  ]).join('-'));

  this.el.classList.add([].concat(className).concat([
    this.config.type,
    this.config.style,
  ]).join('-'));
}

/**
 * initEvents
 * @access private
 */
function initEvents() {
  const self = this;

  if (this.config.listeners) {
    const { listeners = {} } = this.config;
    const keys = Object.keys(listeners);
    for (let i = 0; i < keys.length; i += 1) {
      const p = keys[i];
      this.events.on(p, listeners[p]);
    }
  }

  this.notificationEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('closeBtn')) {
      closeNotification.call(self, e.target.parentNode.dataset.id);
    }
  });
}

/**
 * 点击删除通知
 * closeNotification
 * @param {string} id
 * @access private
 */
function closeNotification(id) {
  if (this.key) return;
  this.key = true;

  const self = this;
  const n = this.notifications[id];

  function transitionendAction() {
    n.removeEventListener('transitionend', transitionendAction);
    self.notificationEl.removeChild(n);
    self.key = false;
    // closeAfter
    self.events.trigger('closeAfter', n);
  }

  // closeBefore
  this.events.trigger.apply(self, ['closeBefore', n]);
  n.addEventListener('transitionend', transitionendAction);
  n.style.overflow = 'hidden';
  n.querySelector('.info').style.opacity = '0';
  n.style.height = '0';
}


/**
 * buildStandard
 * @param config {
 *  headerLabel: string,
 *  headerIcon: string,
 *  title:string,
 *  text:string,
 *  icon:string,
 *  closed:boolean,
 *  datetime:string
 * }
 * @return {string} id
 * @access private
 */
function buildStandard({ headerLabel = '', headerIcon = '', title = '', text = '', icon = '', closed = true, datetime = '' }) {
  const self = this;

  const id = uuid(6);
  const n = Dom6.createElement(
    `<li data-id="${id}">
       <div class="info">
          <div class="ct-notification-standard-header">
             <div class="ct-notification-standard-header-icon">${headerIcon ? `<img src="${headerIcon}">` : ''}</div>
             <div class="ct-notification-standard-header-label">${headerLabel || ''}</div>
          </div>
          <div class="ct-notification-standard-content">
             <div class="ct-notification-standard-content-media-l">${icon ? `<img src="${icon}">` : ''}</div>
             <div class="ct-notification-standard-content-row">
               <div class="ct-notification-standard-content-row-title">${title || ''}</div>
               <div class="ct-notification-standard-content-row-text">${text || ''}</div>
             </div>
             <div class="ct-notification-standard-content-media-r">${datetime || ''}</div>
          </div>
       </div>${closed ? '<span class="closeBtn"></span>' : ''}
    </li>`
  );

  return build.call(self, id, n);
}

/**
 * buildCustom
 * @param config
 * @return {string} id
 */
function buildCustom({ html = '', closed = true }) {
  const id = uuid(6);
  const n = Dom6.createElement(
    `<li data-id="${id}">
       <div class="info">${html}</div>${closed ? '<span class="closeBtn"></span>' : ''}
    </li>`
  );

  return build.call(this, id, n);
}

/**
 * build
 * 创建一个notification
 * @param {string} id
 * @param {HtmlElement} n
 * @access private
 * @return {string} id
 */
function build(id, n) {
  const self = this;

  this.notifications[id] = n;
  this.notificationEl.appendChild(n);

  // oncreate
  this.events.trigger('create', n);

  n.style.height = 'auto';

  let targetHeight = n.clientHeight/* window.getComputedStyle(n).height */;
  // 会有最小高度的限制
  if (self.config.style === 'material') {
    if (targetHeight < 40) {
      targetHeight = 40;
    }
  } else if (self.config.style === 'ios') {
    if (targetHeight < 70) {
      targetHeight = 70;
    }
  }
  n.style.height = '0';

  setTimeout(() => {
    n.style.height = `${targetHeight}px`;
    n.querySelector('.info').style.opacity = '1';
    self.events.trigger('show', n);
  }, 100);

  return id;
}

/**
 * Notification
 * @class Notification
 * @classdesc Notification
 */
class Notification {
  /**
   * constructor
   * @param {HtmlElement} el
   * @param {object} config
   * {
   *     html: html[html字符串],
   *     style: 风格 [ios | material],
   *     type : 类型 [top | bottom],
   *     listeners:{
   *          create:
   *          show:
   *          close:
   *     }
   * }
   */
  constructor(el, config) {
    this.config = config;
    this.el = el;
    // 存放所有的notification
    this.notifications = {};
    this.key = false;
    this.notificationEl = this.el.children[0];
    this.events = new Events();
    init.call(this);
    initEvents.call(this);
  }

  /**
   * show
   * @param {Object} config
   * @return {string} id
   */
  show(config) {
    return buildCustom.call(this, config);
  }

  /**
   * showStandard
   * @param {Object} config
   * @return {string} id
   */
  showStandard(config) {
    return buildStandard.call(this, config);
  }

  /**
   * close
   * @param {string} id
   */
  close(id) {
    closeNotification.call(this, id);
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
 * Notification
 * @param {HtmlElement} el
 * @param {object} config
 * @return {Notification}
 */
export default function (el, config) {
  return new Notification(el, config);
}
