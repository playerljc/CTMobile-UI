import DemoUtil from '@ctmobile/ui-demo-util';
import TreeFactory from '@ctmobile/ui-tree/tree';

import '@ctmobile/ui-tree/themes/default/tree.less';
import '@ctmobile/ui-tree/tree.less';

import './index.less';

DemoUtil.initial();

const globalConfig = {
  loadType: 'local',
  expand: true,
  type: 'normal',
};

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

(function () {
  const checkedNodes = [];
  TreeFactory.create(document.getElementById('tree-beforechecked'), {
    listeners: {
      beforeChecked: (n, checked) => {
        console.log('beforechecked:', n.nodeConfig.label);
        if (checked) {
          const flag = checkedNodes.length < 5;
          if (!flag) {
            alert('最多选择5个节点');
          }
          return flag;
        } else {
          return true;
        }
      },
      checked: (n, checked) => {
        console.log('checked:', n.nodeConfig.label, checked);
        if (checked) {
          if (checkedNodes.indexOf(n) === -1) {
            checkedNodes.push(n);
          }
        } else {
          const index = checkedNodes.indexOf(n);
          if (index !== -1) {
            checkedNodes.splice(index, 1);
          }
        }
      },
    },
    nodeConfig: {
      config: Object.assign({}, Object.assign({}, globalConfig, {
        checkedCascade: false,
      })),
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
          checked: false,
          leaf: false,
          children: [{
            label: '节点1.1.1',
            icon: 'folder',
            iconColor: '#ccc',
            type: 'checkbox',
            checked: false,
            leaf: true,
          }, {
            label: '节点1.1.2',
            icon: 'folder',
            iconColor: '#ccc',
            type: 'checkbox',
            checked: false,
            leaf: true,
          }],
        }, {
          label: '节点1.2',
          icon: 'folder',
          iconColor: '#ccc',
          type: 'checkbox',
          checked: false,
          leaf: false,
          children: [{
            label: '节点1.2.1',
            icon: 'folder',
            iconColor: '#ccc',
            type: 'checkbox',
            checked: false,
            leaf: true,
          }, {
            label: '节点1.2.2',
            icon: 'folder',
            iconColor: '#ccc',
            type: 'checkbox',
            checked: false,
            leaf: true,
          }],
        }],
      }],
    },
  });
}());

TreeFactory.create(document.getElementById('tree-checkedCascade'), {
  nodeConfig: {
    config: Object.assign({}, Object.assign({}, globalConfig, {
      checkedCascade: false,
    })),
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
        checked: false,
        leaf: false,
        children: [{
          label: '节点1.1.1',
          icon: 'folder',
          iconColor: '#ccc',
          type: 'checkbox',
          checked: false,
          leaf: true,
        }, {
          label: '节点1.1.2',
          icon: 'folder',
          iconColor: '#ccc',
          type: 'checkbox',
          checked: false,
          leaf: true,
        }],
      }, {
        label: '节点1.2',
        icon: 'folder',
        iconColor: '#ccc',
        type: 'checkbox',
        checked: false,
        leaf: false,
        children: [{
          label: '节点1.2.1',
          icon: 'folder',
          iconColor: '#ccc',
          type: 'checkbox',
          checked: false,
          leaf: true,
        }, {
          label: '节点1.2.2',
          icon: 'folder',
          iconColor: '#ccc',
          type: 'checkbox',
          checked: false,
          leaf: true,
        }],
      }],
    }],
  },
});

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

// import TreeFactory from '@ctmobile/ui-tree';
// // import '@ctmobile/ui-tree/tree.less';
// // import '@ctmobile/ui-tree/themes/default/tree.less';
// import './index.less';
// import TreeNode from '@ctmobile/ui-tree/lib/treenode';
//
// const tree = TreeFactory.create(document.getElementById('tree'), {
//   listeners: {
//     click: (n) => {
//       // n.setLabel('CTMobile-UI-Tree');
//       // let expand = n.getAttr('expand');
//       // if (!expand) {
//       //   expand = 'false';
//       // }
//       // if (expand === 'true') {
//       //   n.setIcon('folder');
//       //   n.setIconColor('red');
//       //   n.setAttr('expand', 'false');
//       // } else {
//       //   n.setAttr('expand', 'true');
//       //   n.setIconColor('#000');
//       //   n.setIcon('folder-open');
//       // }
//
//       const globalConfig = {
//         loadType: 'local',
//         expand: true,
//         type: 'normal',
//       };
//
//       const config = {
//         label: '往前添加1',
//         leaf: false,
//         expand: true,
//         // loadType: 'remote',
//         type: 'checkbox',
//         checked: true,
//         icon: 'folder',
//         children: [
//           {
//             label: '往前添加1.1',
//             leaf: false,
//             expand: true,
//             type: 'checkbox',
//             checked: false,
//             icon: 'folder',
//             children: [
//               {
//                 label: '往前添加1.1.1',
//                 leaf: true,
//                 expand: true,
//                 type: 'checkbox',
//                 checked: false,
//                 icon: 'folder',
//               },
//               {
//                 label: '往前添加1.1.2',
//                 leaf: false,
//                 expand: true,
//                 loadType: 'remote',
//                 type: 'checkbox',
//                 checked: false,
//                 icon: 'folder',
//               },
//               {
//                 label: '往前添加1.1.3',
//                 leaf: true,
//                 expand: true,
//                 type: 'checkbox',
//                 checked: false,
//                 icon: 'folder',
//               }],
//           },
//           {
//             label: '往前添加1.2',
//             leaf: true,
//             expand: true,
//             type: 'checkbox',
//             checked: true,
//             icon: 'folder',
//           },
//         ],
//       };
//
//       // const treeNode = new TreeNode({
//       //   globalConfig,
//       //   config,
//       //   tree,
//       //   parentNode: n,
//       // });
//       //
//       // tree.renderChildren({
//       //   parentNode: treeNode, globalConfig, config,
//       // });
//
//       // tree.appendByConfig(config);
//       // n.append(treeNode, true);
//       // n.prepend(treeNode);
//       // n.appendByConfig(config);
//       // n.prependByConfig(config);
//       // if (n.isLeaf()) return false;
//
//       const parentNode = n.getParentNode();
//       if (parentNode) {
//         parentNode.replaceNodeByConfig(n, config);
//       } else {
//         tree.replaceNodeByConfig(n, config);
//       }
//       // n.removeChildren(childrens[0]);
//
//
//       // insertBeforeByConfig;
//       // insertAfter;
//       // insertAfterByConfig;
//       // replaceNode;
//       // replaceNodeByConfig;
//       // removeChildren;
//     },
//     expand: (n, expand) => {
//       console.log(n, expand);
//       // if (expand) {
//       //   setTimeout(() => {
//       //     n.expand(false);
//       //   }, 5000);
//       // }
//     },
//     loadRemote: (n, success, error, complete) => {
//       setTimeout(() => {
//         success([{
//           label: '节点1.1',
//           icon: 'folder',
//           iconColor: '#ccc',
//           leaf: true,
//           loadType: 'remote',
//           type: 'checkbox',
//           checked: false,
//         },
//         {
//           label: '节点1.2',
//           icon: 'folder',
//           iconColor: '#ccc',
//           leaf: true,
//           type: 'checkbox',
//           checked: true,
//         }]);
//       }, 2000);
//     },
//     checked: (treeNode, checked) => {
//       console.log(treeNode, checked);
//     },
//   },
//   nodeConfig: {
//     config: {
//       loadType: 'local',
//       expand: true,
//       type: 'normal',
//     },
//     data: [
//       {
//         label: '节点1',
//         leaf: false,
//         expand: true,
//         // loadType: 'remote',
//         icon: 'folder',
//         type: 'checkbox',
//         attr: {
//           id: '1',
//         },
//         children: [
//           {
//             label: '节点1.1',
//             leaf: true,
//             expand: true,
//             loadType: 'local',
//             icon: 'folder',
//             type: 'checkbox',
//             checked: true,
//             // children: [
//             //   {
//             //     label: '节点1.1.1',
//             //     leaf: true,
//             //     expand: true,
//             //     loadType: 'local',
//             //     icon: 'folder',
//             //     type: 'checkbox',
//             //     checked: false,
//             //   },
//             //   {
//             //     label: '节点1.1.2',
//             //     leaf: true,
//             //     expand: true,
//             //     loadType: 'local',
//             //     icon: 'folder',
//             //     type: 'checkbox',
//             //     checked: true,
//             //   }],
//           },
//           {
//             label: '节点1.2',
//             leaf: true,
//             expand: true,
//             loadType: 'local',
//             icon: 'folder',
//             type: 'checkbox',
//             checked: true,
//           }],
//       }],
//   },
// });
//
// const result = tree.getNodeByAttr('id', '1');

