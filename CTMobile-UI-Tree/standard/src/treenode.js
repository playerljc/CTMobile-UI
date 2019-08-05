import { Dom6 } from '@ctmobile/ui-util';

const selectorPrefix = 'ct-tree-';
const normalTriggerIcon = 'fa fa-caret-right';
const remoteTriggerIcon = 'fa fa-spinner';

const checkboxIcon = {
  checkall: 'check-square', // checkbox选中
  uncheckall: 'minus-square', // checkbox减号
  unchecked: 'square-o', // checkbox默认
};

const radioIcon = {
  checked: 'circle', //  radio选中
  unchecked: 'circle-o', // radio未选中
};

/**
 * initVar
 * @access private
 */
function initVar() {
  this.itemEl = this.el.querySelector(`.${selectorPrefix}item`);
  this.itemTriggerEl = this.itemEl.querySelector(`.${selectorPrefix}item-trigger`);
  this.itemIconEl = this.itemEl.querySelector(`.${selectorPrefix}item-icon`);
  this.itemLabelEl = this.itemEl.querySelector(`.${selectorPrefix}item-label`);
  this.itemTextEl = this.itemLabelEl.querySelector(`.${selectorPrefix}item-text`);
  this.itemInputEl = this.itemEl.querySelector(`.${selectorPrefix}item-input`);
  this.itemInputFieldEl = this.itemEl.querySelector(`.${selectorPrefix}item-input-field`);
  this.childrenEl = this.el.querySelector(`.${selectorPrefix}children`);
}

/**
 * initEvents
 * @access private
 */
function initEvents() {
  const { loadType } = this.config;
  if (this.itemTriggerEl) {
    // expand
    this.itemTriggerEl.addEventListener('click', () => {
      // 展开
      if (!this.extend) {
        if (loadType === 'remote') {
          if (this.isload) {
            expand.call(this, !this.isExpand);
          } else {
            if (this.lock) return false;
            this.lock = true;
            // 先loading
            changeRemoteIcon.call(this);
            this.events.trigger(
              'loadRemote',
              this,
              onLoadRemoteSuccess.bind(this),
              onLoadRemoteError.bind(this),
              onLoadRemoteComplete.bind(this)
            );
          }
        } else {
          expand.call(this, !this.isExpand);
        }
      } else {
        expand.call(this, !this.isExpand);
      }
    });
  }

  // 点击了label
  this.itemLabelEl.addEventListener('click', () => {
    this.events.trigger('click', this);
  });

  // 点击了checkbox
  if (this.itemInputEl) {
    this.itemInputEl.addEventListener('click', () => {
      if (this.isChecked()) {
        if (this.getType() === 'checkbox') {
          this.checked(false);
        }
      } else if (this.getType() === 'checkbox') {
        this.checked(true);
      }
    });
  }
}

/**
 * checked
 * @param {boolean} - checked
 * @access private
 */
function checked(checked) {
  if (this.isCheckboxType()) {
    if (this.getType() === 'checkbox') {
      this.itemInputFieldEl.checked = checked;
      const { checkedCascade = true } = this.config;
      if (checkedCascade && !this.isLeaf()) {
        for (let i = 0; i < this.childrenNodes.length; i++) {
          const treeNode = this.childrenNodes[i];
          treeNode.checked(checked);
        }
      }
    }
  }
}

/**
 * checkedDetail
 * @param {boolean} - check
 * @access private
 */
function checkedDetail(check) {
  checked.call(this, check);
  this.detailItemInputsRecursive();
  this.events.trigger('checked', this, check);
}

/**
 * changeRemoteIcon
 * @access private
 */
function changeRemoteIcon() {
  Dom6.removeClass(this.itemTriggerEl, normalTriggerIcon);
  Dom6.addClass(this.itemTriggerEl, `${remoteTriggerIcon} animation`);
}

/**
 * getChildrenPaddingLeft
 * @access private
 * @return {number}
 */
function getChildrenPaddingLeft() {
  const { leaf, type, icon } = this.config;
  let paddingLeft = 4;
  if (!leaf) {
    paddingLeft += 22;
  }

  if (type !== 'normal') {
    if (icon) {
      paddingLeft += 19;
    } else {
      paddingLeft += 22;
    }
  } else if (icon) {
    paddingLeft += 19;
  }

  // item-trigger 22
  // item-input 22
  // item-icon 19
  // 4
  return paddingLeft;
}

/**
 * changeNormalIcon
 * @access private
 */
function changeNormalIcon() {
  Dom6.removeClass(this.itemTriggerEl, `${remoteTriggerIcon} animation`);
  Dom6.addClass(this.itemTriggerEl, normalTriggerIcon);
}

/**
 * expand
 * @param {Boolean} - expand
 * @access private
 */
function expand(expaned) {
  if (this.isLeaf()) return false;
  if (this.isExpand === expaned) return false;

  if (expaned) {
    Dom6.addClass(this.el, 'expand');
  } else {
    Dom6.removeClass(this.el, 'expand');
  }

  this.isExpand = expaned;

  this.events.trigger('expand', this, this.isExpand);
}

/**
 * onLoadRemote
 * @param {Array} - children
 * @access private
 */
function onLoadRemoteSuccess(children) {
  const { nodeGlobalConfig, nodeConfig } = this;
  // if (children.length <= 0) return false;
  if (children.length <= 0) {
    nodeConfig.leaf = true;
    this.itemTriggerEl.classList.add('invisible');
  }

  // 清空之前的
  this.childrenNodes = [];
  nodeConfig.children = children;
  this.tree.renderChildren({
    parentNode: this,
    globalConfig: nodeGlobalConfig,
    config: nodeConfig,
  });
  expand.call(this, true);
  changeNormalIcon.call(this);
  this.isload = true;
  this.refresh();
  this.lock = false;
}

/**
 * onLoadRemoteError
 * @access private
 */
function onLoadRemoteError() {
  changeNormalIcon.call(this);
  this.lock = false;
}

/**
 * onLoadRemoteComplete
 * @access private
 */
function onLoadRemoteComplete() {
  changeNormalIcon.call(this);
  this.lock = false;
}

/**
 * renderInput
 * @access private
 * @return {String}
 */
function renderInput() {
  const { type, checked = false, leaf } = this.config;
  // 普通的节点
  if (type === 'normal') {
    return '';
  } else if (type === 'checkbox') {
    // checkbox节点

    // 选中
    // if(isLeaf() && checked) {
    //   渲染成选中
    //   if(父节点的所有checkbox节点都选中) {
    //     父节点渲染成选中状态 - 一直向上追溯
    //   }
    // }
    // let str;
    // // 叶子节点
    // if (this.isLeaf()) {
    //   if (checked) {
    //     // 叶子节点且选中
    //     str = `<span class="${selectorPrefix}item-input fa fa-${checkboxIcon.checkall}" >
    //             <input class="${selectorPrefix}item-input-field" checked type="checkbox" />
    //            </span>`;
    //     //   if(父节点的所有checkbox节点都选中) {
    //     //     父节点渲染成选中状态 - 一直向上追溯
    //     //   }
    //     // Drill up
    //     if (this.parentNode) {
    //       this.parentNode.checkboxDrillUp();
    //     }
    //   } else {
    //     // 叶子节点非选中
    //     str = `<span class="${selectorPrefix}item-input fa fa-${checkboxIcon.unchecked}" >
    //             <input class="${selectorPrefix}item-input-field" type="checkbox" />
    //            </span>`;
    //   }
    // } else {
    //   // 非叶子节点
    //   str = `<span class="${selectorPrefix}item-input fa fa-${checkboxIcon.unchecked}" >
    //           <input class="${selectorPrefix}item-input-field" type="checkbox" />
    //          </span>`;
    // }
    let str = '';
    if (leaf) {
      if (checked) {
        str = `<span class="${selectorPrefix}item-input fa fa-${checkboxIcon.checkall}" >
              <input class="${selectorPrefix}item-input-field" checked type="checkbox" />
             </span>`;
      } else {
        str = `<span class="${selectorPrefix}item-input fa fa-${checkboxIcon.unchecked}" >
              <input class="${selectorPrefix}item-input-field" type="checkbox" />
             </span>`;
      }
    } else {
      str = `<span class="${selectorPrefix}item-input fa fa-${checkboxIcon.unchecked}" >
              <input class="${selectorPrefix}item-input-field" type="checkbox" />
             </span>`;
    }
    return str;
  } else if (type === 'radio') {
    // radio节点
    return `<span class="${selectorPrefix}item-input fa fa-${radioIcon.unchecked}" >
             <input class="${selectorPrefix}item-input-field" type="checkbox" />
            </span>`;
  } else {
    // 没有匹配的类型
    return '';
  }
}

/**
 * renderCheckboxCheckAll
 * @access private
 */
function renderCheckboxCheckAll() {
  Dom6.removeClass(this.itemInputEl, `fa-${checkboxIcon.uncheckall} fa-${checkboxIcon.unchecked}`);
  Dom6.addClass(this.itemInputEl, `fa-${checkboxIcon.checkall}`);
  this.events.trigger('checked', this, true);
}

/**
 * renderCheckboxUncheckall
 * @access private
 */
function renderCheckboxUncheckall() {
  Dom6.removeClass(this.itemInputEl, `fa-${checkboxIcon.checkall} fa-${checkboxIcon.unchecked}`);
  Dom6.addClass(this.itemInputEl, `fa-${checkboxIcon.uncheckall}`);
  this.events.trigger('checked', this, false);
}

/**
 * renderCheckboxUnchecked
 * @access private
 */
function renderCheckboxUnchecked() {
  Dom6.removeClass(this.itemInputEl, `fa-${checkboxIcon.checkall} fa-${checkboxIcon.uncheckall}`);
  Dom6.addClass(this.itemInputEl, `fa-${checkboxIcon.unchecked}`);
  this.events.trigger('checked', this, false);
}

/**
 * render
 * @access private
 */
function render() {
  const { label, leaf, icon, iconColor, attr = {} } = this.config;

  this.el = Dom6.createElement(
    `<div class="${selectorPrefix}node ${this.isExpand ? 'expand' : ''}">
        <div class="${selectorPrefix}item">
          <span class="${selectorPrefix}item-trigger ${leaf ? 'invisible' : ''} ${normalTriggerIcon}"></span>
          ${renderInput.call(this)}
          <span class="${selectorPrefix}item-icon fa fa-${icon} ${!icon ? 'invisible' : ''}" style="color:${iconColor || ''}"></span>
          <span class="${selectorPrefix}item-label">
            <span class="${selectorPrefix}item-text">${label}</span>
          </span>
        </div>
      </div>
    `
  );

  Dom6.objectToDataSet(attr, this.el);

  initVar.call(this);
  initEvents.call(this);
}


/**
 * TreeNode
 * @class TreeNode
 * @classdesc TreeNode
 */
class TreeNode {
  /**
   * constructor
   * @constructor
   * @param {Object} - globalConfig 全局的节点配置
   * @param {Object} - config 节点的配置
   * @param {Tree} - tree Tree
   * @param {TreeNode} - parentNode 父节点
   */
  constructor({ globalConfig, config, tree, parentNode }) {
    this.nodeGlobalConfig = JSON.parse(JSON.stringify(globalConfig));
    this.nodeConfig = JSON.parse(JSON.stringify(config));
    this.config = JSON.parse(JSON.stringify(Object.assign({}, globalConfig, config)));
    this.tree = tree;
    this.parentNode = parentNode;
    // 子节点
    this.childrenNodes = [];
    // 如果loadType==='remote'时，判断是否加载过数据
    this.isload = false;
    // 如果loadType==='remote'时，的节流锁
    this.lock = false;
    this.events = tree.events;
    const { expand = true, loadType } = this.config;
    // 节点是否展开
    this.isExpand = loadType === 'remote' ? false : expand;
    render.call(this);
  }

  /**
   * append
   * tree是一个完整的对象，已经调用完renderChildren
   * @param {TreeNode} - treeNode
   * @param {boolean} - refresh
   */
  append(treeNode, refresh = false) {
    const { loadType } = this.config;
    if (this.isLeaf()) {
      this.childrenEl = Dom6.createElement('<div class="ct-tree-children"></div>');
      const paddingLeft = getChildrenPaddingLeft.call(this);
      this.childrenEl.style.paddingLeft = `${paddingLeft}px`;
      this.el.appendChild(this.childrenEl);

      // if (loadType !== 'remote') {
      //   this.itemTriggerEl = Dom6.createElement(`<span class="${selectorPrefix}item-trigger ${normalTriggerIcon}"></span>`);
      //   Dom6.prepend(this.itemEl, this.itemTriggerEl);
      // }
    }
    this.childrenEl.appendChild(treeNode.getEl());
    this.childrenNodes.push(treeNode);

    Dom6.removeClass(this.itemTriggerEl, 'invisible');

    if (loadType === 'remote' && !this.isload) {
      this.isload = true;
    }

    if (refresh) {
      this.refresh();
    }
  }

  /**
   * appendByConfig
   * @param {Object} - config
   */
  appendByConfig(config) {
    const { nodeGlobalConfig: globalConfig } = this;
    const newNode = new TreeNode({
      globalConfig,
      config,
      tree: this.tree,
      parentNode: this,
    });
    this.tree.renderChildren({
      parentNode: newNode,
      globalConfig,
      config,
    });
    this.append(newNode);
    this.refresh();
  }

  /**
   * prepend
   * @param {TreeNode} - treeNode
   */
  prepend(treeNode) {
    if (this.isLeaf()) this.append(treeNode);
    Dom6.prepend(this.childrenEl, treeNode.getEl());
    this.childrenNodes.unshift(treeNode);
    this.refresh();
  }

  /**
   * prependByConfig
   * @param {Object} - config
   */
  prependByConfig(config) {
    const { nodeGlobalConfig: globalConfig } = this;
    const newNode = new TreeNode({
      globalConfig, config, tree: this.tree, parentNode: this,
    });
    this.tree.renderChildren({
      parentNode: newNode,
      globalConfig,
      config,
    });
    this.prepend(newNode);
  }

  /**
   * insertBefore
   * @param {TreeNode} - treeNode
   * @param {TreeNode} - newNode
   */
  insertBefore(treeNode, newNode) {
    if (!treeNode || !newNode) return false;

    const index = this.childrenNodes.findIndex((n) => {
      return n === treeNode;
    });

    if (index === -1) {
      this.append(newNode);
      this.refresh();
    } else if (index === 0) {
      this.prepend(newNode);
    } else {
      // dom
      this.childrenEl.insertBefore(newNode.getEl(), treeNode.getEl());
      // array
      this.childrenNodes.splice(index, 0, newNode);
      this.refresh();
    }
  }

  /**
   * insertBeforeByConfig
   * @param {TreeNode} - treeNode
   * @param {Object} - config
   */
  insertBeforeByConfig(treeNode, config) {
    const { nodeGlobalConfig: globalConfig } = this;
    const newNode = new TreeNode({
      globalConfig, config, tree: this.tree, parentNode: this,
    });
    this.tree.renderChildren({
      parentNode: newNode,
      globalConfig,
      config,
    });
    this.insertBefore(treeNode, newNode);
  }

  /**
   * insertAfter
   * @param {TreeNode} - treeNode
   * @param {TreeNode} - newNode
   */
  insertAfter(treeNode, newNode) {
    if (!treeNode || !newNode) return false;

    const index = this.childrenNodes.findIndex((n) => {
      return n === treeNode;
    });

    if (index === -1) {
      this.append(newNode);
      this.refresh();
    } else if (index === this.childrenNodes.length - 1) {
      this.prepend(newNode);
    } else {
      // dom
      Dom6.insertAfter(newNode.getEl(), treeNode.getEl());
      // array
      this.childrenNodes.splice(index + 1, 0, newNode);
      this.refresh();
    }
  }

  /**
   * insertAfterByConfig
   * @param {TreeNode} - treeNode
   * @param {Object} - config
   */
  insertAfterByConfig(treeNode, config) {
    const { nodeGlobalConfig: globalConfig } = this;
    const newNode = new TreeNode({
      globalConfig, config, tree: this.tree, parentNode: this,
    });
    this.tree.renderChildren({
      parentNode: newNode,
      globalConfig,
      config,
    });
    this.insertAfter(treeNode, newNode);
  }

  /**
   * replaceNode
   * @param {TreeNode} - treeNode
   * @param {TreeNode} - newNode
   * @return {boolean}
   */
  replaceNode(treeNode, newNode) {
    if (!treeNode || !newNode) return false;
    const index = this.childrenNodes.findIndex((n) => {
      return n === treeNode;
    });
    if (index === -1) return false;

    this.childrenEl.replaceChild(newNode.getEl(), treeNode.getEl());
    this.childrenNodes.splice(index, 1, newNode);
    this.refresh();
  }

  /**
   * replaceNodeByConfig
   * @param {TreeNode} - treeNode
   * @param {Object} - config
   */
  replaceNodeByConfig(treeNode, config) {
    const { nodeGlobalConfig: globalConfig } = this;
    const newNode = new TreeNode({
      globalConfig, config, tree: this.tree, parentNode: this,
    });
    this.tree.renderChildren({
      parentNode: newNode,
      globalConfig,
      config,
    });
    this.replaceNode(treeNode, newNode);
  }

  /**
   * removeChildren
   * @param {TreeNode} treeNode
   */
  removeChildren(treeNode) {
    if (!treeNode) return false;
    if (this.isLeaf()) return false;
    const index = this.childrenNodes.findIndex((n) => {
      return n === treeNode;
    });

    if (index === -1) return false;

    this.childrenNodes.splice(index, 1);
    Dom6.remove(treeNode.getEl());
    if (this.isLeaf()) {
      Dom6.addClass(this.itemTriggerEl, 'invisible');
    }
    this.refresh();
  }

  /**
   * childrenNodes
   * @return {Array}
   */
  childrens() {
    return [].concat(this.childrenNodes);
  }

  /**
   * expand
   * @param {Boolean} - expaned
   */
  expand(expaned) {
    expand.call(this, expaned);
  }

  /**
   * resetRemoteNode
   * 重置loadType === 'remote' 的节点使其能够重新载入数据，并且先闭合节点
   */
  resetRemoteNode() {
    const { loadType } = this.config;
    if (loadType !== 'remote') return false;
    this.expand(false);
    this.isload = false;
  }

  /**
   * isExpand
   * @return {Boolean}
   */
  isExpand() {
    return this.isExpand;
  }

  /**
   * getAttr
   * @param {String} - attr
   * @return {String} - value
   */
  getAttr(attr) {
    return this.el.dataset[attr];
  }

  /**
   * setAttr
   * @param {String} - key
   * @param {String} - value
   */
  setAttr(key, value) {
    this.el.dataset[key] = value;
  }

  /**
   * hasAttr
   * @param {String} - key
   * @param {String} - value
   * @return {boolean}
   */
  hasAttr(key, value) {
    const srcValue = this.getAttr(key);
    return value === srcValue;
  }

  /**
   * getLabel
   * @return {String}
   */
  getLabel() {
    return this.itemTextEl.innerText;
  }

  /**
   * setLabel
   * @param {String} - label
   */
  setLabel(label) {
    this.itemTextEl.innerText = label;
  }

  /**
   * setIcon
   * @param {String} - icon
   */
  setIcon(newIcon) {
    const self = this;
    const { icon: srcIcon, iconColor } = this.config;

    function createIcon() {
      self.config.icon = newIcon;
      self.itemIconEl = Dom6.createElement(`<span class="${selectorPrefix}item-icon fa fa-${newIcon}" style="color:${iconColor || ''}"></span>`);
      Dom6.prepend(self.itemLabelEl, self.itemIconEl);
    }

    if (!srcIcon) {
      createIcon();
    } else if (!this.itemIconEl) {
      createIcon();
    } else {
      this.config.icon = newIcon;
      Dom6.removeClass(this.itemIconEl, `fa fa-${srcIcon}`);
      Dom6.addClass(this.itemIconEl, `fa fa-${newIcon}`);
    }
  }

  /**
   * getIcon
   * @return {String}
   */
  getIcon() {
    return this.config.icon;
  }

  /**
   * setIconColor
   * @param {String} - iconColor
   */
  setIconColor(iconColor) {
    const { icon } = this.config;
    if (!icon) return false;

    if (!this.itemIconEl) return false;

    this.config.iconColor = iconColor;
    this.itemIconEl.style.color = iconColor;
  }

  /**
   * getIconColor
   * @return {string}
   */
  getIconColor() {
    return this.config.iconColor;
  }

  /**
   * isLeaf
   * @return {Boolean}
   */
  isLeaf() {
    return this.childrenNodes.length <= 0;
  }

  /**
   * isRoot
   * @return {boolean}
   */
  isRoot() {
    return !!this.parentNode;
  }

  /**
   * getEl
   * @return {HTMLElement}
   */
  getEl() {
    return this.el;
  }

  /**
   * checked
   * @return {boolean}
   */
  isChecked() {
    if (this.isCheckboxType()) {
      if (this.itemInputFieldEl) {
        return this.itemInputFieldEl.checked;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  /**
   * getType
   * @return {string}
   */
  getType() {
    return this.config.type;
  }

  /**
   * getParentNode
   * @return {TreeNode}
   */
  getParentNode() {
    return this.parentNode;
  }

  /**
   * isCheckboxType
   * @return {boolean}
   */
  isCheckboxType() {
    return ['checkbox', 'radio'].indexOf(this.config.type) !== -1;
  }

  /**
   * checkboxDrillUp
   */
  checkboxDrillUp() {
    //   if(父节点的所有checkbox节点都选中) {
    //     父节点渲染成选中状态 - 一直向上追溯
    //   }
    const isCheckbox = this.isCheckboxType();
    if (!isCheckbox) return false;

    const checkboxNodes = [];
    for (let i = 0; i < this.childrenNodes.length; i++) {
      const treeNode = this.childrenNodes[i];
      if (treeNode.itemInputFieldEl) {
        checkboxNodes.push(treeNode);
      }
    }

    const checkeds = checkboxNodes.filter((node) => {
      return node.isChecked();
    });

    // 子元素都选中了
    if (checkeds.length === checkboxNodes.length) {
      this.itemInputFieldEl.checked = true;
      renderCheckboxCheckAll.call(this);
      this.events.trigger('checked', this, true);
      if (this.parentNode) {
        this.parentNode.checkboxDrillUp();
      }
    } else {
      this.itemInputFieldEl.checked = false;

      if (checkeds.length !== 0) {
        // 子节点有选中的
        renderCheckboxUncheckall.call(this);
      } else {
        renderCheckboxUnchecked.call(this);
      }

      this.events.trigger('checked', this, false);

      if (this.parentNode) {
        this.parentNode.checkboxDrillUp();
      }
    }
  }

  /**
   * detailItemInputsRecursive
   */
  detailItemInputsRecursive() {
    const { checkedCascade = true } = this.config;
    if (checkedCascade) {
      if (this.isLeaf()) {
        if (this.getType() === 'checkbox') {
          if (this.isChecked()) {
            renderCheckboxCheckAll.call(this);
          } else {
            renderCheckboxUnchecked.call(this);
          }
          const parentNode = this.getParentNode();
          if (parentNode) {
            parentNode.checkboxDrillUp();
          }
        }
      } else {
        const children = this.childrens();
        for (let i = 0; i < children.length; i++) {
          children[i].detailItemInputsRecursive();
        }
      }
    } else if (this.isChecked()) {
      renderCheckboxCheckAll.call(this);
    } else {
      renderCheckboxUnchecked.call(this);
    }
  }

  /**
   * checked
   * @param {boolean} - check
   */
  checked(check) {
    if (this.events.hasType('beforeChecked')) {
      const flag = this.events.trigger('beforeChecked', this, check);
      if (flag) {
        checkedDetail.call(this, check);
      }
    } else {
      checkedDetail.call(this, check);
    }
  }

  /**
   * refresh
   */
  refresh() {
    const parentNode = this.getParentNode();
    if (parentNode) {
      parentNode.detailItemInputsRecursive();
    } else {
      this.detailItemInputsRecursive();
    }
  }
}

export default TreeNode;
