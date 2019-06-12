// import DemoUtil from '@ctmobile/ui-demo-util';
// import { Dom6 } from '@ctmobile/ui-util';
// import SurnamesFactory from '@ctmobile/ui-surnames';
// import './index.less';
//
// DemoUtil.initial();
//
// const el = document.getElementById('normal');
//
// function createSurnames() {
//   const contentEl = el.querySelector('.ct-surnames-content');
//   const indexNames = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
//     'H',
//     'I',
//     'J',
//     'K',
//     'L',
//     'M',
//     'N',
//     'O',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'U',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z',
//     '#',
//   ];
//   const df = document.createDocumentFragment();
//   for (let i = 0; i < indexNames.length; i++) {
//     const index = indexNames[i];
//     let str = `
//         <div class="ct-surnames-group">
//           <a class="ct-surnames-group-title" data-name="${index}">${index}</a>
//           <div class="ct-surnames-group-inner">
//             <ul>`;
//
//     for (let j = 0; j < 10; j++) {
//       str += `<li>${index}${j + 1}</li>`;
//     }
//
//     str += `    </ul>
//           </div>
//         </div>`;
//
//     const groupEl = Dom6.createElement(str);
//     df.appendChild(groupEl);
//   }
//   contentEl.appendChild(df);
// }
//
//
// createSurnames();
//
// const surnames = SurnamesFactory.create(el, { position: 'right' });
//
// setTimeout(() => {
//   // surnames.scrollToAnimation('#');
// }, 3000);
//

import TreeFactory from '@ctmobile/ui-tree/tree';
import '@ctmobile/ui-tree/tree.less';
import './index.less';
import TreeNode from '@ctmobile/ui-tree/treenode';

const tree = TreeFactory.create(document.getElementById('tree'), {
  listeners: {
    click: (n) => {
      // n.setLabel('CTMobile-UI-Tree');
      // let expand = n.getAttr('expand');
      // if (!expand) {
      //   expand = 'false';
      // }
      // if (expand === 'true') {
      //   n.setIcon('folder');
      //   n.setIconColor('red');
      //   n.setAttr('expand', 'false');
      // } else {
      //   n.setAttr('expand', 'true');
      //   n.setIconColor('#000');
      //   n.setIcon('folder-open');
      // }

      const globalConfig = {
        loadType: 'local',
        expand: true,
        type: 'normal',
      };

      const config = {
        label: '往前添加1',
        leaf: false,
        expand: true,
        // loadType: 'remote',
        type: 'checkbox',
        checked: true,
        icon: 'folder',
        children: [
          {
            label: '往前添加1.1',
            leaf: false,
            expand: true,
            type: 'checkbox',
            checked: false,
            icon: 'folder',
            children: [
              {
                label: '往前添加1.1.1',
                leaf: true,
                expand: true,
                type: 'checkbox',
                checked: false,
                icon: 'folder',
              },
              {
                label: '往前添加1.1.2',
                leaf: true,
                expand: true,
                type: 'checkbox',
                checked: false,
                icon: 'folder',
              },
              {
                label: '往前添加1.1.3',
                leaf: true,
                expand: true,
                type: 'checkbox',
                checked: false,
                icon: 'folder',
              }],
          },
          {
            label: '往前添加1.2',
            leaf: true,
            expand: true,
            type: 'checkbox',
            checked: true,
            icon: 'folder',
          },
        ],
      };

      // const treeNode = new TreeNode({
      //   globalConfig,
      //   config,
      //   tree,
      //   parentNode: n,
      // });
      //
      // tree.renderChildren({
      //   parentNode: treeNode, globalConfig, config,
      // });

      // tree.appendByConfig(config);
      // n.append(treeNode, true);
      // n.prepend(treeNode);
      // n.appendByConfig(config);
      n.prependByConfig(config);
      // if (n.isLeaf()) return false;
      // const childrens = n.childrens();
      // n.removeChildren(childrens[0]);

      // insertBeforeByConfig;
      // insertAfter;
      // insertAfterByConfig;
      // replaceNode;
      // replaceNodeByConfig;
      // removeChildren;
    },
    expand: (n, expand) => {
      console.log(n, expand);
      // if (expand) {
      //   setTimeout(() => {
      //     n.expand(false);
      //   }, 5000);
      // }
    },
    loadRemote: (n, success, error, complete) => {
      setTimeout(() => {
        success([{
          label: '节点1.1',
          icon: 'folder',
          iconColor: '#ccc',
          leaf: false,
          loadType: 'remote',
          type: 'checkbox',
          checked: false,
        },
          {
            label: '节点1.2',
            icon: 'folder',
            iconColor: '#ccc',
            leaf: true,
            type: 'checkbox',
            checked: true,
          }]);
      }, 2000);
    },
  },
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
        // loadType: 'remote',
        icon: 'folder',
        type: 'checkbox',
        attr: {
          id: '1',
        },
        children: [
          {
            label: '节点1.1',
            leaf: true,
            expand: true,
            loadType: 'local',
            icon: 'folder',
            type: 'checkbox',
            checked: true,
            // children: [
            //   {
            //     label: '节点1.1.1',
            //     leaf: true,
            //     expand: true,
            //     loadType: 'local',
            //     icon: 'folder',
            //     type: 'checkbox',
            //     checked: false,
            //   },
            //   {
            //     label: '节点1.1.2',
            //     leaf: true,
            //     expand: true,
            //     loadType: 'local',
            //     icon: 'folder',
            //     type: 'checkbox',
            //     checked: true,
            //   }],
          },
          {
            label: '节点1.2',
            leaf: true,
            expand: true,
            loadType: 'local',
            icon: 'folder',
            type: 'checkbox',
            checked: true,
          }],
      }],
  },
});

const result = tree.getNodeByAttr('id', '1');

