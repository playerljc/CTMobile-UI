import PhotoSwipe from 'photoswipe/dist/photoswipe.js';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.js';

import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

class ImageViewer {
  constructor(el, items, options) {
    this.el = el;
    this.photoswipe = new PhotoSwipe(this.el, PhotoSwipeUI_Default, items, options);
  }
}

/**
 * ImageViewerFactory
 * @param {HtmlElement} el
 * @param {Array} items
 * @param {Object} options
 * @return {ImageViewer}
 */
export default function (el, items = [], options = {}) {
  return new ImageViewer(el, items, options);
}