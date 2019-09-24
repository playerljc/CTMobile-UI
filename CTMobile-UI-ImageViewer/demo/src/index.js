import ImageViewer from '@ctmobile/ui-imageviewer-sd';
import DemoUtil from '@ctmobile/ui-demo-util';
import 'normalize.less';
import './index.less';

DemoUtil.initial();

// build items array
const items = [
  {
    src: 'http://pic37.nipic.com/20140110/17563091_221827492154_2.jpg',
    w: 600,
    h: 400,
  },
  {
    src: 'http://pic18.nipic.com/20120204/8339340_144203764154_2.jpg',
    w: 1200,
    h: 900,
  },
];

document.getElementById('photo1').addEventListener('click', () => {
  const imageviewer = ImageViewer(document.getElementById('imageviewer'), items, {
    index: 0,
  });
  imageviewer.photoswipe.init();
});

document.getElementById('photo2').addEventListener('click', () => {
  const imageviewer = ImageViewer(document.getElementById('imageviewer'), items, {
    index: 1,
  });
  imageviewer.photoswipe.init();
});
