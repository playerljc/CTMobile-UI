import { Dom6, Events } from '@ctmobile/ui-util';

/**
 * 显示
 * @access private
 * @param {HtmlElement} contentEl
 */
function show(contentEl) {
  const optionEl = contentEl.querySelector('.ct-list-kw-item-option');
  const buttonsEl = contentEl.querySelector('.ct-list-kw-item-buttons');

  if (this.preContentEl && (contentEl !== this.preContentEl)) {
    hide.call(this, this.preContentEl);
  }

  optionEl.classList.add('activity');
  buttonsEl.style.display = 'flex';

  if (contentEl !== this.preContentEl) {
    this.preContentEl = contentEl;
  }

  this.events.trigger('show', contentEl, contentEl.dataset.index);
}

/**
 * 隐藏
 * @access private
 * @param {HtmlElement} contentEl
 */
function hide(contentEl) {
  const optionEl = contentEl.querySelector('.ct-list-kw-item-option');
  const buttonsEl = contentEl.querySelector('.ct-list-kw-item-buttons');

  optionEl.classList.remove('activity');
  buttonsEl.style.display = 'none';

  this.events.trigger('hide', contentEl, contentEl.dataset.index);
}

/**
 *  initEvents
 *  @access private
 */
function initEvents() {
  const self = this;

  // 点击操作按钮的事件监听
  this.el.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('ct-list-kw-item-option')) {
      const contentEl = Dom6.getTopDom(target, 'ct-list-kw-item-content');
      if (target.classList.contains('activity')) {
        hide.call(self, contentEl);
      } else {
        show.call(self, contentEl);
      }
    }
  });
}

/**
 * KwList
 * @class KwList
 * @classdesc KwList
 */
class KwList {
  /**
   * constructor
   * @constructor
   * @param el
   */
  constructor(el) {
    this.el = el;
    this.events = new Events();
    this.refresh();
    initEvents.call(this);
  }

  /**
   * 刷新
   */
  refresh() {
    const contentEls = this.el.querySelectorAll('.ct-list-kw-item-content');
    for (let i = 0; i < contentEls.length; i++) {
      contentEls[i].dataset.index = i;
    }
  }

  /**
   * on
   * @param {string} type
   * @param {Function} handler
   */
  on(type, handler) {
    this.events.on(type, handler);
  }

  /**
   * expand
   * @param {number} index
   */
  expand(index) {
    const contentEl = this.el.querySelector(`.ct-list-kw-item-content[data-index='${index}']`);
    show.call(this, contentEl);
  }

  /**
   * close
   * @param {number} index
   */
  close(index) {
    const contentEl = this.el.querySelector(`.ct-list-kw-item-content[data-index='${index}']`);
    hide.call(this, contentEl);
  }
}

/**
 * KwListFactory
 * @param {HtmlElement} el
 * @return {KwList}
 */
export default function (el) {
  return new KwList(el);
}
