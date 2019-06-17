// import DemoUtil from '@ctmobile/ui-demo-util';
import { Dom6 } from '@ctmobile/ui-util';
import SwipeoutListFactory from '@ctmobile/ui-swipeout/swipeoutlist';
import '@ctmobile/ui-swipeout/swipeout.less';
import './index.less';
//
// DemoUtil.initial();
//
// const globalConfig = {
//   loadType: 'local',
//   expand: true,
//   type: 'normal',
// };
//
// TreeFactory.create(document.getElementById('tree-normal'), {
//   nodeConfig: {
//     config: Object.assign({}, globalConfig),
//     data: [{
//       label: '节点1',
//       expand: true,
//       leaf: false,
//       children: [{
//         label: '节点1.1',
//         expand: true,
//         leaf: true,
//       }, {
//         label: '节点1.2',
//         expand: true,
//         leaf: true,
//       }],
//     }, {
//       label: '节点2',
//       expand: true,
//       leaf: true,
//     }],
//   },
// });
//
// TreeFactory.create(document.getElementById('tree-icon'), {
//   nodeConfig: {
//     config: Object.assign({}, globalConfig),
//     data: [{
//       label: '节点1',
//       icon: 'folder',
//       expand: true,
//       leaf: false,
//       children: [{
//         label: '节点1.1',
//         icon: 'folder',
//         expand: true,
//         leaf: true,
//       }, {
//         label: '节点1.2',
//         icon: 'folder',
//         expand: true,
//         leaf: true,
//       }],
//     }, {
//       label: '节点2',
//       icon: 'folder',
//       expand: true,
//       leaf: true,
//     }],
//   },
// });
//
// TreeFactory.create(document.getElementById('tree-iconColor'), {
//   nodeConfig: {
//     config: Object.assign({}, globalConfig),
//     data: [{
//       label: '节点1',
//       icon: 'folder',
//       iconColor: '#ccc',
//       expand: true,
//       leaf: false,
//       children: [{
//         label: '节点1.1',
//         icon: 'folder',
//         iconColor: '#ccc',
//         expand: true,
//         leaf: true,
//       }, {
//         label: '节点1.2',
//         icon: 'folder',
//         iconColor: '#ccc',
//         expand: true,
//         leaf: true,
//       }],
//     }, {
//       label: '节点2',
//       icon: 'folder',
//       iconColor: '#ccc',
//       expand: true,
//       leaf: true,
//     }],
//   },
// });
//
// TreeFactory.create(document.getElementById('tree-remoteLoad'), {
//   listeners: {
//     loadRemote: (n, success, error, complete) => {
//       setTimeout(() => {
//         success([{
//           label: 'remote1',
//           icon: 'folder',
//           iconColor: '#ccc',
//           leaf: false,
//           loadType: 'remote',
//         },
//         {
//           label: 'remote2',
//           icon: 'folder',
//           iconColor: '#ccc',
//           loadType: 'remote',
//           leaf: false,
//         }]);
//       }, 2000);
//     },
//   },
//   nodeConfig: {
//     config: Object.assign({}, globalConfig),
//     data: [{
//       label: '节点1',
//       icon: 'folder',
//       iconColor: '#ccc',
//       loadType: 'remote',
//       expand: true,
//       leaf: false,
//     }, {
//       label: '节点2',
//       icon: 'folder',
//       iconColor: '#ccc',
//       expand: true,
//       leaf: true,
//     }],
//   },
// });
//
// TreeFactory.create(document.getElementById('tree-checkbox'), {
//   nodeConfig: {
//     config: Object.assign({}, globalConfig),
//     data: [{
//       label: '节点1',
//       icon: 'folder',
//       iconColor: '#ccc',
//       type: 'checkbox',
//       expand: true,
//       leaf: false,
//       children: [{
//         label: '节点1.1',
//         icon: 'folder',
//         iconColor: '#ccc',
//         type: 'checkbox',
//         checked: true,
//         leaf: true,
//       }, {
//         label: '节点1.2',
//         icon: 'folder',
//         iconColor: '#ccc',
//         type: 'checkbox',
//         checked: false,
//         leaf: true,
//       }],
//     }, {
//       label: '节点2',
//       icon: 'folder',
//       iconColor: '#ccc',
//       expand: true,
//       type: 'checkbox',
//       checked: false,
//       leaf: true,
//     }],
//   },
// });
//
// TreeFactory.create(document.getElementById('tree-checkbox-remote'), {
//   listeners: {
//     loadRemote: (n, success, error, complete) => {
//       setTimeout(() => {
//         success([{
//           label: 'remote1',
//           icon: 'folder',
//           iconColor: '#ccc',
//           leaf: false,
//           loadType: 'remote',
//           type: 'checkbox',
//           checked: true,
//           expand: true,
//         },
//         {
//           label: 'remote2',
//           icon: 'folder',
//           iconColor: '#ccc',
//           loadType: 'remote',
//           leaf: false,
//           type: 'checkbox',
//           checked: false,
//           expand: true,
//         }]);
//       }, 2000);
//     },
//   },
//   nodeConfig: {
//     config: Object.assign({}, globalConfig),
//     data: [{
//       label: '节点1',
//       icon: 'folder',
//       iconColor: '#ccc',
//       loadType: 'remote',
//       type: 'checkbox',
//       expand: true,
//       leaf: false,
//     }, {
//       label: '节点2',
//       icon: 'folder',
//       iconColor: '#ccc',
//       expand: true,
//       type: 'checkbox',
//       checked: false,
//       leaf: true,
//     }],
//   },
// });
//
// TreeFactory.create(document.getElementById('tree-appendChildren'), {
//   listeners: {
//     click: (treeNode) => {
//       const config = {
//         label: 'newNode',
//         leaf: true,
//         expand: true,
//         icon: 'folder',
//         iconColor: '#ccc',
//       };
//       treeNode.appendByConfig(config);
//     },
//   },
//   nodeConfig: {
//     config: Object.assign({}, globalConfig),
//     data: [{
//       label: 'root',
//       icon: 'folder',
//       iconColor: '#ccc',
//       expand: true,
//       leaf: true,
//     }],
//   },
// });
//
// const appendRootTree = TreeFactory.create(document.getElementById('tree-appendRoot'), {
//   listeners: {
//     click: () => {
//       const config = {
//         label: 'newRootNode',
//         leaf: true,
//         expand: true,
//         icon: 'folder',
//         iconColor: '#ccc',
//       };
//       appendRootTree.appendByConfig(config);
//     },
//   },
//   nodeConfig: {
//     config: Object.assign({}, globalConfig),
//     data: [{
//       label: 'root',
//       icon: 'folder',
//       iconColor: '#ccc',
//       expand: true,
//       leaf: true,
//     }],
//   },
// });
//
// TreeFactory.create(document.getElementById('tree-prependChildren'), {
//   listeners: {
//     click: (treeNode) => {
//       const config = {
//         label: 'newNode',
//         leaf: true,
//         expand: true,
//         icon: 'folder',
//         iconColor: '#ccc',
//       };
//       treeNode.prependByConfig(config);
//     },
//   },
//   nodeConfig: {
//     config: Object.assign({}, globalConfig),
//     data: [{
//       label: 'root',
//       icon: 'folder',
//       iconColor: '#ccc',
//       expand: true,
//       leaf: true,
//     }],
//   },
// });
//
// const prependRootTree = TreeFactory.create(document.getElementById('tree-prependRoot'), {
//   listeners: {
//     click: () => {
//       const config = {
//         label: 'newRootNode',
//         leaf: true,
//         expand: true,
//         icon: 'folder',
//         iconColor: '#ccc',
//       };
//       prependRootTree.prependByConfig(config);
//     },
//   },
//   nodeConfig: {
//     config: Object.assign({}, globalConfig),
//     data: [{
//       label: 'root',
//       icon: 'folder',
//       iconColor: '#ccc',
//       expand: true,
//       leaf: true,
//     }],
//   },
// });
//
// const insertChildrenTree = TreeFactory.create(document.getElementById('tree-insertChildren'), {
//   listeners: {
//     click: (treeNode) => {
//       const config = {
//         label: 'newRootNode',
//         leaf: true,
//         expand: true,
//         icon: 'folder',
//         iconColor: '#ccc',
//       };
//
//       const parentNode = treeNode.getParentNode();
//       if (parentNode) {
//         parentNode.insertBeforeByConfig(treeNode, config);
//       } else {
//         insertChildrenTree.insertBeforeByConfig(treeNode, config);
//       }
//     },
//   },
//   nodeConfig: {
//     config: Object.assign({}, globalConfig),
//     data: [{
//       label: 'root',
//       icon: 'folder',
//       iconColor: '#ccc',
//       expand: true,
//       leaf: false,
//       children: [{
//         label: 'node1',
//         icon: 'folder',
//         iconColor: '#ccc',
//         leaf: true,
//       }, {
//         label: 'node2',
//         icon: 'folder',
//         iconColor: '#ccc',
//         leaf: true,
//       }],
//     }],
//   },
// });
//
// const removeChildrenTree = TreeFactory.create(document.getElementById('tree-remove'), {
//   listeners: {
//     click: (treeNode) => {
//       const parentNode = treeNode.getParentNode();
//       if (parentNode) {
//         parentNode.removeChildren(treeNode);
//       } else {
//         removeChildrenTree.removeChildren(treeNode);
//       }
//     },
//   },
//   nodeConfig: {
//     config: Object.assign({}, globalConfig),
//     data: [{
//       label: 'root',
//       icon: 'folder',
//       iconColor: '#ccc',
//       expand: true,
//       leaf: false,
//       children: [{
//         label: 'node1',
//         icon: 'folder',
//         iconColor: '#ccc',
//         leaf: true,
//       }, {
//         label: 'node2',
//         icon: 'folder',
//         iconColor: '#ccc',
//         leaf: true,
//       }],
//     }],
//   },
// });
//
// TreeFactory.create(document.getElementById('tree-expand'), {
//   listeners: {
//     expand: (n, expand) => {
//       alert(expand);
//     },
//   },
//   nodeConfig: {
//     config: Object.assign({}, globalConfig),
//     data: [{
//       label: 'root',
//       icon: 'folder',
//       iconColor: '#ccc',
//       expand: true,
//       leaf: false,
//       children: [{
//         label: 'node1',
//         icon: 'folder',
//         iconColor: '#ccc',
//         leaf: true,
//       }, {
//         label: 'node2',
//         icon: 'folder',
//         iconColor: '#ccc',
//         leaf: true,
//       }],
//     }],
//   },
// });
//
// TreeFactory.create(document.getElementById('tree-click'), {
//   listeners: {
//     click: (n) => {
//       alert(n);
//     },
//   },
//   nodeConfig: {
//     config: Object.assign({}, globalConfig),
//     data: [{
//       label: 'root',
//       icon: 'folder',
//       iconColor: '#ccc',
//       expand: true,
//       leaf: false,
//       children: [{
//         label: 'node1',
//         icon: 'folder',
//         iconColor: '#ccc',
//         leaf: true,
//       }, {
//         label: 'node2',
//         icon: 'folder',
//         iconColor: '#ccc',
//         leaf: true,
//       }],
//     }],
//   },
// });
//
// // import TreeFactory from '@ctmobile/ui-tree';
// // // import '@ctmobile/ui-tree/tree.less';
// // // import '@ctmobile/ui-tree/themes/default/tree.less';
// // import './index.less';
// // import TreeNode from '@ctmobile/ui-tree/lib/treenode';
// //
// // const tree = TreeFactory.create(document.getElementById('tree'), {
// //   listeners: {
// //     click: (n) => {
// //       // n.setLabel('CTMobile-UI-Tree');
// //       // let expand = n.getAttr('expand');
// //       // if (!expand) {
// //       //   expand = 'false';
// //       // }
// //       // if (expand === 'true') {
// //       //   n.setIcon('folder');
// //       //   n.setIconColor('red');
// //       //   n.setAttr('expand', 'false');
// //       // } else {
// //       //   n.setAttr('expand', 'true');
// //       //   n.setIconColor('#000');
// //       //   n.setIcon('folder-open');
// //       // }
// //
// //       const globalConfig = {
// //         loadType: 'local',
// //         expand: true,
// //         type: 'normal',
// //       };
// //
// //       const config = {
// //         label: '往前添加1',
// //         leaf: false,
// //         expand: true,
// //         // loadType: 'remote',
// //         type: 'checkbox',
// //         checked: true,
// //         icon: 'folder',
// //         children: [
// //           {
// //             label: '往前添加1.1',
// //             leaf: false,
// //             expand: true,
// //             type: 'checkbox',
// //             checked: false,
// //             icon: 'folder',
// //             children: [
// //               {
// //                 label: '往前添加1.1.1',
// //                 leaf: true,
// //                 expand: true,
// //                 type: 'checkbox',
// //                 checked: false,
// //                 icon: 'folder',
// //               },
// //               {
// //                 label: '往前添加1.1.2',
// //                 leaf: false,
// //                 expand: true,
// //                 loadType: 'remote',
// //                 type: 'checkbox',
// //                 checked: false,
// //                 icon: 'folder',
// //               },
// //               {
// //                 label: '往前添加1.1.3',
// //                 leaf: true,
// //                 expand: true,
// //                 type: 'checkbox',
// //                 checked: false,
// //                 icon: 'folder',
// //               }],
// //           },
// //           {
// //             label: '往前添加1.2',
// //             leaf: true,
// //             expand: true,
// //             type: 'checkbox',
// //             checked: true,
// //             icon: 'folder',
// //           },
// //         ],
// //       };
// //
// //       // const treeNode = new TreeNode({
// //       //   globalConfig,
// //       //   config,
// //       //   tree,
// //       //   parentNode: n,
// //       // });
// //       //
// //       // tree.renderChildren({
// //       //   parentNode: treeNode, globalConfig, config,
// //       // });
// //
// //       // tree.appendByConfig(config);
// //       // n.append(treeNode, true);
// //       // n.prepend(treeNode);
// //       // n.appendByConfig(config);
// //       // n.prependByConfig(config);
// //       // if (n.isLeaf()) return false;
// //
// //       const parentNode = n.getParentNode();
// //       if (parentNode) {
// //         parentNode.replaceNodeByConfig(n, config);
// //       } else {
// //         tree.replaceNodeByConfig(n, config);
// //       }
// //       // n.removeChildren(childrens[0]);
// //
// //
// //       // insertBeforeByConfig;
// //       // insertAfter;
// //       // insertAfterByConfig;
// //       // replaceNode;
// //       // replaceNodeByConfig;
// //       // removeChildren;
// //     },
// //     expand: (n, expand) => {
// //       console.log(n, expand);
// //       // if (expand) {
// //       //   setTimeout(() => {
// //       //     n.expand(false);
// //       //   }, 5000);
// //       // }
// //     },
// //     loadRemote: (n, success, error, complete) => {
// //       setTimeout(() => {
// //         success([{
// //           label: '节点1.1',
// //           icon: 'folder',
// //           iconColor: '#ccc',
// //           leaf: true,
// //           loadType: 'remote',
// //           type: 'checkbox',
// //           checked: false,
// //         },
// //         {
// //           label: '节点1.2',
// //           icon: 'folder',
// //           iconColor: '#ccc',
// //           leaf: true,
// //           type: 'checkbox',
// //           checked: true,
// //         }]);
// //       }, 2000);
// //     },
// //     checked: (treeNode, checked) => {
// //       console.log(treeNode, checked);
// //     },
// //   },
// //   nodeConfig: {
// //     config: {
// //       loadType: 'local',
// //       expand: true,
// //       type: 'normal',
// //     },
// //     data: [
// //       {
// //         label: '节点1',
// //         leaf: false,
// //         expand: true,
// //         // loadType: 'remote',
// //         icon: 'folder',
// //         type: 'checkbox',
// //         attr: {
// //           id: '1',
// //         },
// //         children: [
// //           {
// //             label: '节点1.1',
// //             leaf: true,
// //             expand: true,
// //             loadType: 'local',
// //             icon: 'folder',
// //             type: 'checkbox',
// //             checked: true,
// //             // children: [
// //             //   {
// //             //     label: '节点1.1.1',
// //             //     leaf: true,
// //             //     expand: true,
// //             //     loadType: 'local',
// //             //     icon: 'folder',
// //             //     type: 'checkbox',
// //             //     checked: false,
// //             //   },
// //             //   {
// //             //     label: '节点1.1.2',
// //             //     leaf: true,
// //             //     expand: true,
// //             //     loadType: 'local',
// //             //     icon: 'folder',
// //             //     type: 'checkbox',
// //             //     checked: true,
// //             //   }],
// //           },
// //           {
// //             label: '节点1.2',
// //             leaf: true,
// //             expand: true,
// //             loadType: 'local',
// //             icon: 'folder',
// //             type: 'checkbox',
// //             checked: true,
// //           }],
// //       }],
// //   },
// // });
// //
// // const result = tree.getNodeByAttr('id', '1');
//

const el = document.getElementById('list');
const elInner = el.children[0];

const swiperoutList = SwipeoutListFactory.create(el,
  {
    listeners: {
      init: (swiper) => {
        console.log(swiper);
        el.style.visibility = 'visible';
      },
      slideChangeTransitionStart: (swiper) => {
        console.log(swiper);
      },
      slideChangeTransitionEnd: (swiper) => {
        console.log(swiper);
      },
    },
  }
);

document.getElementById('add').addEventListener('click', () => {
  const insertEl = Dom6.createElement(
    `
      <li>
        <div class="ct-swipeout swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide ct-swipeout-before">
              <div class="swipeoutBtn del">opt1</div>
              <div class="swipeoutBtn edit">opt2</div>
            </div>
            <a class="swiper-slide ct-swipeout-main item-link item-content">
              <div class="item-media"><img src="http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg" width="80"/></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Yellow Submarine</div>
                  <div class="item-after">$15</div>
                </div>
                <div class="item-subtitle">Beatles</div>
                <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut
                  turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit
                  amet,
                  pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui
                  laoreet, commodo augue id, pulvinar lacus.
                </div>
              </div>
            </a>
            <div class="swiper-slide ct-swipeout-after">
              <div class="swipeoutBtn del">opt1</div>
              <div class="swipeoutBtn edit">opt2</div>
            </div>
          </div>
        </div>
      </li>
    `
  );
  elInner.appendChild(insertEl);
  swiperoutList.refresh();
});

document.getElementById('slideBefore').addEventListener('click', () => {
  swiperoutList.slideBeforeAll();
});

document.getElementById('slideAfter').addEventListener('click', () => {
  swiperoutList.slideAfterAll();
});

document.getElementById('close').addEventListener('click', () => {
  swiperoutList.closeAll();
});

document.getElementById('deleteBtn').addEventListener('click', () => {
  const firstRowEl = document.getElementById('firstRow');
  const swiper = swiperoutList.getSwiper(0);
  swiper.removeAnimation(firstRowEl);
});
