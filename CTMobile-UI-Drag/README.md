# CTMobile-UI-Drag
支持移动端的UI组件-Drag










配置:
el
{
   能不能在自己里面drag
   
   
   
   
   
   
   // 可以放置
   onPutSuccess: Function sourceEl,targetEls,rect,
   // 移动节点可以自定义, 如果在此返回指定的节点，那么 dragSourceExtendClasses 属性不生效
   // 此节点为游离的dom节点，没有添加任何节点中
   // 节点太小了鼠标没在元素区域内
   onDragClone: Function sourceEl
   // source节点进入(只有drag)
   onSourceEnter: Function
   // source节点离开(只有drag) 
   onSourceLeave: Function
   onBoundaryDetection: Function 边缘检查 top | bottom | left | right 只要有一个触发则会被调用
   // 拖动对象的附加样式，拖动移动起来后触发
   dragSourceExtendClasses: Array,
   // 可放置对象的附加样式，当拖动到可以放置的区域时触发
   dragTargetExtendClasses: Array,
   // 拖动后原始节点是否显示
   isDragSourceDisplay: boolean,
   // 拖动之后原始节点是否存在
   isDragSourceExist: boolean,
   // 不可放置的时候松开是否有动画返回效果
   noDragReturnAnimate: boolean,
   inclusionRelation: boolean 加入如果source和target为包含关系，则不能放入
   isFree: boolean 是否是自由模式，自由模式只能拖动, 移动 (未实现)
   infinite : boolean 是否无限扩展(不能拖出target)
}

布局:
  <div class="ct-drag-source"></div>
  <div class="ct-drag-target"></div>

功能:
 .从哪拖到哪,怎么放置(谁能拖，谁能放，怎么放)
 
 .画布都有哪些扩展，移动到target的时候是有限制的，不能拖出无限滚动，
                  放的时候是自由放置
                  拖动到target里的元素可以自由移动
 
测试:

log:
 .在el范围内拖动，而不是全局拖动
 .加入如果source和target为包含关系，则不能放入
 
 .无限拖动，画布跟着滚动 (在父容器里拖动的时候，拖动到目标容器(ct-drag-target)的时候)
 .只想移动，根本不想放入(在el范围内自由的移动)
 .Axure是鼠标不能出target的范围，不管是从左拽进来，还是在target自由移动，都是这样的
  现在可以实现，但是不是自动的需要鼠标移动才能更新滚动条的位置
 
demo:
 