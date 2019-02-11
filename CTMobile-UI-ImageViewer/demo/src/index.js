import ImageViewer from '@ctmobile/ui-imageviewer';
import DemoUtil from '@ctmobile/ui-demo-util';
import 'normalize.less';
import './index.less';

DemoUtil.initial();

// build items array
const items = [
  {
    src: 'https://placekitten.com/600/400',
    w: 600,
    h: 400,
  },
  {
    src: 'https://placekitten.com/1200/900',
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
