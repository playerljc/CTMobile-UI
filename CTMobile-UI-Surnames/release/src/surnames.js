import { Dom6, Events } from '@ctmobile/ui-util';

const selectorPrefix = 'ct-surnames-';
const duration = 100;

/**
 * initVar
 * @access private
 */
function initVar() {
  this.highlightedEl = this.el.querySelector(`.${selectorPrefix}highlighted`);
  this.indexEl = this.el.querySelector(`.${selectorPrefix}index`);
  this.contentEl = this.el.querySelector(`.${selectorPrefix}content`);
}

/**
 * clickDetail
 * @param {Event} - e
 */
function clickDetail(e) {
  const target = e.target;
  e.preventDefault();
  if (this.key) {
    return false;
  }
  this.key = true;
  this.maskEl.style.display = 'block';

  scrollToAnimation.call(this, target.dataset.name);
}

/**
 * moveDetail
 * @param {number} x
 * @param {number} y
 */
function moveDetail(x, y) {
  const index = findIndex.call(this, x, y);
  if (index) {
    console.log(index.name);
    this.highlightedEl.innerText = index.name;
    this.highlightedEl.style.display = 'block';

    const direction = getDirection.call(this);
    if (direction === 'vertical') {
      const translateY = index.offsetTop - Math.floor(index.height / 2);
      this.highlightedEl.style.transform = `translate3d(0,${translateY}px,0)`;
    } else {
      const translateX = index.offsetLeft - index.width;
      this.highlightedEl.style.transform = `translate3d(${translateX}px,0,0)`;
    }

    scrollTo.call(this, index.name);
  }
}

/**
 * initEvent
 * @access private
 */
function initEvent() {
  if (Dom6.isTouch()) {
    this.indexEl.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      clickDetail.call(this, e);
    });

    // 索引touchmove和mousemove
    this.indexEl.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const y = e.changedTouches[0].clientY;
      const x = e.changedTouches[0].clientX;
      moveDetail.call(this, x, y);
    });

    this.indexEl.addEventListener('touchend', () => {
      this.highlightedEl.style.display = 'none';
      this.highlightedEl.innerText = '';
      this.highlightedEl.style.transform = 'translate3d(0,0,0)';
    });
  } else {
    this.indexEl.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.startY = e.clientY;
      this.startX = e.clientX;
      this.mouseClickFlag = true;
    });

    this.indexEl.addEventListener('mousemove', (e) => {
      if (!this.mouseClickFlag) return false;

      this.mouseMoveFlag = true;
      e.preventDefault();
      const y = e.clientY;
      const x = e.clientX;
      moveDetail.call(this, x, y);
    });

    this.indexEl.addEventListener('mouseleave', () => {
      this.mouseClickFlag = false;
      this.mouseMoveFlag = false;
      this.highlightedEl.style.display = 'none';
      this.highlightedEl.innerText = '';
      this.highlightedEl.style.transform = 'translate3d(0,0,0)';
    });

    this.indexEl.addEventListener('mouseup', (e) => {
      if (this.mouseMoveFlag) {
        this.mouseClickFlag = false;
        this.mouseMoveFlag = false;
        this.highlightedEl.style.display = 'none';
        this.highlightedEl.innerText = '';
        this.highlightedEl.style.transform = 'translate3d(0,0,0)';
        return false;
      }

      e.preventDefault();
      clickDetail.call(this, e);
    });
  }

  window.addEventListener('resize', () => {
    this.update();
  });
}

/**
 * render
 * @access private
 */
function render() {
  const { position = 'right' } = this.config;
  Dom6.addClass(this.el, `${selectorPrefix}config-position-${position}`);
  renderIndex.call(this);
  createIndexPosition.call(this);
}

/**
 * renderIndex
 * @access private
 */
function renderIndex() {
  const groupTitleEls = this.contentEl.querySelectorAll(`.${selectorPrefix}group-title`);
  if (groupTitleEls.length === 0) return false;

  const indexNames = [];
  for (let i = 0; i < groupTitleEls.length; i++) {
    indexNames.push(groupTitleEls[i].dataset.name);
  }

  this.indexEl.innerHTML = '';
  const df = document.createDocumentFragment();
  for (let i = 0; i < indexNames.length; i++) {
    df.appendChild(Dom6.createElement(`<a class="${selectorPrefix}index-item" data-name="${indexNames[i]}">${indexNames[i]}</a>`));
  }
  this.indexEl.appendChild(df);
}

/**
 * createIndexPosition
 * @access private
 */
function createIndexPosition() {
  const indexItemEls = this.indexEl.querySelectorAll(`.${selectorPrefix}index-item`);
  this.indexPositionMap = [];
  // 计算每一项距离视口的top和bottom
  for (let i = 0; i < indexItemEls.length; i++) {
    const indexItemEl = indexItemEls[i];
    const indexName = indexItemEl.dataset.name;
    const rect = indexItemEl.getBoundingClientRect();
    this.indexPositionMap.push({
      name: indexName,
      top: rect.top,
      bottom: rect.bottom,
      left: rect.left,
      right: rect.right,
      offsetTop: indexItemEl.offsetTop,
      offsetLeft: indexItemEl.offsetLeft,
      width: indexItemEl.offsetWidth,
      height: indexItemEl.offsetHeight,
    });
  }
}

/**
 * createMask
 * @access private
 */
function createMask() {
  this.maskEl = Dom6.createElement(`<div class='${selectorPrefix}mask'></div>`);
  document.body.appendChild(this.maskEl);
}

/**
 * scrollToAnimation
 * @param {String} - indexName
 * @access private
 */
function scrollToAnimation(indexName) {
  const self = this;

  const targetEl = self.contentEl.querySelector(`.${selectorPrefix}group-title[data-name='${indexName}']`);
  const srcTop = self.contentEl.scrollTop;
  let scrollVal = srcTop;
  const targetTop = targetEl.offsetTop;
  const setp = self.el.scrollHeight / (duration / (screen.updateInterval || 16.7) + (duration % (screen.updateInterval || 16.7) !== 0 ? 1 : 0));

  /**
   * scrollAnimation
   */
  function scrollAnimation() {
    if (srcTop < targetTop) {
      if ((scrollVal + setp) > targetTop) {
        scrollVal = targetTop;
      } else {
        scrollVal += setp;
      }
    } else if ((scrollVal - setp) < targetTop) {
      scrollVal = targetTop;
    } else {
      scrollVal -= setp;
    }

    self.contentEl.scrollTop = scrollVal;

    if (srcTop < targetTop) {
      if (scrollVal >= targetTop) {
        clear();
      } else {
        window.requestAnimationFrame(scrollAnimation);
      }
    } else if (scrollVal <= targetTop) {
      clear();
    } else {
      window.requestAnimationFrame(scrollAnimation);
    }

    function clear() {
      self.key = false;
      self.mouseClickFlag = false;
      self.maskEl.style.display = 'none';
      self.events.trigger('scroll', indexName);
    }
  }

  this.events.trigger('scrollBefore', indexName);
  window.requestAnimationFrame(scrollAnimation);
}

/**
 * scrollTo
 * @param {String} - indexName
 * @access private
 */
function scrollTo(indexName) {
  const self = this;
  const targetTop = self.contentEl.querySelector(`.${selectorPrefix}group-title[data-name='${indexName}']`).offsetTop;
  self.contentEl.scrollTop = targetTop;
  this.events.trigger('scroll', indexName);
}

/**
 * findIndex
 * @param {number} x
 * @param {number} y
 * @return {String} - indexName
 * @access private
 */
function findIndex(x, y) {
  const direction = getDirection.call(this);
  const val = direction === 'vertical' ? y : x;
  let low = 0;
  let high = this.indexPositionMap.length - 1;
  let middle;
  let target;
  while ((low <= high) &&
  (low <= this.indexPositionMap.length - 1) &&
  (high <= this.indexPositionMap.length - 1)) {
    middle = (high + low) >> 1;
    const targetVal = this.indexPositionMap[middle];

    let t1;
    let t2;
    if (direction === 'vertical') {
      t1 = targetVal.top;
      t2 = targetVal.bottom;
    } else {
      t1 = targetVal.left;
      t2 = targetVal.right;
    }

    if (val >= t1 && val < t2) {
      target = targetVal;
      break;
    } else if (val < t1) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  if (target) {
    return target;
  } else {
    return null;
  }
}

/**
 * getDirection
 * @return {string}
 */
function getDirection() {
  const { position } = this.config;

  return position === 'left' || position === 'right' ? 'vertical' : 'horizontal';
}

/**
 * Surnames
 * @class Surnames
 * @classdesc Surnames
 */
class Surnames {
  /**
   * constructor
   * @constructor
   * @param {HTMLElement} - el
   * @param {Object} - config
   */
  constructor(el, config) {
    this.el = el;
    this.config = Object.assign({
      position: 'right',
    }, config);
    this.key = false;
    this.mouseClickFlag = false;
    this.mouseMoveFlag = false;
    this.events = new Events();

    initVar.call(this);
    initEvent.call(this);
    createMask.call(this);
    render.call(this);
  }

  /**
   * scrollToAnimation
   * @param {String} - indexName
   */
  scrollToAnimation(indexName) {
    scrollToAnimation.call(this, indexName);
  }

  /**
   * scrollTo
   * @param {String} - ndexName
   */
  scrollTo(indexName) {
    scrollTo.call(this, indexName);
  }

  /**
   * update
   */
  update() {
    renderIndex.call(this);
    createIndexPosition.call(this);
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
 * SurnamesFactory
 */
const SurnamesFactory = {
  /**
   * 创建一个Surnames
   * @param {HtmlElement} - el
   * @param {Object} - config
   * @return {Surnames} - Surnames
   */
  create(el, config) {
    return new Surnames(el, config);
  },
};

export default SurnamesFactory;
