let textarea1 = document.querySelectorAll('textarea')[0];
let button1 = document.querySelectorAll('button')[0];

button1.onclick = function (e) {
    window.opener.postMessage(textarea1.value);
};
