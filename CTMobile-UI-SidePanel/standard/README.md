# SidePanel

* [基本布局](#sidepanel-layout)
  - [Overlay](#sidepanel-layout-overlay)
  - [Push](#sidepanel-layout-push)
  - [Reveal](#sidepanel-layout-reveal)

* [初始化](#sidepanel-initial)

* [例子](#sidepanel-demo)
* [方法](#sidepanel-methods)
* [事件](#sidepanel-events)
  - [afterShow](#sidepanel-events-aftershow)
  - [afterClose](#sidepanel-events-afterclose)
  - [create](#sidepanel-events-create)
  - [beforeShow](#sidepanel-events-beforeshow)
  - [beforeClose](#sidepanel-events-beforeclose)

## 基本布局

### overlay

* ct-sidepanel-overlay - 整体容器

### push

* ct-sidepanel-push-master - 整体容器
  - ct-sidepanel-push - 滑动的面板
  - ct-sidepanel-push-slave - 主面板

### reveal

* ct-sidepanel-reveal - 滑动面板
* ct-sidepanel-reveal-master - 主面板

## 初始化

```

      import SidePanel from '@ctmobile/ui-sidepanel/sidepanel';
      import '@ctmobile/ui-sidepanel/sidepanel.less';

      this.leftSideDom = document.querySelector('.ct-sidepanel-overlay-left');

      this.leftPanel = SidePanel(this.leftSideDom, {
        mask: true,
        width: '80%',
        type: 'overlay',
        direction: 'left',
      });

      this.leftPanel.show();

```

|  名称 |  说明 |
| --- | --- |
| {HtmlElement} - el |  面板的el元素 |
| {object} - config |

配置

width {String} - 宽度

height {String} - 高度

mask {boolean} - 是否有遮罩

zIndex {String} - 层级

type {String} - [overlay(覆盖) | reveal(揭示) | push(推动)]

time {String} - 滑动的时间 300ms

direction {String} -overlay : [left | right | top | bottom]reveal : [left | right]push : [left | right]

listeners {Object} - 事件注册  |

## 例子

#### html

#### js

## 方法

show - 显示

close - 关闭

isCollapse - 是否显示

on( type, handler, ) - 注册事件

* type-string 事件类型
* handler-Function 事件句柄

off( type, handler, ) - 注销事件

* type-string 事件类型
* handler-Function 事件句柄

## 事件

|  名称 |  说明 |
| --- | --- |
| create |  创建 |
| beforeShow |  显示之前 |
| beforeClose |  关闭之前 |
| afterShow |  显示之后 |
| afterClose |  关闭之后 |

```

import SidePanel from '@ctmobile/ui-sidepanel/sidepanel';
import '@ctmobile/ui-sidepanel/sidepanel.less';

this.leftSideDom = document.querySelector('.ct-sidepanel-overlay-left');

this.leftPanel = SidePanel(this.leftSideDom, {
  mask: true,
  width: '80%',
  type: 'overlay',
  direction: 'left',
  listeners: {
    create: () => {
      console.log('create');
    },
  },
});

this.leftPanel.on('beforeShow', () => {
  console.log('beforeShow');
});

this.leftPanel.on('beforeClose', () => {
  console.log('beforeClose');
});

this.leftPanel.on('afterShow', () => {
  console.log('afterShow');
});

this.leftPanel.on('afterClose', () => {
  console.log('afterClose');
});

this.leftPanel.show();

```
