# ImageViewer

* [Getting started](#imageviewer-started)
* [Options](#imageviewer-options)
* [API](#imageviewer-api)
* [FAQ](#imageviewer-faq)
* [HTML in slides](#imageviewer-htmlinslides)
* [Responsive images](#imageviewer-responsiveimages)
* [Performance tips](#imageviewer-performancetips)
* [demo](#imageviewer-demo)

## Getting started

[请参考photoswipe的Getting started](http://photoswipe.com/documentation/getting-started.html)

## Options

[请参考photoswipe的Options](http://photoswipe.com/documentation/options.html)

## API

[请参考photoswipe的API](http://photoswipe.com/documentation/api.html)

## FAQ

[请参考photoswipe的FAQ](http://photoswipe.com/documentation/faq.html)

## HTML in slides

[请参考photoswipe的HTML in slides](http://photoswipe.com/documentation/custom-html-in-slides.html)

## Responsive images

[请参考photoswipe的Responsive images](http://photoswipe.com/documentation/responsive-images.html)

## Performance tips

http://photoswipe.com/documentation/performance-tips.html
[请参考photoswipe的Performance tips](http://photoswipe.com/documentation/performance-tips.html)

## 例子

#### html

#### js

```

import ImageViewer from '@ctmobile/ui-imageviewer';

// build items array
const items = [
  {
    src: 'http://pic37.nipic.com/20140110/17563091_221827492154_2.jpg',
    w: 600,
    h: 400
  },
  {
    src: 'http://pic18.nipic.com/20120204/8339340_144203764154_2.jpg',
    w: 1200,
    h: 900
  }
];

document.getElementById('photo1').addEventListener('click', () => {
  const imageviewer = ImageViewer(document.getElementById('imageviewer'), items, {
    index: 0
  });
  imageviewer.photoswipe.init();
});

document.getElementById('photo2').addEventListener('click', () => {
  const imageviewer = ImageViewer(document.getElementById('imageviewer'), items, {
    index: 1
  });
  imageviewer.photoswipe.init();
});

```
