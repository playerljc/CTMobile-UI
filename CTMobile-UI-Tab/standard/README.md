# Tab

* [基本布局](#tab-layout)

* [初始化](#tab-initial)

* [例子](#tab-demo)
* [方法](#tab-methods)
* [事件](#tab-events)
  - [create](#tab-events-create)
  - [show](#tab-events-show)
  - [beforeHide](#tab-events-beforehide)

## 基本布局

```

<template id="tabtemplate">
  <div class="ct-tab">A
    <!-- 指示器 -->
    <div class="ct-tab-indicator swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <span class="ct-tab-indicator-item-label">...</span>
        </div>
        ...
      </div>

    </div>

    <!-- 卡片 -->
    <div class="ct-tab-content swiper-container">
      <div class="swiper-wrapper">
        <div class="ct-tab-content-item swiper-slide">...</div>
      </div>
    </div>
  </div>
</template>

```

## 初始化

```

 import Tab, { TabItem } from '@ctmobile/ui-tab';
 import '@ctmobile/ui-tab/tab.less';

 class MyTabItem extends TabItem {
   constructor(index) {
     super(index);
   }

   create() {
     console.log(this.index, 'create');
   }

   show() {
     console.log(this.index, 'show');
   }

   beforeHide() {
     console.log(this.index, 'beforeHide');
   }
 }

 const el = document.getElementById('tab');
 const tel = document.getElementById('tabtemplate');

 const myTab = new Tab(el, tel, {
   indicator: {
     position: 'left',
     type: 'average',
     theme: 'oval',
     slidesPerView: 3,
     arrow: false,
   },
   content: {
     mode: 'mulit',
     isSwiper: true,
     direction: 'horizontal',
     tabInstances: [MyTabItem],
   },
   initialSlide: 0,
 });

```

|  名称 |  说明 |
| --- | --- |
| {HtmlElement} - el |  父容器元素 |
| {HtmlElement} - tel |  模板元素 |
| {object} - config |
* 指示器配置 {object} - config position {String} - 指示器位置 [top | bottom | left | right]type {String} - 指示器的类型 [average(平均) | dynamic(动态)]slidesPerView {Number} - 指示器一个卡片数量 --只有type是dynamic时才生效theme {String} - 指示器的主题 --只有type是average时才生效 [radius(圆角) | oval(椭圆) | normal(正常)]
* 卡片配置 {object} - config mode {String} - 页卡的模式 [single | mulit]isSwiper {Boolean} - 是否可以滑动 --只有mode为mulit时才起作用 [true | false]tabInstances {Array} - tab对应的处理 必须是TabItem类的对象 [Object]direction {String} - tab页卡的方向 [horizontal | vertical] |
| {String} - initialSlide |  初始化的索引 |

## 例子

#### html

#### js

## 方法

slideTo( index, ) - 跳转到指定页面

* index-string 索引

appendSlide( indicatorObj, contentObj, impls, ) - 追加指定的slide

* indicatorObj-Object 指示器配置
* contentObj-Object 卡片配置
* impls-Function/Array 卡片实现类

prependSlide( indicatorObj, contentObj, impls, ) - 向前追加指定的slide

* indicatorObj-Object 指示器配置
* contentObj-Object 卡片配置
* impls-Function/Array 卡片实现类

addSlide( index, indicatorObj, contentObj, impls, ) - 在指定位置追加指定的slide

* index-number 索引
* indicatorObj-Object 指示器配置
* contentObj-Object 卡片配置
* impls-Function/Array 卡片实现类

removeSlide( slideIndex, ) - 在指定索引处删除Slide

* slideIndex-number 索引

getCount() - 获取卡片数量

## 事件

|  名称 |  说明 |
| --- | --- |
| create |  创建 |
| beforeShow |  显示 |
| beforeClose |  隐藏之前 |
