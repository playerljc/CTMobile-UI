import $ from 'jquery';
import hljs from 'highlight.js/lib/index';
import Bone from './bone/index';
import './jquery.pin';

export { Bone };

export default {
  initial() {
    const $code = document.getElementsByClassName('html');
    for (let i = 0; i < $code.length; i++) {
      const element = $code[i];
      element.innerText = element.innerHTML;
    }

    hljs.initHighlightingOnLoad();

    $('.ctmobile-ui-doc-demo-device').pin({
      containerSelector: '.with-device',
    });
  },
};
