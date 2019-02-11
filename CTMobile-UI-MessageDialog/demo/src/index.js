import MessageDialog from '@ctmobile/ui-messagedialog/messagedialog';
import '@ctmobile/ui-messagedialog/themes/default/messagedialog.less';
import '@ctmobile/ui-messagedialog/messagedialog.less';

$('#alert')[0].addEventListener('click', () => {
  const alert = MessageDialog.alert({
    parent: document.body,
    title: '提示',
    text: '这是一个弹出框',
    icon: 'icon-exclamation-sign',
    callback() {
      console.log('callback');
    },
  });
});

$('#confirm')[0].addEventListener('click', () => {
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
});

$('#prompt')[0].addEventListener('click', () => {
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
});

$('#showTop')[0].addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    MessageDialog.makeText({
      parent: document.body,
      text: 'this is a top toast',
      position: 'top',
      duration: 'short',
    });
  }
});

$('#showCenter')[0].addEventListener('click', () => {
  MessageDialog.makeText({
    parent: document.body,
    text: 'this is a center toast',
    position: 'center',
    duration: 'short',
  });
});

$('#showBottom')[0].addEventListener('click', () => {
  MessageDialog.makeText({
    parent: document.body,
    text: 'this is a bottom toast',
    position: 'bottom',
    duration: 'short',
  });
});

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

$('#loadingNonetwork')[0].addEventListener('click', () => {
  loadingDialog.setNoNetWorkTip('请检查网络！');
  loadingDialog.showNoNetWork();
});

$('#loadingFail')[0].addEventListener('click', () => {
  loadingDialog.setFailTip('程序发成异常请重试！');
  loadingDialog.showFail();
});

$('#loadingLoading')[0].addEventListener('click', () => {
  loadingDialog.showLoading();
  setTimeout(() => {
    loadingDialog.hide();
  }, 5000);
});

$('#loadingEmpty')[0].addEventListener('click', () => {
  loadingDialog.setEmptyTip('暂无数据！');
  loadingDialog.showEmpty();
});

$('#loadingSubmit')[0].addEventListener('click', () => {
  loadingDialog.showSubmit();
  setTimeout(() => {
    loadingDialog.hide();
  }, 5000);
});

$('#custom')[0].addEventListener('click', () => {
  const dialog = MessageDialog.customDialog({
    parent: document.body,
    title: '自定义',
    html: `
          <form class='form'>
             <label for='name'>用户名</label>
             <input type='text'>
          </form>`,
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
});
