import { Dom6, Events } from '@ctmobile/ui-util';
import TreeNode from '@ctmobile/ui-tree/treenode';

/**
 * init
 * @access private
 */
function init() {
  const { nodeConfig = {} } = this.config;
  const { config = {}, data = [] } = nodeConfig;
  const df = document.createDocumentFragment();
  for (let i = 0; i < data.length; i++) {
    const treeNode = createNode.call(this, {
      globalConfig: config,
      config: data[i],
      parentNode: null,
    });
    this.nodes.push(treeNode);
    df.appendChild(treeNode.getEl());
  }

  // 处理checkbox和radio的选中
  detailItemInputs.call(this);

  this.el.appendChild(df);
}

/**
 * detailItemInputs
 * 处理inputItem的默认值，比如checkbox,radio的选中
 * @access private
 */
function detailItemInputs() {
  for (let i = 0; i < this.nodes.length; i++) {
    this.nodes[i].detailItemInputsRecursive();
  }
}


/**
 * createNode
 * @param {Object} - globalConfig
 * @param {Object} - config
 * @param {TreeNode} - parentNode
 * @access private
 */
function createNode({ globalConfig, config, parentNode }) {
  const treeNode = new TreeNode({
    globalConfig, config, tree: this, parentNode,
  });
  renderChildren.call(this, {
    parentNode: treeNode,
    globalConfig,
    config,
  });
  return treeNode;
}

/**
 * renderChildren
 * @param {TreeNode} - parentNode
 * @param {Object} - globalConfig
 * @param {Object} - config
 */
function renderChildren({ parentNode, globalConfig, config }) {
  if (!config.leaf) {
    const { children = [] } = config;
    for (let i = 0; i < children.length; i++) {
      parentNode.append(createNode.call(this, {
        globalConfig,
        config: children[i],
        parentNode,
      }));
    }
  }
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
}

/**
 * find
 * @param {Array} - result
 * @param {TreeNode} - treeNode
 * @param {String} - key
 * @param {String} - value
 */
function find({ result, treeNode, key, value }) {
  if (treeNode.hasAttr(key, value)) {
    result.push(treeNode);
  }

  if (!treeNode.isLeaf()) {
    const childrens = treeNode.childrens();
    for (let i = 0; i < childrens.length; i++) {
      find.call(this, {
        result,
        treeNode: childrens[i],
        key,
        value,
      });
    }
  }
}

/**
 * Tree
 * @class Tree
 * @classdesc Tree
 */
class Tree {
  /**
   * constructor
   * @constructor
   * @param {HTMLElement} - el
   * @param {Object} - config
   */
  constructor(el, config) {
    this.el = el;
    this.config = Object.assign({}, config);
    this.events = new Events();
    this.nodes = [];
    initEvents.call(this);
    init.call(this);
  }

  /**
   * renderChildren
   * @param {TreeNode} - parentNode
   * @param {Object} - globalConfig
   * @param {Object} - config
   */
  renderChildren(params) {
    renderChildren.call(this, params);
  }

  /**
   * append
   * @param {TreeNode} - treeNode
   */
  append(treeNode) {
    this.nodes.push(treeNode);
    this.el.appendChild(treeNode.getEl());
    detailItemInputs.call(this);
  }

  /**
   * appendByConfig
   * @param {Object} - config
   */
  appendByConfig(config) {
    const { nodeConfig = {} } = this.config;
    const { config: globalConfig } = nodeConfig;

    const treeNode = createNode.call(this, {
      globalConfig,
      config,
      parentNode: null,
    });

    this.append(treeNode);
  }

  /**
   * prepend
   * @param {TreeNode} - treeNode
   */
  prepend(treeNode) {
    this.nodes.unshift(treeNode);
    Dom6.prepend(this.el, treeNode.getEl());
    detailItemInputs.call(this);
  }

  /**
   * prependByConfig
   * @param {Object} - config
   */
  prependByConfig(config) {
    const { nodeConfig = {} } = this.config;
    const { config: globalConfig } = nodeConfig;

    const treeNode = createNode.call(this, {
      globalConfig,
      config,
      parentNode: null,
    });

    this.prepend(treeNode);
  }

  /**
   * insertBefore
   * @param {TreeNode} - treeNode
   * @param {TreeNode} - newNode
   */
  insertBefore(treeNode, newNode) {
    if (!treeNode || !newNode) return false;

    const index = this.nodes.findIndex((n) => {
      return n === treeNode;
    });

    if (index === -1) {
      this.append(newNode);
    } else if (index === 0) {
      this.prepend(newNode);
    } else {
      // dom
      this.el.insertBefore(newNode.getEl(), treeNode.getEl());
      // array
      this.nodes.splice(index, 0, newNode);
      detailItemInputs.call(this);
    }
  }

  /**
   * insertBeforeByConfig
   * @param {TreeNode} - treeNode
   * @param {Object} - config
   */
  insertBeforeByConfig(treeNode, config) {
    const { nodeConfig = {} } = this.config;
    const { config: globalConfig } = nodeConfig;

    const newNode = createNode.call(this, {
      globalConfig,
      config,
      parentNode: null,
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

    const index = this.nodes.findIndex((n) => {
      return n === treeNode;
    });

    if (index === -1) {
      this.append(newNode);
    } else if (index === this.nodes.length - 1) {
      this.prepend(newNode);
    } else {
      // dom
      Dom6.insertAfter(newNode.getEl(), treeNode.getEl());
      // array
      this.nodes.splice(index + 1, 0, newNode);
      detailItemInputs.call(this);
    }
  }

  /**
   * insertAfterByConfig
   * @param {TreeNode} - treeNode
   * @param {Object} - config
   */
  insertAfterByConfig(treeNode, config) {
    const { nodeConfig = {} } = this.config;
    const { config: globalConfig } = nodeConfig;

    const newNode = createNode.call(this, {
      globalConfig,
      config,
      parentNode: null,
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
    const index = this.nodes.findIndex((n) => {
      return n === treeNode;
    });
    if (index === -1) return false;

    this.el.replaceChild(newNode.getEl(), treeNode.getEl());
    this.nodes.splice(index, 1, newNode);
    detailItemInputs.call(this);
  }

  /**
   * replaceNodeByConfig
   * @param {TreeNode} - treeNode
   * @param {Object} - config
   */
  replaceNodeByConfig(treeNode, config) {
    const { nodeConfig = {} } = this.config;
    const { config: globalConfig } = nodeConfig;

    const newNode = createNode.call(this, {
      globalConfig,
      config,
      parentNode: null,
    });

    this.replaceNode(treeNode, newNode);
  }

  /**
   * removeChildren
   * @param {TreeNode} treeNode
   */
  removeChildren(treeNode) {
    if (!treeNode) return false;
    const index = this.nodes.findIndex((n) => {
      return n === treeNode;
    });

    if (index === -1) return false;

    this.nodes.splice(index, 1);
    Dom6.remove(treeNode.getEl());
    detailItemInputs.call(this);
  }

  /**
   * childrenNodes
   * @return {Array}
   */
  childrens() {
    return [].concat(this.nodes);
  }

  /**
   * getNodeByAttr
   * @param {String} - key
   * @param {String} - value
   * @return {TreeNode | Array<TreeNode>}
   */
  getNodeByAttr(key, value) {
    const result = [];
    for (let i = 0; i < this.nodes.length; i++) {
      const treeNode = this.nodes[i];
      find.call(this, {
        result, treeNode, key, value,
      });
    }
    return result.length === 0 ? result[0] : result;
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
 * TreeFactory
 */
const TreeFactory = {
  /**
   * 创建一个Tree
   * @param {HtmlElement} - el
   * @param {Object} - config
   * @return {Tree} - Tree
   */
  create(el, config) {
    return new Tree(el, config);
  },
};

export default TreeFactory;
