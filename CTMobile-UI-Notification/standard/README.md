# Notification

* [基本布局](#notification-layout-style)

* [基本配置](#notification-config)

* 类型
  - [Standard](#notification-type-standard)
  - [自定义](#notification-type-custom)

* [例子](#notification-demo)
* [方法](#notification-methods)
* [事件](#notification-events)
  - [create](#notification-events-create)
  - [show](#notification-events-show)
  - [closeBefore](#notification-events-closebefore)
  - [closeAfter](#notification-events-closeafter)

## 基本布局

```

```

## 基本配置

```

import Notification from '@ctmobile/ui-notification';
import '@ctmobile/ui-notification/notification.less';
import '@ctmobile/ui-notification/themes/default/notification.less';

const n = Notification(
  el,{
    style: 'material',
    type: 'bottom',
    listeners: {
      create() {
        console.log('create');
      },
      show() {
        console.log('show');
      },
      closeBefore() {
        console.log('closeBefore');
      },
      closeAfter() {
        console.log('closeAfter');
      },
    },
});

```

|  配置名称 |  说明 |
| --- | --- |
| el | {HtmlElement} - Notification的渲染元素 |
| config |

| style | {string} - 风格 [material和ios] |
| type | {string} - 显示位置 [top | bottom] |
| listeners | {object} - 事件注册 [create | show | closeBefore | closeAfter] |  |

## 类型

Standard(一个标准的Notification)

```

import Notification from '@ctmobile/ui-notification';
import '@ctmobile/ui-notification/notification.less';
import '@ctmobile/ui-notification/themes/default/notification.less';

const n = Notification(
  el,{
    style: 'material',
    type: 'bottom',
    listeners: {
      create() {
        console.log('create');
      },
      show() {
        console.log('show');
      },
      closeBefore() {
        console.log('closeBefore');
      },
      closeAfter() {
        console.log('closeAfter');
      },
    },
});

// 显示一个标准的Notification
n.showStandard({
  headerLabel: 'NotificationTitle',
  headerIcon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
  title: 'Notification',
  text: 'CtMobile A mobile-side framework that supports multiple forms of page switching, page transitions, page values, notifications, etc., suitable for developing single-page applications (SPA), hybrid development (mixed), and Córdoba development',
  icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
  closed: true,
  datetime: '2019-02-12',
});

```

custom(自定义的Notification)

```

import Notification from '@ctmobile/ui-notification';
import '@ctmobile/ui-notification/notification.less';
import '@ctmobile/ui-notification/themes/default/notification.less';

const n = Notification(
  el,{
    style: 'material',
    type: 'bottom',
    listeners: {
      create() {
        console.log('create');
      },
      show() {
        console.log('show');
      },
      closeBefore() {
        console.log('closeBefore');
      },
      closeAfter() {
        console.log('closeAfter');
      },
    },
});

// 显示一个自定义的Notification
n.show({
  html:
        <pre>
        <code class="html">
        `
          <p>显示一个自定义的Notification</p>
        `
        </code>
        </pre>
  closed: true,
});

```

## 例子

#### html

```

<div class="swiper-container ctmobile-ui-demo-done-container" id="swiper-container">
  <div class="swiper-wrapper ctmobile-ui-demo-done-wrapper">

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style">
      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-me">material</a>
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-ios">ios</a>
      </div>
    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-me">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-me-top">top</a>
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-me-bottom">bottom</a>
      </div>
    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-me-top">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-me-top-closed">closed</a>
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-me-top-unclosed">unclosed</a>
      </div>
    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-me-top-closed">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-me-top-closed-custom">custom</a>
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-me-top-closed-standard">Standard</a>
      </div>
    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-me-top-closed-custom">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" id="style-me-top-closed-custom">me-top-closed-custom</a>
      </div>

    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-me-top-closed-standard">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" id="style-me-top-closed-standard">me-top-closed-standard</a>
      </div>

    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-me-top-unclosed">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-me-top-unclosed-custom">custom</a>
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-me-top-unclosed-standard">Standard</a>
      </div>
    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-me-top-unclosed-custom">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" id="style-me-top-unclosed-custom">me-top-unclosed-custom</a>
      </div>

    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-me-top-unclosed-standard">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" id="style-me-top-unclosed-standard">me-top-unclosed-standard</a>
      </div>

    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-me-bottom">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-me-bottom-closed">closed</a>
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-me-bottom-unclosed">unclosed</a>
      </div>
    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-me-bottom-closed">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-me-bottom-closed-custom">custom</a>
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-me-bottom-closed-standard">Standard</a>
      </div>
    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-me-bottom-closed-custom">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" id="style-me-bottom-closed-custom">me-bottom-closed-custom</a>
      </div>

    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-me-bottom-closed-standard">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" id="style-me-bottom-closed-standard">me-bottom-closed-standard</a>
      </div>

    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-me-bottom-unclosed">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-me-bottom-unclosed-custom">custom</a>
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-me-bottom-unclosed-standard">Standard</a>
      </div>
    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-me-bottom-unclosed-custom">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" id="style-me-bottom-unclosed-custom">me-bottom-unclosed-custom</a>
      </div>

    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-me-bottom-unclosed-standard">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" id="style-me-bottom-unclosed-standard">me-bottom-unclosed-standard</a>
      </div>

    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-ios">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-ios-top">top</a>
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-ios-bottom">bottom</a>
      </div>
    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-ios-top">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-ios-top-closed">closed</a>
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-ios-top-unclosed">unclosed</a>
      </div>
    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-ios-top-closed">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-ios-top-closed-custom">custom</a>
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-ios-top-closed-standard">Standard</a>
      </div>
    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-ios-top-closed-custom">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" id="style-ios-top-closed-custom">ios-top-closed-custom</a>
      </div>

    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-ios-top-closed-standard">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" id="style-ios-top-closed-standard">ios-top-closed-standard</a>
      </div>

    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-ios-top-unclosed">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-ios-top-unclosed-custom">custom</a>
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-ios-top-unclosed-standard">Standard</a>
      </div>
    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-ios-top-unclosed-custom">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" id="style-ios-top-unclosed-custom">ios-top-unclosed-custom</a>
      </div>

    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-ios-top-unclosed-standard">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" id="style-ios-top-unclosed-standard">ios-top-unclosed-standard</a>
      </div>

    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-ios-bottom">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-ios-bottom-closed">closed</a>
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-ios-bottom-unclosed">unclosed</a>
      </div>
    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-ios-bottom-closed">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-ios-bottom-closed-custom">custom</a>
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-ios-bottom-closed-standard">Standard</a>
      </div>
    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-ios-bottom-closed-custom">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" id="style-ios-bottom-closed-custom">ios-bottom-closed-custom</a>
      </div>

    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-ios-bottom-closed-standard">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" id="style-ios-bottom-closed-standard">ios-bottom-closed-standard</a>
      </div>

    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-ios-bottom-unclosed">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-ios-bottom-unclosed-custom">custom</a>
        <a class="ctmobile-ui-demo-done-button" data-donekey="style-ios-bottom-unclosed-standard">Standard</a>
      </div>
    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-ios-bottom-unclosed-custom">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" id="style-ios-bottom-unclosed-custom">ios-bottom-unclosed-custom</a>
      </div>

    </div>

    <div class="swiper-slide ctmobile-ui-demo-done-page" data-key="style-ios-bottom-unclosed-standard">

      <div class="ctmobile-ui-demo-done-page-content">
        <a class="ctmobile-ui-demo-done-button" id="style-ios-bottom-unclosed-standard">ios-bottom-unclosed-standard</a>
      </div>

    </div>

  </div>
</div>

```

#### index.js

```

import DemoUtil, { Bone } from '@ctmobile/ui-demo-util';
import {
  MeTopClosedCustomClass,
  MeTopClosedStandardClass,
  MeTopUnClosedCustomClass,
  MeTopUnClosedStandardClass,

  MeBottomClosedCustomClass,
  MeBottomClosedStandardClass,
  MeBottomUnClosedCustomClass,
  MeBottomUnClosedStandardClass,

  iOSTopClosedCustomClass,
  iOSTopClosedStandardClass,
  iOSTopUnClosedCustomClass,
  iOSTopUnClosedStandardClass,

  iOSBottomClosedCustomClass,
  iOSBottomClosedStandardClass,
  iOSBottomUnClosedCustomClass,
  iOSBottomUnClosedStandardClass,

} from './SliderClassFactory';

import 'normalize.less';
import './index.less';

DemoUtil.initial();

const demoBone = new Bone(document.getElementById('swiper-container'), [
  ['style'],
  ['style-me'],
  ['style-me-top'],
  ['style-me-top-closed'],
  ['style-me-top-closed-custom', MeTopClosedCustomClass],
  ['style-me-top-closed-standard', MeTopClosedStandardClass],
  ['style-me-top-unclosed'],
  ['style-me-top-unclosed-custom', MeTopUnClosedCustomClass],
  ['style-me-top-unclosed-standard', MeTopUnClosedStandardClass],

  ['style-me-bottom'],
  ['style-me-bottom-closed'],
  ['style-me-bottom-closed-custom', MeBottomClosedCustomClass],
  ['style-me-bottom-closed-standard', MeBottomClosedStandardClass],
  ['style-me-bottom-unclosed'],
  ['style-me-bottom-unclosed-custom', MeBottomUnClosedCustomClass],
  ['style-me-bottom-unclosed-standard', MeBottomUnClosedStandardClass],

  ['style-ios'],
  ['style-ios-top'],
  ['style-ios-top-closed'],
  ['style-ios-top-closed-custom', iOSTopClosedCustomClass],
  ['style-ios-top-closed-standard', iOSTopClosedStandardClass],
  ['style-ios-top-unclosed'],
  ['style-ios-top-unclosed-custom', iOSTopUnClosedCustomClass],
  ['style-ios-top-unclosed-standard', iOSTopUnClosedStandardClass],

  ['style-ios-bottom'],
  ['style-ios-bottom-closed'],
  ['style-ios-bottom-closed-custom', iOSBottomClosedCustomClass],
  ['style-ios-bottom-closed-standard', iOSBottomClosedStandardClass],
  ['style-ios-bottom-unclosed'],
  ['style-ios-bottom-unclosed-custom', iOSBottomUnClosedCustomClass],
  ['style-ios-bottom-unclosed-standard', iOSBottomUnClosedStandardClass],
]);

```

#### SliderClassFactory.js

```

import Notification from '@ctmobile/ui-notification';

const StandardNConfig = {
  headerLabel: 'NotificationTitle',
  headerIcon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
  title: 'Notification',
  text: 'CtMobile A mobile-side framework that supports multiple forms of page switching, page transitions, page values, notifications, etc., suitable for developing single-page applications (SPA), hybrid development (mixed), and Córdoba development',
  icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
  closed: true,
  datetime: '2019-02-12',
};

const listenersConfig = {
  create() {
    console.log('create');
  },
  show() {
    console.log('show');
  },
  closeBefore() {
    console.log('closeBefore');
  },
  closeAfter() {
    console.log('closeAfter');
  },
};

class Base {
  constructor({ context, key, el }) {
    this.context = context;
    this.key = key;
    this.el = el;
  }
}

class MeTopClosedCustomClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('MeTopClosedCustomClass:onInit');

    this.n = Notification(
      document.getElementById('style-me-top-closed-custom-wrap'),
      {
        style: 'material',
        type: 'top',
        listeners: listenersConfig,
      });

    document.getElementById('style-me-top-closed-custom').addEventListener('click', () => {
      this.n.show({
        html: 'style-me-top-closed-custom',
        closed: true,
      });
    });
  }

  onShow() {
    console.log('MeTopClosedCustomClass:onShow');
  }
}

class MeTopClosedStandardClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('MeTopClosedStandardClass:onInit');

    this.n = Notification(
      document.getElementById('style-me-top-closed-standard-wrap'),
      {
        style: 'material',
        type: 'top',
        listeners: listenersConfig,
      });

    document.getElementById('style-me-top-closed-standard').addEventListener('click', () => {
      this.n.showStandard(StandardNConfig);
    });
  }

  onShow() {
    console.log('MeTopClosedStandardClass:onShow');
  }
}

class MeTopUnClosedCustomClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('MeTopUnClosedCustomClass:onInit');

    this.n = Notification(
      document.getElementById('style-me-top-unclosed-custom-wrap'),
      {
        style: 'material',
        type: 'top',
        listeners: listenersConfig,
      });

    document.getElementById('style-me-top-unclosed-custom').addEventListener('click', () => {
      const id = this.n.show({
        html: 'style-me-top-unclosed-custom',
        closed: false,
      });
      setTimeout(() => {
        this.n.close(id);
      }, 2000);
    });
  }

  onShow() {
    console.log('MeTopUnClosedCustomClass:onShow');
  }
}

class MeTopUnClosedStandardClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('MeTopUnClosedStandardClass:onInit');
    this.n = Notification(
      document.getElementById('style-me-top-unclosed-standard-wrap'),
      {
        style: 'material',
        type: 'top',
        listeners: listenersConfig,
      });

    document.getElementById('style-me-top-unclosed-standard').addEventListener('click', () => {
      const id = this.n.showStandard(Object.assign({}, StandardNConfig, { closed: false }));
      setTimeout(() => {
        this.n.close(id);
      }, 2000);
    });
  }

  onShow() {
    console.log('MeTopUnClosedStandardClass:onShow');
  }
}

class MeBottomClosedCustomClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('MeBottomClosedCustomClass:onInit');
    this.n = Notification(
      document.getElementById('style-me-bottom-closed-custom-wrap'),
      {
        style: 'material',
        type: 'bottom',
        listeners: listenersConfig,
      });

    document.getElementById('style-me-bottom-closed-custom').addEventListener('click', () => {
      this.n.show({
        html: 'style-me-bottom-closed-custom',
        closed: true,
      });
    });
  }

  onShow() {
    console.log('MeBottomClosedCustomClass:onShow');
  }
}

class MeBottomClosedStandardClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('MeBottomClosedStandardClass:onInit');

    this.n = Notification(
      document.getElementById('style-me-bottom-closed-standard-wrap'),
      {
        style: 'material',
        type: 'bottom',
        listeners: listenersConfig,
      });

    document.getElementById('style-me-bottom-closed-standard').addEventListener('click', () => {
      this.n.showStandard(StandardNConfig);
    });
  }

  onShow() {
    console.log('MeBottomClosedStandardClass:onShow');
  }
}

class MeBottomUnClosedCustomClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('MeBottomUnClosedCustomClass:onInit');
    this.n = Notification(
      document.getElementById('style-me-bottom-unclosed-custom-wrap'),
      {
        style: 'material',
        type: 'bottom',
        listeners: listenersConfig,
      });

    document.getElementById('style-me-bottom-unclosed-custom').addEventListener('click', () => {
      const id = this.n.show({
        html: 'style-me-bottom-unclosed-custom',
        closed: false,
      });
      setTimeout(() => {
        this.n.close(id);
      }, 2000);
    });
  }

  onShow() {
    console.log('MeBottomUnClosedCustomClass:onShow');
  }
}

class MeBottomUnClosedStandardClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('MeBottomUnClosedStandardClass:onInit');

    this.n = Notification(
      document.getElementById('style-me-bottom-unclosed-standard-wrap'),
      {
        style: 'material',
        type: 'bottom',
        listeners: listenersConfig,
      });

    document.getElementById('style-me-bottom-unclosed-standard').addEventListener('click', () => {
      const id = this.n.showStandard(Object.assign({}, StandardNConfig, { closed: false }));
      setTimeout(() => {
        this.n.close(id);
      }, 2000);
    });
  }

  onShow() {
    console.log('MeBottomUnClosedStandardClass:onShow');
  }
}

class iOSTopClosedCustomClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('iOSTopClosedCustomClass:onInit');

    this.n = Notification(
      document.getElementById('style-ios-top-closed-custom-wrap'),
      {
        style: 'ios',
        type: 'top',
        listeners: listenersConfig,
      });

    document.getElementById('style-ios-top-closed-custom').addEventListener('click', () => {
      this.n.show({
        html: 'style-ios-top-closed-custom',
        closed: true,
      });
    });
  }

  onShow() {
    console.log('iOSTopClosedCustomClass:onShow');
  }
}

class iOSTopClosedStandardClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('iOSTopClosedStandardClass:onInit');

    this.n = Notification(
      document.getElementById('style-ios-top-closed-standard-wrap'),
      {
        style: 'ios',
        type: 'top',
        listeners: listenersConfig,
      });

    document.getElementById('style-ios-top-closed-standard').addEventListener('click', () => {
      this.n.showStandard(StandardNConfig);
    });
  }

  onShow() {
    console.log('iOSTopClosedStandardClass:onShow');
  }
}

class iOSTopUnClosedCustomClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('iOSTopUnClosedCustomClass:onInit');

    this.n = Notification(
      document.getElementById('style-ios-top-unclosed-custom-wrap'),
      {
        style: 'ios',
        type: 'top',
        listeners: listenersConfig,
      });

    document.getElementById('style-ios-top-unclosed-custom').addEventListener('click', () => {
      const id = this.n.show({
        html: 'style-ios-top-unclosed-custom',
        closed: false,
      });
      setTimeout(() => {
        this.n.close(id);
      }, 2000);
    });
  }

  onShow() {
    console.log('iOSTopUnClosedCustomClass:onShow');
  }
}

class iOSTopUnClosedStandardClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('iOSTopUnClosedStandardClass:onInit');

    this.n = Notification(
      document.getElementById('style-ios-top-unclosed-standard-wrap'),
      {
        style: 'ios',
        type: 'top',
        listeners: listenersConfig,
      });

    document.getElementById('style-ios-top-unclosed-standard').addEventListener('click', () => {
      const id = this.n.showStandard(Object.assign({}, StandardNConfig, { closed: false }));
      setTimeout(() => {
        this.n.close(id);
      }, 2000);
    });
  }

  onShow() {
    console.log('iOSTopUnClosedStandardClass:onShow');
  }
}

class iOSBottomClosedCustomClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('iOSBottomClosedCustomClass:onInit');

    this.n = Notification(
      document.getElementById('style-ios-bottom-closed-custom-wrap'),
      {
        style: 'ios',
        type: 'bottom',
        listeners: listenersConfig,
      });

    document.getElementById('style-ios-bottom-closed-custom').addEventListener('click', () => {
      this.n.show({
        html: 'style-ios-bottom-closed-custom',
        closed: true,
      });
    });
  }

  onShow() {
    console.log('iOSBottomClosedCustomClass:onShow');
  }
}

class iOSBottomClosedStandardClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('iOSBottomClosedStandardClass:onInit');

    this.n = Notification(
      document.getElementById('style-ios-bottom-closed-standard-wrap'),
      {
        style: 'ios',
        type: 'bottom',
        listeners: listenersConfig,
      });

    document.getElementById('style-ios-bottom-closed-standard').addEventListener('click', () => {
      this.n.showStandard(StandardNConfig);
    });
  }

  onShow() {
    console.log('iOSBottomClosedStandardClass:onShow');
  }
}

class iOSBottomUnClosedCustomClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('iOSBottomUnClosedCustomClass:onInit');

    this.n = Notification(
      document.getElementById('style-ios-bottom-unclosed-custom-wrap'),
      {
        style: 'ios',
        type: 'bottom',
        listeners: listenersConfig,
      });

    document.getElementById('style-ios-bottom-unclosed-custom').addEventListener('click', () => {
      const id = this.n.show({
        html: 'style-ios-bottom-unclosed-custom',
        closed: false,
      });
      setTimeout(() => {
        this.n.close(id);
      }, 2000);
    });
  }

  onShow() {
    console.log('iOSBottomUnClosedCustomClass:onShow');
  }
}

class iOSBottomUnClosedStandardClass extends Base {
  constructor(config) {
    super(config);
  }

  onInit() {
    console.log('iOSBottomUnClosedStandardClass:onInit');

    this.n = Notification(
      document.getElementById('style-ios-bottom-unclosed-standard-wrap'),
      {
        style: 'ios',
        type: 'bottom',
        listeners: listenersConfig,
      });

    document.getElementById('style-ios-bottom-unclosed-standard').addEventListener('click', () => {
      const id = this.n.showStandard(Object.assign({}, StandardNConfig, { closed: false }));
      setTimeout(() => {
        this.n.close(id);
      }, 2000);
    });
  }

  onShow() {
    console.log('iOSBottomUnClosedStandardClass:onShow');
  }
}

export {
  MeTopClosedCustomClass,
  MeTopClosedStandardClass,
  MeTopUnClosedCustomClass,
  MeTopUnClosedStandardClass,

  MeBottomClosedCustomClass,
  MeBottomClosedStandardClass,
  MeBottomUnClosedCustomClass,
  MeBottomUnClosedStandardClass,

  iOSTopClosedCustomClass,
  iOSTopClosedStandardClass,
  iOSTopUnClosedCustomClass,
  iOSTopUnClosedStandardClass,

  iOSBottomClosedCustomClass,
  iOSBottomClosedStandardClass,
  iOSBottomUnClosedCustomClass,
  iOSBottomUnClosedStandardClass,
};

```

## 方法

show({html,closed}) - 显示一个自定的Notification

* html-string 自定的html内容
* closed-boolean 是否带有关闭按钮

showStandard({ headerLabel, headerIcon, title, text, icon, closed, datetime}) - 显示一个标准的Notification

* headerLabel-string 头的label
* headerIcon-string 头的icon地址
* title-string 标题
* text-string 描述
* icon-string notification的icon地址
* icon-boolean 是否带有关闭按钮
* datetime-string 通知的时间

on( type, handler) - 注册事件

* type-string 事件的类型
* handler-Function 事件句柄

off( type, handler) - 删除指定type下的事件或清除所有

* type-string 事件的类型
* handler-Function 事件句柄

## 事件

|  名称 |  说明 |
| --- | --- |
| create |  通知放入到dom时触发 |
| show |  通知显示触发 |
| closebefore |  通知关闭之前触发 |
| closeafter |  通知关闭且从dom中删除之后触发 |

```

import Notification from '@ctmobile/ui-notification';
import '@ctmobile/ui-notification/notification.less';
import '@ctmobile/ui-notification/themes/default/notification.less';

const n = Notification(
  el,{
    style: 'material',
    type: 'bottom',
    listeners: {
      create() {
        console.log('create');
      },
      show() {
        console.log('show');
      },
      closeBefore() {
        console.log('closeBefore');
      },
      closeAfter() {
        console.log('closeAfter');
      },
    },
});

```
