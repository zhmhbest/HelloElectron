const RenderLoader = (() => {
    const path = require('path');
    const fs = require('fs');
    const render_path = path.join(__dirname, 'render');

    // 专属link <link rel="stylesheet" href="">
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = '';
    document.querySelector('head').appendChild(stylesheet);

    function loadHtml(location) {
        return fs.readFileSync(
            path.join(render_path, location + '.html')
        ).toString('utf-8');
    }

    function loadCss (location) {
        stylesheet.href = path.join(render_path, location + '.css')
    }

    return {
        loadHtml,
        loadCss,
    };
})();

new Vue({
    el: "#app",
    template: RenderLoader.loadHtml('home'),
    data: {
    },
    mounted() {
        RenderLoader.loadCss('home');
    }
});