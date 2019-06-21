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
}

布局:

功能:
 .从哪拖到哪,怎么放置(谁能拖，谁能放，怎么放)
 
测试:
 
demo:
 