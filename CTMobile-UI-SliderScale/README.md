# CTMobile-UI-SliderScale
支持移动端的UI组件-SliderScale

配置:
el
{
  min: 0 最小值,
  max: 10 最大值,
  value: 0 当前值,
  step: 1 步进,一次滑动距离,
  interval: 2 每隔interval标识一个刻度,
}

布局:
<div class="ct-sliderscale" id="s1">
  <div class="scale"></div>
  <input type="range">
</div>