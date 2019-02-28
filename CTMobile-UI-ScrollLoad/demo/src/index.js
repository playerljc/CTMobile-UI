import ScrollLoad from '@ctmobile/ui-scrollload/scrollload';
import '@ctmobile/ui-scrollload/themes/default/scrollload.less';
import '@ctmobile/ui-scrollload/scrollload.less';

function appendData() {
  const df = document.createDocumentFragment();

  for (let i = 0; i < 30; i++) {
    df.appendChild($('<li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li>')[0]);
  }

  listViewEl.appendChild(df);
}

const listViewEl = $('#listView')[0];
let count = 0;

appendData();

const scrollLoad = new ScrollLoad(document.getElementById('container'));

scrollLoad.on('scrollbottom', (config) => {
  if (count === 3) {
    config.done(ScrollLoad.EMPTY);
  } else {
    setTimeout(() => {
      appendData();
      config.done(ScrollLoad.NORMAL);
      count++;
    }, 1000 * 3);
  }
});

scrollLoad.on('emptyclick', () => {
  console.log('emptyclick');
});

scrollLoad.on('errorclick', () => {
  console.log('errorclick');
});
