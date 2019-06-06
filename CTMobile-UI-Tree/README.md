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
      type: [normal | checkbox | radio] 节点的UI类型 normal 不普通，checkbox, radio
    },
    data: [{
      // 有config中的所有配置，会覆盖全局配置
      icon: {String} - 节点的icon 使用font-awesome
      iconColor: {String} - 节点icon的颜色
      attr: {Object} - 节点自定义属性
      label: {String} - 节点文本
      leaf: {Boolean} - [true | false] 是否是叶子节点
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