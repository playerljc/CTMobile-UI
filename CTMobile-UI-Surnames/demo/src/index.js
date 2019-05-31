// import DemoUtil from '@ctmobile/ui-demo-util';
// import SliderScaleFactory from '@ctmobile/ui-sliderscale';
//
// import './index.less';
//
// DemoUtil.initial();
//
// const s1 = SliderScaleFactory.create(document.getElementById('s1'), {
//   min: 0,
//   max: 10,
//   value: 0,
//   step: 1,
//   interval: 2,
// });
//
// const s2 = SliderScaleFactory.create(document.getElementById('s2'), {
//   min: 0,
//   max: 60,
//   value: 0,
//   step: 1,
//   interval: 5,
// });
//
// const s3 = SliderScaleFactory.create(document.getElementById('s3'), {
//   min: 0,
//   max: 50,
//   value: 0,
//   step: 1,
//   interval: 5,
// });
//
// document.getElementById('controlS3').addEventListener('change', (e) => {
//   s3.setValue(e.target.value);
// });

import { Dom6 } from '@ctmobile/ui-util';
import SurnamesFactory from '@ctmobile/ui-surnames/surnames';
import './index.less';
import '@ctmobile/ui-surnames/surnames.less';
import '@ctmobile/ui-surnames/themes/default/surnames.less';

const el = document.getElementById('surnames');

function createSurnames() {
  const contentEl = el.querySelector('.ct-surnames-content');
  const indexNames = ['A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '#'];
  const df = document.createDocumentFragment();
  for (let i = 0; i < indexNames.length; i++) {
    const index = indexNames[i];
    let str = `
        <div class="ct-surnames-group">
          <a class="ct-surnames-group-title" data-name="${index}">${index}</a>
          <div class="ct-surnames-group-inner">
            <ul>`;

    for (let j = 0; j < 10; j++) {
      str += `<li>${index}${j + 1}</li>`;
    }

    str += `    </ul>
          </div>
        </div>`;

    const groupEl = Dom6.createElement(str);
    df.appendChild(groupEl);
  }
  contentEl.appendChild(df);
}


createSurnames();

SurnamesFactory.create(el);
