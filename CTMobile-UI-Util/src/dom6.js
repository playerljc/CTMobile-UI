/**
 * dom6
 */
export default {
  /**
   * getTopDom
   * @param {HtmlElement} target
   * @param {string} selector
   * @return {HtmlElement}
   */
  getTopDom(target, selector) {
    if (!target || !selector) return null;

    if (target.className.indexOf(selector) !== -1) {
      return target;
    }

    let parentDom = target;
    while ((parentDom = parentDom.parentNode)) {
      if (parentDom.className.indexOf(selector) !== -1) {
        break;
      } else if (parentDom === document.body) break;
    }

    if (parentDom) {
      return parentDom;
    } else {
      return null;
    }
  },
  off() {

  },
  on() {

  },
  once() {

  },
  /**
   * DOM没有提供insertAfter()方法
   * @param {HtmlElement} newElement
   * @param {HtmlElement} targetElement
   */
  insertAfter(newElement, targetElement) {
    const parent = targetElement.parentNode;
    if (parent.lastChild === targetElement) {
      // 如果最后的节点是目标元素，则直接添加。因为默认是最后
      parent.appendChild(newElement);
    } else {
      parent.insertBefore(newElement, targetElement.nextSibling);
      // 如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
    }
  },

  /**
   * createElement
   * @param {string} html
   * @return {HtmlElement}
   */
  createElement(html) {
    const dom = document.createElement('div');
    dom.innerHTML = html;
    return dom.firstChild;
  },

  /**
   * prevSibling
   * @param {HtmlElement} dom
   * @return {HtmlElement}
   */
  prevSibling(dom) {
    let result,
      index = -1;
    if (!dom || !dom.parentNode) return result;

    const children = dom.parentNode.children;
    for (let i = 0; i < children.length; i++) {
      if (dom === children[i]) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      if (index === 0) {
        result = children[0];
      } else {
        result = children[index - 1];
      }
    }
    return result;
  },

  /**
   * nextSibling
   * @param {HtmlElement} dom
   * @return {HtmlElement}
   */
  nextSibling(dom) {
    let result,
      index = -1;
    if (!dom || !dom.parentNode) return result;

    const children = dom.parentNode.children;
    for (let i = 0; i < children.length; i++) {
      if (dom === children[i]) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      if (index === children.length - 1) {
        result = children[0];
      } else {
        result = children[index + 1];
      }
    }
    return result;
  },
  /**
   * getParentElementByTag
   * @param {HtmlElement} el
   * @param {string} tag
   * @return {HtmlElement}
   */
  getParentElementByTag(el, tag) {
    if (!tag) return null;
    let element;
    let parent = el;
    const popup = () => {
      parent = parent.parentElement;
      if (!parent) return null;
      const tagParent = parent.tagName.toLocaleLowerCase();
      if (tagParent === tag) {
        element = parent;
      } else if (tagParent === 'body') {
        element = null;
      } else {
        popup();
      }
    };

    popup();
    return element;
  },
};
