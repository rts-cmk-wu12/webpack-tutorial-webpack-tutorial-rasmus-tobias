import _ from 'lodash';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/base16/bright.min.css'


hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
});

const headline = 'Made by Rasmus & Tobias';
document.querySelector('#headline').innerHTML = headline