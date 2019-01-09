import IScroll from 'iscroll/build/iscroll';

/**
 * initMenuScroll
 * @access private
 */
function initMenuScroll() {
  this.scroll = new IScroll(this.menuDom, {mouseWheel: true, click: true});
  this.menuDom.addEventListener('touchmove', function (e) {
    e.preventDefault();
  });
}

/**
 * initEvents
 * @access private
 */
function initEvents() {
  const self = this;
  this.menuULDom.addEventListener('click', function (e) {
    const target = e.target;
    scrollTo.call(self, target);
  });
}

/**
 * scrollTo
 * 滚动到指定的元素处
 * @access private
 * @param {HtmlElement} target
 * @param {Number} time
 * @param {string} easing
 */
function scrollTo(target, time = 250, easing) {
  easing = easing || this.ease.circular;
  const self = this;

  self.scroll.scrollToElement(target.parentElement, time, null, null, easing);

  this.menuULDom.querySelector(`[data-index="${this.activeIndex}"]`).parentNode.classList.remove('cur');
  target.parentNode.classList.add('cur');
  const tabDoms = self.tabDom.children;
  tabDoms[this.activeIndex].classList.remove('cur');
  tabDoms[parseInt(target.dataset.index)].classList.add('cur');

  this.activeIndex = parseInt(target.dataset.index);

  if (self.event && self.event.change) {
    self.event.change.handler(target.dataset.index, target, tabDoms[this.activeIndex]);
  }
}

/**
 * initVar
 * @access private
 */
function initVar() {
  this.menuDom = this.el.querySelector('.ct-jdcategorytab-menu');
  this.menuULDom = this.menuDom.querySelector('ul');
  this.tabDom = this.el.querySelector('.ct-jdcategorytab-tab');
}


/**
 * JdCategoryTab
 * @class JdCategoryTab
 * @classdesc JdCategoryTab
 */
class JdCategoryTab {
  /**
   * @constructor
   */
  constructor(el, activeIndex) {
    this.el = el;
    this.activeIndex = activeIndex;
    initVar.call(this);
    initMenuScroll.call(this);
    initEvents.call(this);
    this.refresh();
    this.menuULDom.querySelector(`[data-index="${this.activeIndex}"]`).parentNode.classList.add('cur');
  }

  ease = IScroll.utils.ease;

  /**
   * on
   * @param {string} type
   * @param {Function} handler
   */
  on(type, handler) {
    if (!this.event) {
      this.event = {};
    }

    this.event[type] = {
      type: type,
      handler: handler
    }
  }

  /**
   * refresh
   */
  refresh() {
    const doms = this.menuULDom.querySelectorAll('li > a');
    for (let i = 0; i < doms.length; i++) {
      doms[i].dataset.index = i;
    }
    this.scroll.refresh();
  }

  /**
   * scrollTo
   * @param {Number} index
   * @param {Number} time
   * @param {string} easing
   */
  scrollTo(index, time = 250, easing) {
    const target = this.menuULDom.querySelector(`[data-index='${index}']`);
    scrollTo.call(this, target, time, easing);
  }
}

/**
 * JdCategoryTabFactory
 * @param {HtmlElement} el
 * @param {number} activeIndex
 * @return {JdCategoryTab}
 */
export default function (el, activeIndex = 0) {
  return new JdCategoryTab(el, activeIndex);
}