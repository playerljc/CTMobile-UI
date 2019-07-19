# Tree

* [基本布局](#tree-layout)
* [初始化](#tree-initial)
* [例子](#tree-demo)
* [方法](#tree-methods)
* [事件](#tree-events)
  - [click](#tree-events-click)
  - [expand](#tree-events-expand)
  - [checked](#tree-events-checked)
  - [loadRemote](#tree-events-loadremote)

## 基本布局

* ct-tree - 整体容器

## 初始化

```

import TreeFactory from '@ctmobile/ui-tree';
import '@ctmobile/ui-tree/lib/tree.less';
import '@ctmobile/ui-tree/lib/themes/default/tree.less';
TreeFactory.create(document.getElementById('tree'),{
  nodeConfig: {
    config: {
      loadType: 'local',
      expand: true,
      type: 'normal',
    },
    data: [
      {
        label: '节点1',
        leaf: false,
        expand: true,
        attr: {
          id: '1',
        },
        children: [
          {
            label: '节点1.1',
            leaf: true
          },
          {
            label: '节点1.2',
            leaf: true
          }
        ],
      }
    ]
});
```

|  名称 |  说明 |
| --- | --- |
| {HtmlElement} - el |  整体元素 |
| {object} - config |

配置

listeners {Object} - 事件

nodeConfig {Object} - 节点的配置

| {object} - config 节点的全局配置 |

label {String} - 节点文本

icon {String} - 节点的icon(font-awesome)

iconColor {String} - 节点icon颜色

attr {Object} - 节点的自定义属性

leaf {boolean} - [true | false] 是否是叶子节点

leaf {boolean} - [true | false] 是否是叶子节点

loadType {String} - [local | remote] 节点的数据类型 local本地数据，remote远程数据

expand {boolean} - [true | false] true 展开, false 关闭 默认展开, 如果loadType为remote

type {String} - [normal | checkbox | radio] 节点的input类型

checked {boolean} - [true | false] 如果type是checkbox 是否选中

children {Array} - 子节点  |
| {Array} - data 节点的配置 |  |  |

## 例子

#### js

## normal(普通)

```

TreeFactory.create(document.getElementById('tree-normal'), {
  nodeConfig: {
    config: Object.assign({}, globalConfig),
    data: [{
      label: '节点1',
      expand: true,
      leaf: false,
      children: [{
        label: '节点1.1',
        expand: true,
        leaf: true,
      }, {
        label: '节点1.2',
        expand: true,
        leaf: true,
      }],
    }, {
      label: '节点2',
      expand: true,
      leaf: true,
    }],
  },
});
```

## icon

```

TreeFactory.create(document.getElementById('tree-icon'), {
  nodeConfig: {
    config: Object.assign({}, globalConfig),
    data: [{
      label: '节点1',
      icon: 'folder',
      expand: true,
      leaf: false,
      children: [{
        label: '节点1.1',
        icon: 'folder',
        expand: true,
        leaf: true,
      }, {
        label: '节点1.2',
        icon: 'folder',
        expand: true,
        leaf: true,
      }],
    }, {
      label: '节点2',
      icon: 'folder',
      expand: true,
      leaf: true,
    }],
  },
});
```

## iconColor

```

TreeFactory.create(document.getElementById('tree-iconColor'), {
  nodeConfig: {
    config: Object.assign({}, globalConfig),
    data: [{
      label: '节点1',
      icon: 'folder',
      iconColor: '#ccc',
      expand: true,
      leaf: false,
      children: [{
        label: '节点1.1',
        icon: 'folder',
        iconColor: '#ccc',
        expand: true,
        leaf: true,
      }, {
        label: '节点1.2',
        icon: 'folder',
        iconColor: '#ccc',
        expand: true,
        leaf: true,
      }],
    }, {
      label: '节点2',
      icon: 'folder',
      iconColor: '#ccc',
      expand: true,
      leaf: true,
    }],
  },
});
```

## remoteLoad

```

TreeFactory.create(document.getElementById('tree-remoteLoad'), {
  listeners: {
    loadRemote: (n, success, error, complete) => {
      setTimeout(() => {
        success([{
          label: 'remote1',
          icon: 'folder',
          iconColor: '#ccc',
          leaf: false,
          loadType: 'remote',
        },
        {
          label: 'remote2',
          icon: 'folder',
          iconColor: '#ccc',
          loadType: 'remote',
          leaf: false,
        }]);
      }, 2000);
    },
  },
  nodeConfig: {
    config: Object.assign({}, globalConfig),
    data: [{
      label: '节点1',
      icon: 'folder',
      iconColor: '#ccc',
      loadType: 'remote',
      expand: true,
      leaf: false,
    }, {
      label: '节点2',
      icon: 'folder',
      iconColor: '#ccc',
      expand: true,
      leaf: true,
    }],
  },
});
```

## checkbox

```

TreeFactory.create(document.getElementById('tree-checkbox'), {
  nodeConfig: {
    config: Object.assign({}, globalConfig),
    data: [{
      label: '节点1',
      icon: 'folder',
      iconColor: '#ccc',
      type: 'checkbox',
      expand: true,
      leaf: false,
      children: [{
        label: '节点1.1',
        icon: 'folder',
        iconColor: '#ccc',
        type: 'checkbox',
        checked: true,
        leaf: true,
      }, {
        label: '节点1.2',
        icon: 'folder',
        iconColor: '#ccc',
        type: 'checkbox',
        checked: false,
        leaf: true,
      }],
    }, {
      label: '节点2',
      icon: 'folder',
      iconColor: '#ccc',
      expand: true,
      type: 'checkbox',
      checked: false,
      leaf: true,
    }],
  },
});
```

## checkbox-remote

```

TreeFactory.create(document.getElementById('tree-checkbox-remote'), {
  listeners: {
    loadRemote: (n, success, error, complete) => {
      setTimeout(() => {
        success([{
          label: 'remote1',
          icon: 'folder',
          iconColor: '#ccc',
          leaf: false,
          loadType: 'remote',
          type: 'checkbox',
          checked: true,
          expand: true,
        },
        {
          label: 'remote2',
          icon: 'folder',
          iconColor: '#ccc',
          loadType: 'remote',
          leaf: false,
          type: 'checkbox',
          checked: false,
          expand: true,
        }]);
      }, 2000);
    },
  },
  nodeConfig: {
    config: Object.assign({}, globalConfig),
    data: [{
      label: '节点1',
      icon: 'folder',
      iconColor: '#ccc',
      loadType: 'remote',
      type: 'checkbox',
      expand: true,
      leaf: false,
    }, {
      label: '节点2',
      icon: 'folder',
      iconColor: '#ccc',
      expand: true,
      type: 'checkbox',
      checked: false,
      leaf: true,
    }],
  },
});
```

## appendChildren

```

TreeFactory.create(document.getElementById('tree-appendChildren'), {
  listeners: {
    click: (treeNode) => {
      const config = {
        label: 'newNode',
        leaf: true,
        expand: true,
        icon: 'folder',
        iconColor: '#ccc',
      };
      treeNode.appendByConfig(config);
    },
  },
  nodeConfig: {
    config: Object.assign({}, globalConfig),
    data: [{
      label: 'root',
      icon: 'folder',
      iconColor: '#ccc',
      expand: true,
      leaf: true,
    }],
  },
});
```

## appendRoot

```

const appendRootTree = TreeFactory.create(document.getElementById('tree-appendRoot'), {
  listeners: {
    click: () => {
      const config = {
        label: 'newRootNode',
        leaf: true,
        expand: true,
        icon: 'folder',
        iconColor: '#ccc',
      };
      appendRootTree.appendByConfig(config);
    },
  },
  nodeConfig: {
    config: Object.assign({}, globalConfig),
    data: [{
      label: 'root',
      icon: 'folder',
      iconColor: '#ccc',
      expand: true,
      leaf: true,
    }],
  },
});
```

## prependChildren

```

TreeFactory.create(document.getElementById('tree-prependChildren'), {
  listeners: {
    click: (treeNode) => {
      const config = {
        label: 'newNode',
        leaf: true,
        expand: true,
        icon: 'folder',
        iconColor: '#ccc',
      };
      treeNode.prependByConfig(config);
    },
  },
  nodeConfig: {
    config: Object.assign({}, globalConfig),
    data: [{
      label: 'root',
      icon: 'folder',
      iconColor: '#ccc',
      expand: true,
      leaf: true,
    }],
  },
});
```

## prependRoot

```

const prependRootTree = TreeFactory.create(document.getElementById('tree-prependRoot'), {
  listeners: {
    click: () => {
      const config = {
        label: 'newRootNode',
        leaf: true,
        expand: true,
        icon: 'folder',
        iconColor: '#ccc',
      };
      prependRootTree.prependByConfig(config);
    },
  },
  nodeConfig: {
    config: Object.assign({}, globalConfig),
    data: [{
      label: 'root',
      icon: 'folder',
      iconColor: '#ccc',
      expand: true,
      leaf: true,
    }],
  },
});
```

## insert

```

const insertChildrenTree = TreeFactory.create(document.getElementById('tree-insertChildren'), {
  listeners: {
    click: (treeNode) => {
      const config = {
        label: 'newRootNode',
        leaf: true,
        expand: true,
        icon: 'folder',
        iconColor: '#ccc',
      };

      const parentNode = treeNode.getParentNode();
      if (parentNode) {
        parentNode.insertBeforeByConfig(treeNode, config);
      } else {
        insertChildrenTree.insertBeforeByConfig(treeNode, config);
      }
    },
  },
  nodeConfig: {
    config: Object.assign({}, globalConfig),
    data: [{
      label: 'root',
      icon: 'folder',
      iconColor: '#ccc',
      expand: true,
      leaf: false,
      children: [{
        label: 'node1',
        icon: 'folder',
        iconColor: '#ccc',
        leaf: true,
      }, {
        label: 'node2',
        icon: 'folder',
        iconColor: '#ccc',
        leaf: true,
      }],
    }],
  },
});
```

## remove

```

const removeChildrenTree = TreeFactory.create(document.getElementById('tree-remove'), {
  listeners: {
    click: (treeNode) => {
      const parentNode = treeNode.getParentNode();
      if (parentNode) {
        parentNode.removeChildren(treeNode);
      } else {
        removeChildrenTree.removeChildren(treeNode);
      }
    },
  },
  nodeConfig: {
    config: Object.assign({}, globalConfig),
    data: [{
      label: 'root',
      icon: 'folder',
      iconColor: '#ccc',
      expand: true,
      leaf: false,
      children: [{
        label: 'node1',
        icon: 'folder',
        iconColor: '#ccc',
        leaf: true,
      }, {
        label: 'node2',
        icon: 'folder',
        iconColor: '#ccc',
        leaf: true,
      }],
    }],
  },
});
```

## expand

```

TreeFactory.create(document.getElementById('tree-expand'), {
  listeners: {
    expand: (n, expand) => {
      alert(expand);
    },
  },
  nodeConfig: {
    config: Object.assign({}, globalConfig),
    data: [{
      label: 'root',
      icon: 'folder',
      iconColor: '#ccc',
      expand: true,
      leaf: false,
      children: [{
        label: 'node1',
        icon: 'folder',
        iconColor: '#ccc',
        leaf: true,
      }, {
        label: 'node2',
        icon: 'folder',
        iconColor: '#ccc',
        leaf: true,
      }],
    }],
  },
});
```

## click

```

TreeFactory.create(document.getElementById('tree-click'), {
  listeners: {
    click: (n) => {
      alert(n);
    },
  },
  nodeConfig: {
    config: Object.assign({}, globalConfig),
    data: [{
      label: 'root',
      icon: 'folder',
      iconColor: '#ccc',
      expand: true,
      leaf: false,
      children: [{
        label: 'node1',
        icon: 'folder',
        iconColor: '#ccc',
        leaf: true,
      }, {
        label: 'node2',
        icon: 'folder',
        iconColor: '#ccc',
        leaf: true,
      }],
    }],
  },
});
```

## 方法

## .Tree

renderChildren(params) - 渲染children

* parentNode-TreeNodeparentNode
* globalConfig-ObjectglobalConfig
* config-Objectconfig

append(treeNode) - 添加节点

* treeNode-TreeNode节点对象

appendByConfig(config) - 根据配置添加节点

* config-Object节点配置

prepend(treeNode) - 向前添加节点

* treeNode-TreeNode节点对象

prependByConfig(config) - 根据配置向前添加节点

* config-Object节点配置

insertBefore( treeNode, newNode ) - 在指定节点之前插入节点

* treeNode-TreeNode节点对象
* newNode-TreeNode新节点对象

insertBeforeByConfig( treeNode, config ) - 根据配置在指定节点之前插入节点

* treeNode-TreeNode节点对象
* config-Object节点的配置

insertAfter( treeNode, newNode ) - 在指定节点之后插入节点

* treeNode-TreeNode节点对象
* newNode-TreeNode新节点对象

insertAfterByConfig( treeNode, config ) - 根据配置在指定节点之后插入节点

* treeNode-TreeNode节点对象
* config-Object节点的配置

replaceNode( treeNode, newNode ) - 替换指定的节点

* treeNode-TreeNode被替换节点
* newNode-TreeNode新节点对象

replaceNodeByConfig( treeNode, config ) - 根据配置替换指定节点

* treeNode-TreeNode被替换节点
* config-Object节点的配置

removeChildren(treeNode) - 删除孩子节点

* treeNode-TreeNode要删除的节点

childrens - 返回孩子节点

* childrens-Array返回的数据

getNodeByAttr( key, value ) - 根据attr获取节点

* key-String属性
* value-String值

on(type,handler) - 注册事件

* type-string 事件类型
* handler-Function 事件句柄

off(type,handler) - 注销事件

* type-string 事件类型
* handler-Function 事件句柄

## .TreeNode

append( treeNode, refresh ) - 添加节点

* treeNode-TreeNode节点对象
* refresh-boolean是否刷新节点

appendByConfig(config) - 根据配置添加节点

* config-Object节点配置

prepend(treeNode) - 向前添加节点

* treeNode-TreeNode节点对象

prependByConfig(config) - 根据配置向前添加节点

* config-Object节点配置

insertBefore( treeNode, newNode ) - 在指定节点之前插入节点

* treeNode-TreeNode节点对象
* newNode-TreeNode新节点对象

insertBeforeByConfig( treeNode, config ) - 根据配置在指定节点之前插入节点

* treeNode-TreeNode节点对象
* config-Object节点的配置

insertAfter( treeNode, newNode ) - 在指定节点之后插入节点

* treeNode-TreeNode节点对象
* newNode-TreeNode新节点对象

insertAfterByConfig( treeNode, config ) - 根据配置在指定节点之后插入节点

* treeNode-TreeNode节点对象
* config-Object节点的配置

replaceNode( treeNode, newNode ) - 替换指定的节点

* treeNode-TreeNode被替换节点
* newNode-TreeNode新节点对象

replaceNodeByConfig( treeNode, config ) - 根据配置替换指定节点

* treeNode-TreeNode被替换节点
* config-Object节点的配置

removeChildren(treeNode) - 删除孩子节点

* treeNode-TreeNode要删除的节点

childrens - 返回孩子节点

* childrens-Array返回的数据

expand - 展开或闭合节点

* expand-boolean展开或闭合

resetRemoteNode - 重置loadType === 'remote' 的节点使其能够重新载入数据，并且先闭合节点

isExpand - 节点是否展开

* expand-boolean节点是否展开

getAttr(attr) - 获取属性值

* attr-String属性

setAttr( key, value ) - 设置属性值

* key-String属性
* value-String值

hasAttr( key, value ) - 是否有属性为key且值为value的属性

* key-String属性
* value-String值

getLabel - 获取节点label

* label-String获取节点label

setLabel( label) - 设置节点的label

* label-String节点的label

getIcon - 获取节点icon

* icon-String节点的icon

setIcon( icon) - 设置节点的icon

* icon-String节点的icon(font-awesome)

getIconColor - 获取节点iconColor

* iconColor-String节点的iconColor

setIconColor(iconColor) - 设置节点的iconColor

* iconColor-String节点的icon的颜色

isLeaf - 是否是叶子节点

isRoot - 是否是根节点

getEl - 获取节点el

isChecked - 如果节点类型为checkbox时是否选中

getType - 获取节点类型

getParentNode - 获取父节点

isCheckboxType - 是否是类型为checkbox的节点

checked(check) - 如果类型是checkbox时选中或反选此节点

* check-boolean选中或反选

refresh - 刷新节点

checkboxDrillUp - 向上刷新

detailItemInputsRecursive - 向下刷新

## 事件

|  名称 |  说明 |
| --- | --- |
| click |  节点点击 |
| expand |  节点展开或闭合 |
| checked |  节点选中或反选 |
| loadRemote |  异步节点加载 |
