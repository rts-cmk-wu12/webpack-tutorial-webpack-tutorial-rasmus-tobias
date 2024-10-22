import _ from 'lodash';

// Highligt.js
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
// ---------


const highlightedCode = hljs.highlight(
    '<span>Hello World!</span>',
    { language: 'javascript' }
).value

// const headline = 'Made by Rasmus & Tobias';
document.querySelector('#headline').innerHTML = highlightedCode