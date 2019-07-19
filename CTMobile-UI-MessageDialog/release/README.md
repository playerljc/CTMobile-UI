# MessageDialog

* 对话框类型
  - toast
    + showTop
    + showCenter
    + showBottom
  - [alert](#messagedialog-type-alert)
  - [confirm](#messagedialog-type-confirm)
  - prompt
    + [input](#messagedialog-type-prompt)
    + [textarea](#messagedialog-type-promptmulit)
  - [custom](#messagedialog-type-custom)
  - [infinite](#messagedialog-type-infinite)
  - [determined](#messagedialog-type-determined)
  - loading
    + [nonetwork](#messagedialog-type-loading-nonetwork)
    + [fail](#messagedialog-type-loading-fail)
    + [loading](#messagedialog-type-loading-loading)
    + [empty](#messagedialog-type-loading-empty)
    + [submit](#messagedialog-type-loading-submit)
* [例子](#messagedialog-demo)
* [方法](#messagedialog-methods)

## toast-showTop

#### js

```

import MessageDialog from '@ctmobile/ui-messagedialog';
import '@ctmobile/ui-messagedialog/themes/default/messagedialog.less';
import '@ctmobile/ui-messagedialog/messagedialog.less';

MessageDialog.makeText({
  parent: document.body,
  text: 'this is a top toast',
  position: 'top',
  duration: 'short',
});

```

## toast-showCenter

#### js

```

import MessageDialog from '@ctmobile/ui-messagedialog';
import '@ctmobile/ui-messagedialog/themes/default/messagedialog.less';
import '@ctmobile/ui-messagedialog/messagedialog.less';

MessageDialog.makeText({
  parent: document.body,
  text: 'this is a center toast',
  position: 'center',
  duration: 'short',
});

```

## toast-showBottom

#### js

```

import MessageDialog from '@ctmobile/ui-messagedialog';
import '@ctmobile/ui-messagedialog/themes/default/messagedialog.less';
import '@ctmobile/ui-messagedialog/messagedialog.less';

MessageDialog.makeText({
  parent: document.body,
  text: 'this is a bottom toast',
  position: 'bottom',
  duration: 'short',
});

```

## alert

#### js

```

import MessageDialog from '@ctmobile/ui-messagedialog';
import '@ctmobile/ui-messagedialog/themes/default/messagedialog.less';
import '@ctmobile/ui-messagedialog/messagedialog.less';

const alert = MessageDialog.alert({
  parent: document.body,
  title: '提示',
  text: '这是一个弹出框',
  icon: 'icon-exclamation-sign',
  callback() {
    console.log('callback');
  },
});

```

## confirm

#### js

```

import MessageDialog from '@ctmobile/ui-messagedialog';
import '@ctmobile/ui-messagedialog/themes/default/messagedialog.less';
import '@ctmobile/ui-messagedialog/messagedialog.less';

MessageDialog.confirm({
  parent: document.body,
  title: '提示',
  text: '您真的要删除此条记录吗？',
  icon: 'icon-exclamation-sign',
  callback(flag) {
    console.log(`flag:${flag}`);
    if (flag === 0) {
      MessageDialog.alert({
        parent: document.body,
        title: '提示',
        text: '删除成功',
        icon: 'icon-exclamation-sign',
        callback() {
          console.log('callback');
        },
      });
    }
  },
});

```

## prompt

#### js

```

import MessageDialog from '@ctmobile/ui-messagedialog';
import '@ctmobile/ui-messagedialog/themes/default/messagedialog.less';
import '@ctmobile/ui-messagedialog/messagedialog.less';

MessageDialog.prompt({
  parent: document.body,
  title: '提示',
  text: '请输入您的有效地址',
  icon: 'icon-exclamation-sign',
  defaultVal: '辽宁省沈阳市',
  placeholder: '请输入您的有效地址',
  callback(flag, val) {
    console.log(`flag:${flag}`);
    if (flag === 0) {
      MessageDialog.alert({
        parent: document.body,
        title: '提示',
        text: val,
        icon: 'icon-exclamation-sign',
        callback() {
          console.log('callback');
        },
      });
    }
  },
});

```

## promptmulit

#### js

```

import MessageDialog from '@ctmobile/ui-messagedialog';
import '@ctmobile/ui-messagedialog/themes/default/messagedialog.less';
import '@ctmobile/ui-messagedialog/messagedialog.less';

MessageDialog.promptmulit({
  parent: document.body,
  title: '提示',
  text: '请输入您的有效地址',
  icon: 'icon-exclamation-sign',
  defaultVal: '辽宁省沈阳市',
  placeholder: '请输入您的有效地址',
  callback(flag, val) {
    console.log(`flag:${flag}`);
    if (flag === 0) {
      MessageDialog.alert({
        parent: document.body,
        title: '提示',
        text: val,
        icon: 'icon-exclamation-sign',
        callback() {
          console.log('callback');
        },
      });
    }
  },
});

```

## custom

#### js

```

import MessageDialog from '@ctmobile/ui-messagedialog';
import '@ctmobile/ui-messagedialog/themes/default/messagedialog.less';
import '@ctmobile/ui-messagedialog/messagedialog.less';

const dialog = MessageDialog.customDialog({
  parent: document.body,
  title: '自定义',
  html: <pre>
        <code class="html">
        `<form class="form">
           <label for="name">用户名</label>
           <input type="text">
        </form>`
        </code>
        </pre>,
  buttons: [{
    text: '确定',
    handler() {
      dialog.close();
      MessageDialog.alert({
        parent: document.body,
        title: '提示',
        text: '点击了确定',
        icon: 'icon-exclamation-sign',
        callback() {
          alert(dialog.el.querySelector('.form > input').value);
        },
      });
    },
  }, {
    text: '关闭',
    handler() {
      dialog.close();
    },
  }],
  rendercallback() {
    console.log('renderSuccess');
  },
});

```

## infinite

#### js

```

import MessageDialog from '@ctmobile/ui-messagedialog';
import '@ctmobile/ui-messagedialog/themes/default/messagedialog.less';
import '@ctmobile/ui-messagedialog/messagedialog.less';

$parent.find('.infinite')[0].addEventListener('click', () => {
  const dialog = MessageDialog.infiniteProgressDialog({
    parent: $container[0],
    title: 'infinite ProgressDialog',
    text: 'Loading...',
    buttons: [{
      text: '确定',
      handler() {
        dialog.close();
        MessageDialog.alert({
          parent: $container[0],
          title: '提示',
          text: '点击了确定',
          icon: 'icon-exclamation-sign',
          callback() {
            alert(dialog.el.querySelector('.form > input').value);
          },
        });
      },
    }, {
      text: '关闭',
      handler() {
        dialog.close();
      },
    }],
    rendercallback() {
      console.log('renderSuccess');
    },
  });
});

```

## determined

#### js

```

import MessageDialog from '@ctmobile/ui-messagedialog';
import '@ctmobile/ui-messagedialog/themes/default/messagedialog.less';
import '@ctmobile/ui-messagedialog/messagedialog.less';

$parent.find('.determined')[0].addEventListener('click', () => {
  let value = 0;
  let handler;
  const dialog = MessageDialog.determinedProgressDialog({
    parent: $container[0],
    title: 'determined ProgressDialog',
    text: 'Loading...',
    buttons: [{
      text: '确定',
      handler() {
        dialog.close();
        MessageDialog.alert({
          parent: $container[0],
          title: '提示',
          text: '点击了确定',
          icon: 'icon-exclamation-sign',
          callback() {
            alert(dialog.el.querySelector('.form > input').value);
          },
        });
      },
    }, {
      text: '关闭',
      handler() {
        dialog.close();
      },
    }],
    rendercallback() {
      console.log('renderSuccess');
      handler = setInterval(() => {
        dialog.setValue(++value);
      }, 500);
    },
    completecallback() {
      dialog.close();
      clearInterval(handler);
    },
    changecallback() {

    },
  });
});

```

## nonetwork

#### js

```

import MessageDialog from '@ctmobile/ui-messagedialog';
import '@ctmobile/ui-messagedialog/themes/default/messagedialog.less';
import '@ctmobile/ui-messagedialog/messagedialog.less';

const loadingDialog = MessageDialog.makeLoading({
  parent: document.body,
  refreshCallback() {
    alert('点击了刷新');
    loadingDialog.hide();
  },
  boundingCallback() {
    return {
      top: '0',
      bottom: '0',
    };
  },
  isShowHeader() {
    return true;
  },
});

loadingDialog.setNoNetWorkTip('请检查网络！');
loadingDialog.showNoNetWork();

```

## fail

#### js

```

import MessageDialog from '@ctmobile/ui-messagedialog';
import '@ctmobile/ui-messagedialog/themes/default/messagedialog.less';
import '@ctmobile/ui-messagedialog/messagedialog.less';

const loadingDialog = MessageDialog.makeLoading({
  parent: document.body,
  refreshCallback() {
    alert('点击了刷新');
    loadingDialog.hide();
  },
  boundingCallback() {
    return {
      top: '0',
      bottom: '0',
    };
  },
  isShowHeader() {
    return true;
  },
});

loadingDialog.setFailTip('程序发成异常请重试！');
loadingDialog.showFail();

```

## loading

#### js

```

import MessageDialog from '@ctmobile/ui-messagedialog';
import '@ctmobile/ui-messagedialog/themes/default/messagedialog.less';
import '@ctmobile/ui-messagedialog/messagedialog.less';

const loadingDialog = MessageDialog.makeLoading({
  parent: document.body,
  refreshCallback() {
    alert('点击了刷新');
    loadingDialog.hide();
  },
  boundingCallback() {
    return {
      top: '0',
      bottom: '0',
    };
  },
  isShowHeader() {
    return true;
  },
});

loadingDialog.showLoading();
setTimeout(() => {
  loadingDialog.hide();
}, 5000);

```

## empty

#### js

```

import MessageDialog from '@ctmobile/ui-messagedialog';
import '@ctmobile/ui-messagedialog/themes/default/messagedialog.less';
import '@ctmobile/ui-messagedialog/messagedialog.less';

const loadingDialog = MessageDialog.makeLoading({
  parent: document.body,
  refreshCallback() {
    alert('点击了刷新');
    loadingDialog.hide();
  },
  boundingCallback() {
    return {
      top: '0',
      bottom: '0',
    };
  },
  isShowHeader() {
    return true;
  },
});

loadingDialog.setEmptyTip('暂无数据！');
loadingDialog.showEmpty();

```

## submit

#### js

```

import MessageDialog from '@ctmobile/ui-messagedialog';
import '@ctmobile/ui-messagedialog/themes/default/messagedialog.less';
import '@ctmobile/ui-messagedialog/messagedialog.less';

const loadingDialog = MessageDialog.makeLoading({
  parent: document.body,
  refreshCallback() {
    alert('点击了刷新');
    loadingDialog.hide();
  },
  boundingCallback() {
    return {
      top: '0',
      bottom: '0',
    };
  },
  isShowHeader() {
    return true;
  },
});

loadingDialog.showSubmit();
setTimeout(() => {
  loadingDialog.hide();
}, 5000);

```

## 例子

#### html

```

        <ul class="messagedialog-demo-wrap">
          <li class="showTop">show top toast</li>
          <li class="showCenter">show center toast</li>
          <li class="showBottom">show bottom toast</li>
          <li class="alert">show alert</li>
          <li class="confirm">show confirm</li>
          <li class="prompt">show prompt</li>
          <li class="custom">show custom</li>
          <li class="infinite">show infinite</li>
          <li class="determined">show determined</li>
          <li class="loadingNonetwork">show nonetwork</li>
          <li class="loadingFail">show fail</li>
          <li class="loadingLoading">show loading</li>
          <li class="loadingEmpty">show empty</li>
          <li class="loadingSubmit">show submit</li>
        </ul>

```

#### js

```

import $ from 'jquery';
import MessageDialog from '@ctmobile/ui-messagedialog';
import '@ctmobile/ui-messagedialog/themes/default/messagedialog.less';
import '@ctmobile/ui-messagedialog/messagedialog.less';

const $container = $('.ctmobile-ui-doc-demo-device-inner');
const $parent = $container.find(' .messagedialog-demo-wrap');

$parent.find('.alert')[0].addEventListener('click', () => {
  const alert = MessageDialog.alert({
    parent: $container[0],
    title: '提示',
    text: '这是一个弹出框',
    icon: 'icon-exclamation-sign',
    callback() {
      console.log('callback');
    },
  });
});

$parent.find('.confirm')[0].addEventListener('click', () => {
  MessageDialog.confirm({
    parent: $container[0],
    title: '提示',
    text: '您真的要删除此条记录吗？',
    icon: 'icon-exclamation-sign',
    callback(flag) {
      console.log(`flag:${flag}`);
      if (flag === 0) {
        MessageDialog.alert({
          parent: $container[0],
          title: '提示',
          text: '删除成功',
          icon: 'icon-exclamation-sign',
          callback() {
            console.log('callback');
          },
        });
      }
    },
  });
});

$parent.find('.prompt')[0].addEventListener('click', () => {
  MessageDialog.prompt({
    parent: $container[0],
    title: '提示',
    text: '请输入您的有效地址',
    icon: 'icon-exclamation-sign',
    defaultVal: '辽宁省沈阳市',
    placeholder: '请输入您的有效地址',
    callback(flag, val) {
      console.log(`flag:${flag}`);
      if (flag === 0) {
        MessageDialog.alert({
          parent: $container[0],
          title: '提示',
          text: val,
          icon: 'icon-exclamation-sign',
          callback() {
            console.log('callback');
          },
        });
      }
    },
  });
});

$parent.find('.showTop')[0].addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    MessageDialog.makeText({
      parent: $container[0],
      text: 'this is a top toast',
      position: 'top',
      duration: 'short',
    });
  }
});

$parent.find('.showCenter')[0].addEventListener('click', () => {
  MessageDialog.makeText({
    parent: $container[0],
    text: 'this is a center toast',
    position: 'center',
    duration: 'short',
  });
});

$parent.find('.showBottom')[0].addEventListener('click', () => {
  MessageDialog.makeText({
    parent: $container[0],
    text: 'this is a bottom toast',
    position: 'bottom',
    duration: 'short',
  });
});

const loadingDialog = MessageDialog.makeLoading({
  parent: $container[0],
  refreshCallback() {
    alert('点击了刷新');
    loadingDialog.hide();
  },
  boundingCallback() {
    return {
      top: '0',
      bottom: '0',
    };
  },
  isShowHeader() {
    return true;
  },
});

$parent.find('.loadingNonetwork')[0].addEventListener('click', () => {
  loadingDialog.setNoNetWorkTip('请检查网络！');
  loadingDialog.showNoNetWork();
});

$parent.find('.loadingFail')[0].addEventListener('click', () => {
  loadingDialog.setFailTip('程序发成异常请重试！');
  loadingDialog.showFail();
});

$parent.find('.loadingLoading')[0].addEventListener('click', () => {
  loadingDialog.showLoading();
  setTimeout(() => {
    loadingDialog.hide();
  }, 5000);
});

$parent.find('.loadingEmpty')[0].addEventListener('click', () => {
  loadingDialog.setEmptyTip('暂无数据！');
  loadingDialog.showEmpty();
});

$parent.find('.loadingSubmit')[0].addEventListener('click', () => {
  loadingDialog.showSubmit();
  setTimeout(() => {
    loadingDialog.hide();
  }, 5000);
});

$parent.find('.custom')[0].addEventListener('click', () => {
  const dialog = MessageDialog.customDialog({
    parent: $container[0],
    title: '自定义',
    html: <pre>
          <code class="html">
            `<form class="form">
               <label for="name">用户名</label>
               <input type="text">
            </form>`
          </code>
        </pre>
    buttons: [{
      text: '确定',
      handler() {
        dialog.close();
        MessageDialog.alert({
          parent: $container[0],
          title: '提示',
          text: '点击了确定',
          icon: 'icon-exclamation-sign',
          callback() {
            alert(dialog.el.querySelector('.form > input').value);
          },
        });
      },
    }, {
      text: '关闭',
      handler() {
        dialog.close();
      },
    }],
    rendercallback() {
      console.log('renderSuccess');
    },
  });
});

$parent.find('.infinite')[0].addEventListener('click', () => {
  const dialog = MessageDialog.infiniteProgressDialog({
    parent: $container[0],
    title: 'infinite ProgressDialog',
    text: 'Loading...',
    buttons: [{
      text: '确定',
      handler() {
        dialog.close();
        MessageDialog.alert({
          parent: $container[0],
          title: '提示',
          text: '点击了确定',
          icon: 'icon-exclamation-sign',
          callback() {
            alert(dialog.el.querySelector('.form > input').value);
          },
        });
      },
    }, {
      text: '关闭',
      handler() {
        dialog.close();
      },
    }],
    rendercallback() {
      console.log('renderSuccess');
    },
  });
});

$parent.find('.determined')[0].addEventListener('click', () => {
  let value = 0;
  let handler;
  const dialog = MessageDialog.determinedProgressDialog({
    parent: $container[0],
    title: 'determined ProgressDialog',
    text: 'Loading...',
    buttons: [{
      text: '确定',
      handler() {
        dialog.close();
        MessageDialog.alert({
          parent: $container[0],
          title: '提示',
          text: '点击了确定',
          icon: 'icon-exclamation-sign',
          callback() {
            alert(dialog.el.querySelector('.form > input').value);
          },
        });
      },
    }, {
      text: '关闭',
      handler() {
        dialog.close();
      },
    }],
    rendercallback() {
      console.log('renderSuccess');
      handler = setInterval(() => {
        dialog.setValue(++value);
      }, 500);
    },
    completecallback() {
      dialog.close();
      clearInterval(handler);
    },
    changecallback() {

    },
  });
});

```

## 方法

alert({ parent, title, text, icon, callback}) - 显示一个消息提示框

* parent-HtmlElement父容器dom
* title-string标题
* text-string内容
* icon-string图标<br>
icon-exclamation-sign<br>
icon-off<br>
icon-ok-sign<br>
icon-info-sign<br>
icon-remove-sign<br>
icon-user<br>
icon-key<br>
icon-home
* callback-Function点击确定回调函数
* 返回值-Object
  -close() - 关闭对话框

confirm({ parent, title, text, icon, callback}) - 显示一个确认对话框

* parent-HtmlElement父容器dom
* title-string标题
* text-string内容
* icon-string图标<br>
icon-exclamation-sign<br>
icon-off<br>
icon-ok-sign<br>
icon-info-sign<br>
icon-remove-sign<br>
icon-user<br>
icon-key<br>
icon-home
* callback-Function点击确定回调函数(flag [0 | 1] 0确定 1取消)

prompt({ parent, title, text, icon, defaultVal, placeholder, value, callback}) - 弹出一个带有input的对话框

* parent-HtmlElement父容器dom
* title-string标题
* text-string内容
* icon-string图标<br>
icon-exclamation-sign<br>
icon-off<br>
icon-ok-sign<br>
icon-info-sign<br>
icon-remove-sign<br>
icon-user<br>
icon-key<br>
icon-home
* defaultVal-string缺省值
* placeholder-stringstring input的缺省提示
* value-string输入的值
* callback-Function点击确定回调函数(flag [0 | 1] 0确定 1取消)

promptmulit({ parent, title, text, icon, defaultVal, placeholder, value, callback}) - 弹出一个带有textarea的对话框

* parent-HtmlElement父容器dom
* title-string标题
* text-string内容
* icon-string图标<br>
icon-exclamation-sign<br>
icon-off<br>
icon-ok-sign<br>
icon-info-sign<br>
icon-remove-sign<br>
icon-user<br>
icon-key<br>
icon-home
* defaultVal-string缺省值
* placeholder-stringstring input的缺省提示
* value-string输入的值
* callback-Function点击确定回调函数(flag [0 | 1] 0确定 1取消)

customDialog({ parent, title, html, buttons, rendercallback}) - 弹出一个带有textarea的对话框

* parent-HtmlElement父容器dom
* title-string标题
* html-string内容
* buttons-Array({text:string 按钮文字,handler:Function 按钮点击回调})按钮
* rendercallback-Function渲染后的回调函数
* 返回值-Object
  -close() - 关闭对话框
  - el-HtmlElement对话框的el

infiniteProgressDialog({ parent, title, text, buttons, rendercallback}) - 无限进度的对话框

* parent-HtmlElement父容器dom
* title-string标题
* text-string内容
* buttons-Array({text:string 按钮文字,handler:Function 按钮点击回调})按钮
* rendercallback-Function渲染后的回调函数
* 返回值-Object
  -close() - 关闭对话框
  - el-HtmlElement对话框的el

determinedProgressDialog({ parent, title, text, format, total, buttons, rendercallback}, completecallback}, changecallback}) - 进度对话框

* parent-HtmlElement父容器dom
* title-string标题
* text-string内容
* format-string进度显示文本 默认:<%=value%> of <%=total%> <%=value%>当前值 <%=total%>总的值
* total-number总的进度值
* buttons-Array({text:string 按钮文字,handler:Function 按钮点击回调})按钮
* rendercallback-Function渲染后的回调函数
* completecallback-Function进度完成后的回调
* changecallback-Function进度改变的回调
* 返回值-Object
  -close() - 关闭对话框
  - setValue-Function设置对话框的进度值

makeText({ parent, text, position, duration) - 显示一个toast

* parent-HtmlElement父容器dom
* text-string内容
* position-string位置 [top | bottom | center] default bottom
* duration-string持续时间 [long | short] default short

makeLoading({ parent, tip, refreshCallback, boundingCallback, isShowHeader) - 显示一个toast

* parent-HtmlElement父容器dom
* tip-string提示
* refreshCallback-Function重新加载数据的回调函数
* boundingCallback-Object加载loading,empty的时候top和bottom的值,nonetwork,fail,submit 不需要设置 {top:"",bottom:""}
* isShowHeader-booleannonetwork,fail 是否需要显示头
* 返回值-Object
  -setLoadingTip(tip) - 设置loading的tip
    + tip-string提示信息
  - setNoNetWorkTip(tip) - 设置nonetwork的tip
    + tip-string提示信息
  - setFailTip(tip) - 设置fail的tip
    + tip-string提示信息
  - setEmptyTip(tip) - 设置empty的tip
    + tip-string提示信息
  - setSubmitTip(tip) - 设置submit的tip
    + tip-string提示信息
  - showLoading() - 显示loading
  - showEmpty() - 显示empty
  - showNoNetWork() - 显示nonetwork
  - showFail() - 显示fail
  - showSubmit() - 显示submit
  - hide() - 关闭loadingDialog
  - close() - 删除loadingDialog
  - isShowLoading() - 是否显示loading
  - isShowNoNetWork() - 是否显示NoNetwork
  - isShowFail() - 是否显示fail
  - isShowEmpty() - 是否显示empty
  - isShowSubmit() - 是否显示submit
  - getParent() - 获取parent的el
