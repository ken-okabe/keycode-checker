// Import stylesheets
import './style.css';

// Write Javascript code!

window.document.onkeydown = function (evt) {
  document.getElementById('debug').value =
    `{` +
    '\n' +
    `  "shiftKey" : ${evt.shiftKey},` +
    '\n' +
    `  "ctrlKey" : ${evt.ctrlKey},` +
    '\n' +
    `  "altKey" : ${evt.altKey},` +
    '\n' +
    `  "metakey" : ${evt.metaKey},` +
    '\n' +
    `  "code" : "${evt.code}"` +
    '\n' +
    `}`;
};
