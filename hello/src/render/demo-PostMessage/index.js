let textarea1 = document.querySelector('textarea');
let button1 = document.querySelector('button');

button1.onclick = function (e) {
    window.opener.postMessage(textarea1.value);
};