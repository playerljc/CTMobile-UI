import Swiper from 'swiper';
import { Dom6 } from '@ctmobile/ui-util';
import dom6 from '@ctmobile/ui-util/src/dom6';

const selectorPrefix = 'ct-tab-';

const defaultConfig = {
  indicator: {
    position: 'top',
    type: 'dynamic',
    slidesPerView: 3,
    activeClasses: '',
    activeStyle: '',
    theme: 'normal',
    arrow: false,
  },
  content: {
    mode: 'mulit',
    isSwiper: true,
    tabInstances: [],
    direction: 'horizontal',
  },
  initialSlide: 0,
};

/**
 * renderIndicator
 * @access private
 *
 * indicator方向 top bottom left right
 * ct-tab-indicator-position-top
 * ct-tab-indicator-position-bottom
 * ct-tab-indicator-position-left
 * ct-tab-indicator-position-right
 *
 * indicator是否是平均分配
 * ct-tab-indicator-type-dynamic
 * ct-tab-indicator-type-average
 *
 * indicator的active指示器
 */
function renderIndicator() {
  const { position, type, theme, slidesPerView, arrow } = this.config.indicator;
  const { initialSlide } = this.config;

  // 样式初始化
  this.el.classList.add(`${selectorPrefix}indicator-position-${position}`);
  this.el.classList.add(`${selectorPrefix}indicator-type-${type}`);
  if (type === 'average') {
    this.el.classList.add(`${selectorPrefix}indicator-theme-${theme}`);
  }

  const swiperIndicatorConfig = {
    init: false,
    direction: (position === 'top' || position === 'bottom') ? 'horizontal' : 'vertical',
    initialSlide,
    allowTouchMove: type !== 'average',
  };

  /**
   *  slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
   */
  if (type === 'dynamic') {
    swiperIndicatorConfig.slidesPerView = slidesPerView;
  } else {
    // swiperIndicatorConfig.slidesPerView = this.indicatorEl.querySelectorAll('> .swiper-wrapper > .swiper-slide').length;
    swiperIndicatorConfig.slidesPerView = dom6.children(this.indicatorEl.firstElementChild, 'swiper-slide').length;
  }

  this.swiperIndicator = new Swiper(this.indicatorEl, swiperIndicatorConfig);
}

/**
 * renderContent
 * @access private
 */
function renderContent() {
  const { mode, isSwiper, direction } = this.config.content;
  const { initialSlide } = this.config;

  this.el.classList.add(`${selectorPrefix}content-direction-${direction}`);

  const swiperContentConfig = {
    init: false,
    allowTouchMove: isSwiper,
    initialSlide,
    direction,
    slidesPerView: 1,
  };

  if (mode === 'single') {
    swiperContentConfig.effect = 'fade';
  }

  this.swiperContent = new Swiper(this.contentEl, swiperContentConfig);
}

/**
 * initEvent
 * @access private
 */
function initEvent() {
  const self = this;

  self.onIndicatorSlideChangeTransitionStart = self.onIndicatorSlideChangeTransitionStart.bind(this);

  self.onContentSlideChangeTransitionStart = self.onContentSlideChangeTransitionStart.bind(this);
  self.onContentSlideChangeTransitionEnd = self.onContentSlideChangeTransitionEnd.bind(this);

  this.swiperContent.on('init', () => {
    const instance = createContentInstace.call(self, self.swiperContent.activeIndex);
    triggerContent.call(self, { instance, type: 'create' });
    triggerContent.call(self, { instance, type: 'show' });
  });

  this.swiperIndicator.on('slideChangeTransitionStart', self.onIndicatorSlideChangeTransitionStart);
  this.swiperContent.on('slideChangeTransitionStart', self.onContentSlideChangeTransitionStart);
  this.swiperContent.on('slideChangeTransitionEnd', self.onContentSlideChangeTransitionEnd);

  this.indicatorEl.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.classList.contains('swiper-slide')) {
      const el = Dom6.getTopDom(target, 'swiper-slide');
      if (el && el.classList.contains('swiper-slide')) {
        const index = findIndicatorIndex.call(this, el);
        if (index !== -1) {
          if (index === this.activeIndex) return false;
          this.swiperContent.slideTo(index);
        }
      }
    }
  });
}

function findIndicatorIndex(el) {
  // const els = this.indicatorEl.querySelectorAll('> .swiper-wrapper > .swiper-slide');
  const els = dom6.children(this.indicatorEl.firstElementChild, 'swiper-slide');
  let index = -1;
  for (let i = 0; i < els.length; i++) {
    if (el === els[i]) {
      index = i;
    }
  }
  return index;
}

/**
 * createContentInstace
 * @param {number} index
 * @return {TabItem}
 * @access private
 */
function createContentInstace(index) {
  const { tabInstances = [] } = this.config.content;
  let entry = this.contentClassInstances.get(index);
  if (!entry) {
    const tabInstance = tabInstances[index] || {};
    // const contentDoms = this.contentEl.querySelectorAll('> .swiper-wrapper > .ct-tab-content-item');
    const contentDoms = dom6.children(this.contentEl.firstElementChild, 'ct-tab-content-item');
    entry = tabInstance;// new Class(index, contentDoms[index]);
    if (entry.setEl) {
      entry.setEl(contentDoms[index]);
    }
    if (entry.setIndex) {
      entry.setIndex(index);
    }
    this.contentClassInstances.set(index, entry);
  }

  return entry;
}

/**
 * getContentInstance
 * @param {Number} index
 * @return {TabItem}
 */
function getContentInstance(index) {
  return this.contentClassInstances.get(index);
}

/**
 * triggerContent
 * @param {object} params
 */
function triggerContent({ instance, type, params }) {
  if (instance[type]) {
    instance[type](params);
  }
}

/**
 * 激活
 * @param index
 */
function activeIndicatorItem(index) {
  // const els = this.indicatorEl.querySelectorAll('> .swiper-wrapper > .swiper-slide');
  const els = dom6.children(this.indicatorEl.firstElementChild, 'swiper-slide');
  for (let i = 0; i < els.length; i++) {
    const el = els[i];
    if (i == index) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  }
}

/**
 * showMask
 * @access private
 */
function showMask() {
  this.maskEl.style.display = 'block';
}

/**
 * hideMask
 * @access private
 */
function hideMask() {
  this.maskEl.style.display = 'none';
}

/**
 * TabItem
 * @class TabItem
 * @classdesc TabItem 卡片类的父类
 */
class TabItem {
  setIndex(index) {
    this.index = index;
  }

  getIndex() {
    return this.index;
  }

  setEl(el) {
    this.el = el;
  }

  getEl() {
    return this.el;
  }
}

export { TabItem };

/**
 * Tab
 * @class Tab
 * @classdesc Tab
 */
class Tab {
  /**
   * constructor
   * @param el
   * @param tel
   * @param config
   */
  constructor(el, tel, config) {
    this.parent = el;
    this.tel = tel;
    this.config = Object.assign({}, defaultConfig, config);

    // key索引是index，value是实例
    this.contentClassInstances = new Map();

    this.el = this.tel.content.querySelector('.ct-tab').cloneNode(true);
    this.indicatorEl = this.el.querySelector(`.${selectorPrefix}indicator`);
    this.contentEl = this.el.querySelector(`.${selectorPrefix}content`);
    this.maskEl = dom6.createElement(`<div class="${selectorPrefix}mask"></div>`);
    this.el.appendChild(this.maskEl);

    renderIndicator.call(this);
    renderContent.call(this);
    this.parent.appendChild(this.el);

    this.activeIndex = this.swiperIndicator.activeIndex;
    activeIndicatorItem.call(this, this.activeIndex);

    initEvent.call(this);

    this.swiperIndicator.init();
    this.swiperContent.init();
  }

  onIndicatorSlideChangeTransitionStart() {
    // 滑动content
    this.swiperContent.slideTo(this.swiperIndicator.activeIndex);
  }

  onContentSlideChangeTransitionStart() {
    showMask.call(this);
    const instance = getContentInstance.call(this, this.activeIndex);
    if (instance) {
      triggerContent({ instance, type: 'beforeHide' });
    }

    this.swiperIndicator.off('slideChangeTransitionEnd', this.onIndicatorSlideChangeTransitionStart);
    this.swiperIndicator.slideTo(this.swiperContent.activeIndex);
  }

  onContentSlideChangeTransitionEnd() {
    let instance = getContentInstance.call(this, this.swiperContent.activeIndex);
    if (!instance) {
      instance = createContentInstace.call(this, this.swiperContent.activeIndex);
      triggerContent({ instance, type: 'create' });
    }
    triggerContent({ instance, type: 'show' });

    this.activeIndex = this.swiperContent.activeIndex;
    activeIndicatorItem.call(this, this.activeIndex);
    this.swiperIndicator.on('slideChangeTransitionEnd', this.onIndicatorSlideChangeTransitionStart);
    hideMask.call(this);
  }

  /**
   * slideTo
   * @param {String} index
   * @return {boolean}
   */
  slideTo(index) {
    if (index === this.activeIndex) return false;
    this.swiperContent.slideTo(index);
  }

  /**
   * appendSlide
   * @param {Object} indicatorObj slides可以是带有新幻灯片的HTMLElement或HTML字符串或带有此类幻灯片的数组
   * @param {Object} contentObj slides可以是带有新幻灯片的HTMLElement或HTML字符串或带有此类幻灯片的数组
   * @param {Object} impl tab的实现类 数组或是对象
   */
  appendSlide(indicatorObj, contentObj, impls) {
    this.addSlide(this.config.content.tabInstances.length, indicatorObj, contentObj, impls);
  }

  /**
   * prependSlide
   * @param {Object} indicatorObj slides可以是带有新幻灯片的HTMLElement或HTML字符串或带有此类幻灯片的数组
   * @param {Object} contentObj slides可以是带有新幻灯片的HTMLElement或HTML字符串或带有此类幻灯片的数组
   * @param {Object} impl tab的实现类 数组或是对象
   */
  prependSlide(indicatorObj, contentObj, impls) {
    this.addSlide(0, indicatorObj, contentObj, impls);
  }

  /**
   * addSlide
   * @param {number} index 插入的索引
   * @param {Object} indicatorObj slides可以是带有新幻灯片的HTMLElement或HTML字符串或带有此类幻灯片的数组
   * @param {Object} contentObj slides可以是带有新幻灯片的HTMLElement或HTML字符串或带有此类幻灯片的数组
   * @param {Object} impl tab的实现类 数组或是对象
   */
  addSlide(index, indicatorObj, contentObj, impls) {
    const length = this.config.content.tabInstances.length;
    if (index < 0 || index > length) return false;
    this.config.content.tabInstances.splice(index, 0, ...([].concat(impls)));
    this.contentClassInstances.clear();
    this.swiperIndicator.addSlide(index, indicatorObj);
    this.swiperContent.addSlide(index, contentObj);
  }

  /**
   * slideIndex
   * @param {Number} slideIndex
   */
  removeSlide(slideIndex) {
    const length = this.config.content.tabInstances.length;
    if (slideIndex < 0 || slideIndex > length) return false;
    if (slideIndex instanceof Array) {
      slideIndex.sort((a, b) => {
        return b - a;
      });
      slideIndex.forEach((index) => {
        this.config.content.tabInstances.splice(index, 1);
      });
    } else {
      this.config.content.tabInstances.splice(slideIndex, 1);
    }
    this.contentClassInstances.clear();
    this.swiperIndicator.removeSlide(slideIndex);
    this.swiperContent.removeSlide(slideIndex);
  }
}

export default Tab;
