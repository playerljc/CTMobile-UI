# CTMobile-UI-Tab
支持移动端的UI组件-Tab










配置:
el
{
  // 指示器
  indicator:{
    position: [top | bottom | left | right] (指示器的位置)
    type: [average(平均) | dynamic(动态)] (指示器的类型)
    slidesPerView: 3 (指示器一个也是的卡片数量 --只有type是dynamic时才生效)
    theme: [radius(圆角) | oval(椭圆) | normal(正常)] (指示器的主题 --只有type是average时才生效),
    arrow: [true | false] (是否有arrow下拉面板)
  },
  // 页卡
  content: {
    mode:[single | mulit] (页卡的模式)
    isSwiper: [true | false] (是否可以滑动,只有mode为mulit时才起作用),
    classes: [Function] (tab对应的class定义),
    direction: [horizontal | vertical] (tab页卡的方向)
  },
  initialSlide: number 初始化的索引
}

布局:

<template id="demo-api-popup2">
  <div class="ct-tab">
    <!-- 指示器 -->
    <div class="ct-tab-indicator swiper-container">
      <div class="swiper-wrapper">
        <div class="ct-tab-indicator-item swiper-slide active">
          <span class="ct-tab-indicator-item-label">111</span>
          <span class="ct-tab-indicator-item-label">222</span>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <!-- 卡片 -->
    <div class="ct-tab-content swiper-container">
      <div class="swiper-wrapper">
        <div class="ct-tab-content-item swiper-slide">111</div>
        <div class="ct-tab-content-item swiper-slide">111</div>
        <div class="swiper-wrapper">
        </div>
      </div>
    </div>
  </div>
</template>


// 选项卡
1.卡片的位置
  .top
  .bottom
2.卡片的分配
  .平均分配
   .基本的
   .iOS的
  .计算分配
3.container的存在模式
  .单例
  .多例
    .可以滑动
    .不可以滑动