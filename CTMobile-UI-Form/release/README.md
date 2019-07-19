# Form

* [一般初始化](#form-initnormal)
* [初始化组](#form-initgroup)
* [渲染类型与对应的标签](#form-rendertypeandtag)
* [data-ctform-config配置项](#form-config)
* [表单验证](#form-validate)
  - [validatePropagation](#form-validatepropagation)
  - [validateStopPropagation](#form-validatestoppropagation)
* [获取表单数据](#form-getentrys)
* [例子](#form-demo)
* [方法](#form-methods)

## 一般初始化

html

```

  <form id="container">
    <textarea placeholder="详细信息" data-ctform-config-name="info" data-ctform-config-type="default" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labeltop" data-ctform-config-tooltip="详细信息的说明" data-ctform-config-require="require" data-ctform-config-requiremessage="请输入详细信息" data-ctform-config-maxlength="100" data-ctform-config-minlength="1"></textarea>
    <input type="text" placeholder="姓名" data-ctform-config-name="name" data-ctform-config-type="default" data-ctform-config-label="姓名" data-ctform-config-inset="inset" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligncenter" data-ctform-config-full="full" data-ctform-config-tooltip="姓名的说明信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
  ...
  </form>

```

js

```

  import Form from '@ctmobile/ui-form';
  import $ from 'jquery';
  const form = Form($('#container')[0],["autoheighttextarea","clearinput"]);

```

* 第一个参数表一个表单元素，第二个参数是渲染类型

## 初始化组

html js

```

  import Form from '@ctmobile/ui-form';
  import $ from 'jquery';
  const form = Form($('#container')[0],["radiogroup","checkboxgroup"]);

```

## 渲染类型与对应的标签

|  渲染类型 |  类型说明 |  对应的标签 |  备注 |
| --- | --- | --- | --- |
| autoheighttextarea |  自动高度的textarea | textarea |  |
| clearinput |  带有清除功能的input | input[type="text"] input[type="number"]:not(.ios) input[type="email"] input[type="url"] input[type="tel"] input[type="date"] input[type="week"] input[type="datetime"] input[type="datetime-local"] input[type="image"] input[type="month"] input[type="time"] input[type="search"] | input[type="number"]不能带有class="ios"样式 |
| pwdtoggle |  带有眼睛和清除功能的password | input[type="password"] |
| select |  表单的select | select |  |
| slider |  表单的slider | input[type="range"] |  |
| radio |  表单的radio | input[type="radio"] |  |
| checkbox |  表单的checkbox | input[type="checkbox"]:not(.switch) | input[type="checkbox"]不能带有class="switch"样式 |
| switch |  开关 | input[type="checkbox"].switch | input[type="checkbox"]必须带有class="switch"样式 |
| spinner |  数字微调器 | input[type="number"].ios | input[type="number"]必须带有class="ios"样式 同时还可是class="fill round" |
| radiogroup | radio组 |  .ct-form-radiogroup |
| checkboxgroup | checkbox组 |  .ct-form-checkboxgroup |

## data-ctform-config配置项

|  配置项 |  作用 |  备注 |
| --- | --- | --- |
| data-ctform-config-name |  控件的唯一标识 |  整个表单中是唯一标识这个元素 |
| data-ctform-config-type |  控件的风格 |  可选择的值[default | ios | material] |
| data-ctform-config-label |  控件的文本 |  |
| data-ctform-config-labelposition |  控件文本的位置 |  可选的值有[labelleft | labelright | labeltop | labelbottom] |
| data-ctform-config-labelalign |  控件文本的对其方式 |  可选的值[aligncenter | aligntop] 只有data-ctform-config-labelposition为left或right时候才生效 |
| data-ctform-config-full |  控件是否充满整行 |  取值为full |
| data-ctform-config-inset |  控件是否是inset模式 |  取值为inset |
| data-ctform-config-tooltip |  控件始终显示的提示信息 |  |
| data-ctform-config-groupname |  组中控件的name |  |
| data-ctform-config-require |  是否是必填项 |  取值为require |
| data-ctform-config-requiremessage |  必填项的提示信息 |  |
| data-ctform-config-maxlength |  最大输入长度 |  |
| data-ctform-config-minlength |  最小输入长度 |  |
| data-ctform-config-lengthmessage |  输入长度的提示信息 |  |
| data-ctform-config-pattern |  有效性的条件 |  内置的正则[]，值可是其中的值，如果想自定义可以写正则表达式(注，不带//) |
| data-ctform-config-patternmessage |  有效性的提示 |  |

## 表单验证

html validatePropagation(所有项都显示)

```

  import Form from '@ctmobile/ui-form';
  import $ from 'jquery';
  const form = Form($('#container')[0],["autoheighttextarea","clearinput"]);
  const flag = form.validatePropagation();

```

validateStopPropagation(只显示第一个不符合项)

```

  import Form from '@ctmobile/ui-form';
  import $ from 'jquery';
  const form = Form($('#container')[0],["autoheighttextarea","clearinput"]);
  const flag = form.validateStopPropagation();

```

## 获取表单数据

```

  import Form from '@ctmobile/ui-form';
  import $ from 'jquery';
  const form = Form($('#container')[0],["autoheighttextarea","clearinput"]);
  const entrys = form.getEntrys();
  console.log('entrys',entrys);

```

## 例子

#### html

```

<form id="containerdemo">
  <fieldset>
    <legend>autoheighttextarea</legend>
    <fieldset>
      <legend>default</legend>
      <textarea id="1" data-ctform-config-name="1" data-ctform-config-type="default" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labeltop" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-requiremessage="请输入用户名" data-ctform-config-maxlength="100" data-ctform-config-minlength="1"></textarea>
      <textarea data-ctform-config-name="2" data-ctform-config-type="default" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligntop" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1"></textarea>
      <textarea data-ctform-config-name="3" data-ctform-config-type="default" data-ctform-config-label="详细信息" data-ctform-config-inset="inset" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligncenter" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1"></textarea>
    </fieldset>
    <fieldset>
      <legend>ios</legend>
      <textarea data-ctform-config-name="4" data-ctform-config-type="ios" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labeltop" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1"></textarea>
      <textarea data-ctform-config-name="5" data-ctform-config-type="ios" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligntop" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1"></textarea>
    </fieldset>
    <fieldset>
      <legend>material</legend>
      <textarea data-ctform-config-name="6" data-ctform-config-type="material" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labeltop" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1"></textarea>
      <textarea data-ctform-config-name="7" data-ctform-config-type="material" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligntop" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1"></textarea>
    </fieldset>
  </fieldset>

  <fieldset>
    <legend>clearinput</legend>
    <fieldset>
      <legend>default</legend>
      <input type="text" id="8" data-ctform-config-name="8" data-ctform-config-type="default" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labeltop" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="2" data-ctform-config-minlength="1">
      <input type="text" data-ctform-config-name="9" data-ctform-config-type="default" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligntop" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
      <input type="text" data-ctform-config-name="10" data-ctform-config-type="default" data-ctform-config-label="详细信息" data-ctform-config-inset="inset" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligncenter" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
    </fieldset>
    <fieldset>
      <legend>ios</legend>
      <input type="text" data-ctform-config-name="11" data-ctform-config-type="ios" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labeltop" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
      <input type="text" data-ctform-config-name="12" data-ctform-config-type="ios" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligntop" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
    </fieldset>
    <fieldset>
      <legend>material</legend>
      <input type="text" data-ctform-config-name="13" data-ctform-config-type="material" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labeltop" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
      <input type="text" data-ctform-config-name="14" data-ctform-config-type="material" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligntop" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
      <input type="text" data-ctform-config-name="15" data-ctform-config-type="material" data-ctform-config-inset="inset" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligntop" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
    </fieldset>
  </fieldset>

  <fieldset>
    <legend>pwdtoggle</legend>
    <fieldset>
      <legend>default</legend>
      <input type="password" id="16" data-ctform-config-name="16" data-ctform-config-type="default" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labeltop" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
      <input type="password" data-ctform-config-name="17" data-ctform-config-type="default" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligntop" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
      <input type="password" data-ctform-config-name="18" data-ctform-config-type="default" data-ctform-config-label="详细信息" data-ctform-config-inset="inset" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligncenter" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
    </fieldset>
    <fieldset>
      <legend>ios</legend>
      <input type="password" data-ctform-config-name="19" data-ctform-config-type="ios" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labeltop" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
      <input type="password" data-ctform-config-name="20" data-ctform-config-type="ios" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligntop" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
    </fieldset>
    <fieldset>
      <legend>material</legend>
      <input type="password" data-ctform-config-name="21" data-ctform-config-type="material" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labeltop" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
      <input type="password" data-ctform-config-name="22" data-ctform-config-type="material" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligntop" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
      <input type="password" data-ctform-config-name="23" data-ctform-config-type="material" data-ctform-config-inset="inset" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligntop" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
    </fieldset>
  </fieldset>

  <fieldset>
    <legend>select</legend>
    <fieldset>
      <legend>default</legend>
      <select id="24" data-ctform-config-name="24" data-ctform-config-type="default" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labeltop" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
        <option>1</option>
        <option value="2">2</option>
      </select>
      <select data-ctform-config-name="25" data-ctform-config-type="default" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligntop" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
        <option>1</option>
      </select>
      <select data-ctform-config-name="26" data-ctform-config-type="default" data-ctform-config-label="详细信息" data-ctform-config-inset="inset" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligncenter" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
        <option>1</option>
      </select>
    </fieldset>
    <fieldset>
      <legend>ios</legend>
      <select data-ctform-config-name="27" data-ctform-config-type="ios" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labeltop" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
        <option>1</option>
      </select>
      <select data-ctform-config-name="28" data-ctform-config-type="ios" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligntop" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
        <option>1</option>
      </select>
    </fieldset>
    <fieldset>
      <legend>material</legend>
      <select data-ctform-config-name="29" data-ctform-config-type="material" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labeltop" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
        <option>1</option>
      </select>
      <select data-ctform-config-name="30" data-ctform-config-type="material" data-ctform-config-label="详细信息" data-ctform-config-labelposition="labelleft" data-ctform-config-labelalign="aligntop" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
        <option>1</option>
      </select>
    </fieldset>
  </fieldset>

  <fieldset>
    <legend>slider</legend>
    <fieldset>
      <legend>ios</legend>
      <input type="range" id="31" data-ctform-config-name="31" data-ctform-config-type="ios" data-ctform-config-label="音量" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
      <input type="range" data-ctform-config-name="32" disabled data-ctform-config-type="ios" data-ctform-config-label="音量" data-ctform-config-labelposition="labelbottom" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
      <input type="range" data-ctform-config-name="33" data-ctform-config-type="ios" data-ctform-config-label="音量" data-ctform-config-labelposition="labelleft" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
      <input type="range" data-ctform-config-name="34" data-ctform-config-type="ios" data-ctform-config-label="音量" data-ctform-config-labelposition="labelright" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
    </fieldset>
    <fieldset>
      <legend>material</legend>
      <input type="range" disabled data-ctform-config-name="35" data-ctform-config-type="material" data-ctform-config-label="音量" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
      <input type="range" data-ctform-config-name="36" data-ctform-config-type="material" data-ctform-config-label="音量" data-ctform-config-labelposition="labelbottom" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
      <input type="range" data-ctform-config-name="37" data-ctform-config-type="material" data-ctform-config-label="音量" data-ctform-config-labelposition="labelleft" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
      <input type="range" data-ctform-config-name="38" data-ctform-config-type="material" data-ctform-config-label="音量" data-ctform-config-labelposition="labelright" data-ctform-config-full="full" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require" data-ctform-config-maxlength="100" data-ctform-config-minlength="1">
    </fieldset>
  </fieldset>

  <fieldset>
    <legend>radio</legend>
    <fieldset>
      <legend>ios</legend>
      <input type="radio" checked disabled data-ctform-config-name="39" data-ctform-config-type="ios" data-ctform-config-label="男" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="radio" disabled data-ctform-config-name="40" data-ctform-config-type="ios" data-ctform-config-label="男" data-ctform-config-labelposition="labelbottom" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="radio" data-ctform-config-name="41" data-ctform-config-type="ios" data-ctform-config-label="男" data-ctform-config-labelposition="labelleft" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="radio" data-ctform-config-name="42" data-ctform-config-type="ios" data-ctform-config-label="男" data-ctform-config-labelposition="labelright" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
    </fieldset>
    <fieldset>
      <legend>material</legend>
      <input type="radio" data-ctform-config-name="43" data-ctform-config-type="material" data-ctform-config-label="女" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="radio" disabled data-ctform-config-name="44" data-ctform-config-type="material" data-ctform-config-label="女" data-ctform-config-labelposition="labelbottom" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="radio" data-ctform-config-name="45" data-ctform-config-type="material" data-ctform-config-label="女" data-ctform-config-labelposition="labelleft" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="radio" checked disabled data-ctform-config-name="46" data-ctform-config-type="material" data-ctform-config-label="女" data-ctform-config-labelposition="labelright" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
    </fieldset>
  </fieldset>

  <fieldset>
    <legend>checkbox</legend>
    <fieldset>
      <legend>ios</legend>
      <input type="checkbox" checked disabled data-ctform-config-name="47" data-ctform-config-type="ios" data-ctform-config-label="男" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="checkbox" disabled data-ctform-config-name="48" data-ctform-config-type="ios" data-ctform-config-label="男" data-ctform-config-labelposition="labelbottom" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="checkbox" data-ctform-config-name="49" data-ctform-config-type="ios" data-ctform-config-label="男" data-ctform-config-labelposition="labelleft" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="checkbox" data-ctform-config-name="50" data-ctform-config-type="ios" data-ctform-config-label="男" data-ctform-config-labelposition="labelright" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
    </fieldset>
    <fieldset>
      <legend>material</legend>
      <input type="checkbox" data-ctform-config-name="51" data-ctform-config-type="material" data-ctform-config-label="女" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="checkbox" disabled data-ctform-config-name="52" data-ctform-config-type="material" data-ctform-config-label="女" data-ctform-config-labelposition="labelbottom" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="checkbox" data-ctform-config-name="53" data-ctform-config-type="material" data-ctform-config-label="女" data-ctform-config-labelposition="labelleft" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="checkbox" checked disabled data-ctform-config-name="54" data-ctform-config-type="material" data-ctform-config-label="女" data-ctform-config-labelposition="labelright" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
    </fieldset>
  </fieldset>

  <fieldset>
    <legend>switch</legend>
    <fieldset>
      <legend>ios</legend>
      <input type="checkbox" class="switch" checked disabled data-ctform-config-name="55" data-ctform-config-type="ios" data-ctform-config-label="wifi下加载图片" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="checkbox" class="switch" disabled data-ctform-config-name="56" data-ctform-config-type="ios" data-ctform-config-label="wifi下加载图片" data-ctform-config-labelposition="labelbottom" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="checkbox" class="switch" data-ctform-config-name="57" data-ctform-config-type="ios" data-ctform-config-label="wifi下加载图片" data-ctform-config-labelposition="labelleft" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="checkbox" class="switch" data-ctform-config-name="58" data-ctform-config-type="ios" data-ctform-config-label="wifi下加载图片" data-ctform-config-labelposition="labelright" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
    </fieldset>
    <fieldset>
      <legend>material</legend>
      <input type="checkbox" class="switch" data-ctform-config-name="59" data-ctform-config-type="material" data-ctform-config-label="开启缓存" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="checkbox" class="switch" disabled data-ctform-config-name="60" data-ctform-config-type="material" data-ctform-config-label="开启缓存" data-ctform-config-labelposition="labelbottom" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="checkbox" class="switch" data-ctform-config-name="61" data-ctform-config-type="material" data-ctform-config-label="开启缓存" data-ctform-config-labelposition="labelleft" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="checkbox" class="switch" checked disabled data-ctform-config-name="62" data-ctform-config-type="material" data-ctform-config-label="开启缓存" data-ctform-config-labelposition="labelright" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
    </fieldset>
  </fieldset>

  <fieldset>
    <legend>spinner</legend>
    <fieldset>
      <legend>ios</legend>
      <input type="number" id="63" class="ios fill round" data-ctform-config-name="63" data-ctform-config-type="ios" data-ctform-config-label="wifi下加载图片" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="number" class="ios fill" data-ctform-config-name="64" data-ctform-config-type="ios" data-ctform-config-label="wifi下加载图片" data-ctform-config-labelposition="labelbottom" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="number" class="ios round" data-ctform-config-name="65" data-ctform-config-type="ios" data-ctform-config-label="wifi下加载图片" data-ctform-config-labelposition="labelleft" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
      <input type="number" class="ios" data-ctform-config-name="66" data-ctform-config-type="ios" data-ctform-config-label="wifi下加载图片" data-ctform-config-labelposition="labelright" data-ctform-config-tooltip="始终有的提示信息" data-ctform-config-require="require">
    </fieldset>
  </fieldset>

  <fieldset>
    <legend>group</legend>
    <fieldset>
      <legend>checkboxgroup</legend>

    </fieldset>
    <fieldset>
      <legend>radiogroup</legend>

    </fieldset>
  </fieldset>

</form>

```

#### js

```

import $ from 'jquery';
import Form from '@ctmobile/ui-form';

const validatePropagationDom = document.getElementById('validatePropagation');
const validateStopPropagationDom = document.getElementById('validateStopPropagation');
const submitDom = document.getElementById('submit');

validatePropagationDom.addEventListener('click', () => {
  const flag = form.validatePropagation();
  console.log(flag);
  return false;
});

validateStopPropagationDom.addEventListener('click', () => {
  const flag = form.validateStopPropagation();
  console.log(flag);
  return false;
});

submitDom.addEventListener('click', () => {
  const entry = form.getEntrys();
  alert(JSON.stringify(entry));
  return false;
});

const form = Form(document.getElementById('containerdemo'),[
  'autoheighttextarea',
  'clearinput',
  'pwdtoggle',
  'select',
  'slider',
  'radio',
  'checkbox',
  'switch',
  'spinner',
  'radiogroup',
  'checkboxgroup',
]);

```

## 方法

validatePropagation() - 验证表单(传递)

validateStopPropagation() - 验证表单(阻止向下传递)

showToolTip(name,tip) - 显示tooltip的提示信息

* name-String 元素的唯一标志(data-ctform-config-name的值)
* tip-string 提示信息

showErrorTip(name,tip) - 显示errortip的提示信息

* name-String 元素的唯一标志(data-ctform-config-name的值)
* tip-string 提示信息

showSuccessTip(name,tip) - 显示successtip的提示信息

* name-String 元素的唯一标志(data-ctform-config-name的值)
* tip-string 提示信息

showRangeTip(name,tip) - 显示rangetip的提示信息

* name-String 元素的唯一标志(data-ctform-config-name的值)
* tip-string 提示信息

hideToolTip(name) - 隐藏tooltip信息

* name-String 元素的唯一标志(data-ctform-config-name的值)

hideErrorMessageTip(name) - 隐藏errormessagetip信息

* name-String 元素的唯一标志(data-ctform-config-name的值)

hideErrorMessageAllTips() - 隐藏所有的errorMessage信息

hideRangeTip(name) - 隐藏rangetip信息

* name-String 元素的唯一标志(data-ctform-config-name的值)

hideAllTip(name) - 隐藏一项中的所有

* name-String 元素的唯一标志(data-ctform-config-name的值)

getEntrys() - 返回表单数据
