import $ from 'jquery';
import hljs from 'highlight.js/lib/index';
import './jquery.pin';

export default {
  initial() {
    const $code = document.getElementsByClassName("html");
    for (let i = 0; i < $code.length; i++) {
      let element = $code[i];
      element.innerText = element.innerHTML;
    }

    hljs.initHighlightingOnLoad();

    $(".ctmobile-ui-doc-demo-device").pin({
      containerSelector: '.with-device'
    });
  }
}