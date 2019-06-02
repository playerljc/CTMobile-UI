import DemoUtil from '@ctmobile/ui-demo-util';
import { Dom6 } from '@ctmobile/ui-util';
import SurnamesFactory from '@ctmobile/ui-surnames/surnames';
import '@ctmobile/ui-surnames/surnames.less';
import '@ctmobile/ui-surnames/themes/default/surnames.less';
import './index.less';

DemoUtil.initial();

const el = document.getElementById('normal');

function createSurnames() {
  const contentEl = el.querySelector('.ct-surnames-content');
  const indexNames = [
    'A',
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
    '#',
  ];
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

const surnames = SurnamesFactory.create(el, { position: 'right' });

setTimeout(() => {
  // surnames.scrollToAnimation('#');
}, 3000);

