# Swipeout

* [基本布局](#swipeout-layout)
* [初始化](#swipeout-initial)
* [例子](#swipeout-demo)
* [方法](#swipeout-methods)
* [事件](#swipeout-events)
  - [init](#swipeout-events-init)

## 基本布局

```

<div class="ct-list ios media-list">
  <ul>
    <li>
      <div class="ct-swipeout swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide ct-swipeout-before">
            <div class="swipeoutBtn del">opt1</div>
            <div class="swipeoutBtn edit">opt2</div>
          </div>
          <a class="swiper-slide ct-swipeout-main item-link item-content">

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
  </ul>
</div>

```

* * - 列表根元素(一般是布局元素)
  - ... .ct-swipeout.swiper-container - 滑动行
    + .swiper-wrapper - 滑动行包装
      * .swiper-slide.ct-swipeout-before - 滑动行左侧滑动工具
      * .swiper-slide.ct-swipeout-main - 滑动行主体
      * .swiper-slide.ct-swipeout-after - 滑动行右侧滑动工具

## 初始化

```

import SwipeoutListFactory from '@ctmobile/ui-swipeout/swipeoutlist';
import '@ctmobile/ui-swipeout/swipeout.less';

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
```

|  名称 |  说明 |
| --- | --- |
| {HtmlElement} - el |  整体元素 |
| {object} - config |

配置

listeners {Object} - 事件

direction {String} - [horizontal | vertical] 滑动方向  |

## 例子

#### js

## normal

```

SwipeoutListFactory.create(listEl1,
  {
    listeners: {
      init: (swiper) => {
        console.log(swiper);
        listEl1.style.visibility = 'visible';
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
```

## slideBeforeAll,slideAfterAll,closeAll

```

const sliderSwiperoutList = SwipeoutListFactory.create(listEl2,
  {
    listeners: {
      init: (swiper) => {
        console.log(swiper);
        listEl2.style.visibility = 'visible';
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

document.getElementById('slideBeforeAllBtn').addEventListener('click', () => {
  sliderSwiperoutList.slideBeforeAll();
});

document.getElementById('slideAfterAll').addEventListener('click', () => {
  sliderSwiperoutList.slideAfterAll();
});

document.getElementById('closeAll').addEventListener('click', () => {
  sliderSwiperoutList.closeAll();
});
```

## deleteLine

```

const deleteLineSwiperoutList = SwipeoutListFactory.create(listEl3,
  {
    listeners: {
      init: (swiper) => {
        console.log(swiper);
        listEl3.style.visibility = 'visible';
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

const swiperoutBtns = listEl3.querySelectorAll('.swipeoutBtn');
Array.from(swiperoutBtns).map((el) => {
  el.addEventListener('click', () => {
    const firstRowEl = listEl3.querySelector('.firstRow');
    const swiper = deleteLineSwiperoutList.getSwiper(0);
    swiper.removeAnimation(firstRowEl);
  });
});
```

## dynamic

```

const dynamicSwiperoutList = SwipeoutListFactory.create(listEl4,
  {
    listeners: {
      init: (swiper) => {
        console.log(swiper);
        listEl4.style.visibility = 'visible';
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

document.getElementById('addBtn').addEventListener('click', () => {const insertEl = Dom6.createElement(`<pre>
<code class="html">
<li>
  <div class="ct-swipeout swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide ct-swipeout-before">
        <div class="swipeoutBtn del">opt1</div>
        <div class="swipeoutBtn edit">opt2</div>
      </div>
      <a class="swiper-slide ct-swipeout-main item-link item-content">

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
</code>
</pre>`);
  const ulEl = listEl4.children[0];
  ulEl.appendChild(insertEl);
  dynamicSwiperoutList.refresh();
});
```

## 方法

## .SwipeoutList

changeDirection( swiper, direction ) - changeDirection修改滑动方向

* swiper-SwiperoutSwiper
* direction-String方向

slideBefore(swiper) - 滑动到之前的操作组

* swiper-Swiperoutswiper

slideAfter(swiper) - 滑动到之后的操作组

* swiper-Swiperoutswiper

close(swiper) - 关闭所有slider

* swiper-Swiperoutswiper

slideBeforeAll - 所有行滑动到before操作

slideAfterAll - 所有行滑动到after操作

changeDirections - 所有slider改变滑动方向

closeAll - 关闭所有滑动

destorySwiper(swiper) - 销毁指定的Swiper

* swiper-SwiperoutSwiper

removeSwiper(swiper) - 删除swiper

* swiper-Swiperoutswiper

getSwiper(index) - 根据索引返回Swiper

* index-String索引

refresh - 刷新

destory - 销毁所有

## .Swipeout

changeDirection(direction) - changeDirection修改滑动方向

* direction-String方向

refresh - 刷新

slideBefore - 滑动到之前的操作组

slideAfter - 滑动到之后的操作组

close - 关闭所有slider

destory - 销毁指定的Swiper

remove - 删除swiper

removeAnimation(el) - 动画删除行

* el-HtmlElement删除元素

on( type, handler, ) - 注册事件

* type-string 事件类型
* handler-Function 事件句柄

off( type, handler, ) - 注销事件

* type-string 事件类型
* handler-Function 事件句柄

clearAll - 注销所有事件

## 事件

|  名称 |  说明 |
| --- | --- |
| init |  初始化完成 |
