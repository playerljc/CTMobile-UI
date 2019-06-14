# CTMobile-UI-Tree
支持移动端的UI组件-Tree










配置:
el
{
  listeners: { - 事件的初始化
    click: Function(n) -- 节点的点击(不是点击展开和关闭按钮)
    expand: Function(n, expand) -- 节点的张开和关闭
    checked: Function(n, checked) -- 节点的check的正选或反选，带级联的触发
    loadRemote: Function(n, success,error,complete) -- loadType是remote时加载远程数据，调用callback传回数据
  } 
  nodeConfig: {
    config: { - 节点统一的配置
      loadType: [local | remote] 节点的数据类型 local本地数据，remote远程数据
      expand: boolean [true | false] true 展开, false 关闭 默认展开, 如果loadType为remote 则此值为false
    },
    data: [{
      label: {String} - 节点文本
      // 有config中的所有配置，会覆盖全局配置
      icon: {String} - 节点的icon 使用font-awesome
      iconColor: {String} - 节点icon的颜色
      attr: {Object} - 节点自定义属性
      leaf: {Boolean} - [true | false] 是否是叶子节点
      loadType: [local | remote] 节点的数据类型 local本地数据，remote远程数据
      expand: {Boolean} [true | false] true 展开, false 关闭 默认展开, 如果loadType为remote 则此值为false
      type: {String} [normal | checkbox | radio] 节点的input类型
      checked: {Boolean} - [true | false] 如果type是checkbox 是否选中
      children: {Array} - 子节点
    }]
  }
}

布局:

<div class="ct-tree">
  <div class="ct-tree-node">
    <div class="ct-tree-item"></div>
    <div class="ct-tree-children"></div>
  </div>
</div>

功能:
 .正常的展示
 .节点的icon
 .异步加载
 .节点的checkbox
 .点击整体的展开或闭合
 .选择和反选的背景色
 .拖拽换位置
 
测试:
 .设置label
 .设置icon
 .设置iconColor
 .展开和关闭
 .append
 .appendByConfig
 .prepend
 .prependByConfig
 .insertBefore
 .insertBeforeByConfig
 .insertAfter
 .insertAfterByConfig
 .replaceNode
 .replaceNodeByConfig
 .removeChildren
 .tree的CRUD 
 
logs
 1.loadType === 'remote' 的节流 
 
icons
 .fa fa-check-square checkbox选中
 .fa fa-minus-square checkbox减号
 .fa fa-square-o checkbox默认
 .fa fa-circle  radio选中
 .fa fa-circle-o radio未选中
 
checkbox
 if(type === 'checkbox') {
    都渲染成未选中状态
    
    // 选中
    if(isLeaf() && checked) {
       渲染成选中
       if(父节点的所有checkbox节点都选中) {
         父节点渲染成选中状态 - 一直向上追溯
       }
    }
 }
   
 
 叶子节点才renderInput,如果节点是check
 向上追溯,判断类型是checkbox类型 
 
demo
  .normal(普通)
  .icon
  .iconColor
  .remoteLoad
  .checkbox
  
  .event
   .append
   .prepend
   .insert
   .remove
   
   .expand
   .click
 