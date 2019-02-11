import FontSizeSetting from '@ctmobile/ui-fontsizesetting';
import DemoUtil from '@ctmobile/ui-demo-util';
import 'normalize.less';
import './index.less';

DemoUtil.initial();

const fontDom = $('#font')[0];
const curValueDom = $('#setCurValue')[0];
const baseRem = 0.7,
  baseValue = 33.3;

curValueDom.addEventListener('input', () => {
  fontSizeSetting.setValue(curValueDom.value);
});

const fontSizeSetting = FontSizeSetting($('#ct-fontsizesetting-demo')[0], {
  min: '0',
  max: '100',
  setp: '1',
  value: '33.3',
});
fontSizeSetting.on('change', (value) => {
  let val = parseInt(value);
  if (val === 0) {
    val = 1;
  }
  fontDom.style.fontSize = `${(value * baseRem / baseValue)}rem`;
  $('#curValue')[0].innerText = fontSizeSetting.getValue();
});
