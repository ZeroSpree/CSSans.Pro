function getParam(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
};

var cssans = {
    playground : document.getElementById('playground'),
    codepen: document.getElementById('codepen'),

    controls : {
        text : document.getElementById('ctrl-text'),
        fontsize : document.getElementById('ctrl-fontsize'),
        colorInputs : document.getElementsByClassName('jscolor')
    },

    checkVarsSupport : function() {
        var color = 'rgb(255, 198, 0)';
        var el = document.createElement('span');

        el.style.setProperty('--color', color);
        el.style.setProperty('background', 'var(--color)');
        document.body.appendChild(el);

        var styles = getComputedStyle(el);
        var doesSupport = styles.backgroundColor === color;
        document.body.removeChild(el);
        return doesSupport;
    },

    setText : function() {
        var text = cssans.controls.text.value.trim();

        CSSans(cssans.playground, text);

        if( text == 'CSSans Pro' || text == '' ) {
            window.history.pushState('Initial', '', '/');
        } else {
            window.history.pushState('Text Change', text, '/?t='+text);
        }

        cssans.setCode();
    },

    setTextFromParam : function () {
        var paramText = getParam('t');

        if (paramText) {
            cssans.controls.text.value = paramText;
            cssans.setText();
        }
    },

    setFontSize : function() {
        cssans.playground.style.fontSize = cssans.controls.fontsize.value + 'px';
        cssans.setCode();
    },

    setColor : function(jscolor) {
        var RGB = Math.round(jscolor.rgb[0]) + ', ' + Math.round(jscolor.rgb[1]) + ', ' + Math.round(jscolor.rgb[2]);

        cssans.playground.style.setProperty(jscolor.valueElement.dataset.variable, RGB);
        jscolor.valueElement.setAttribute('data-rgb', RGB);
        cssans.setCode();
    },

    setCode : function() {
        var fontsize = '  font-size: ' + cssans.controls.fontsize.value + 'px;\n';
        var colors = '';
        var cssVarsOptions = {};

        for (var i = 0; i < cssans.controls.colorInputs.length; i++) {
            var input = cssans.controls.colorInputs[i];
            var property = input.dataset.variable;
            var color = input.dataset.rgb;

            colors += '  ' + property + ': ' + color + ';\n';
            cssVarsOptions[property] = color;
        }

        var html = '<!--\n  Website: https://cssans.pro\n  Documentation: https://github.com/ZeroSpree/CSSans.Pro#readme \n  Follow me: https://codepen.io/zerospree/\n-->\n<div class="cssans cssans--center">\n' + CSSans(cssans.playground, cssans.controls.text.value.trim()) + '\n</div>';

        var data = {
            title : 'CSSans Pro',
            description: 'Learn more about CSSans Pro at [https://cssans.pro](https://cssans.pro).',
            html  : html,
            css : '/* Uses https://cssans.pro/dist/cssans.min.css */ \n\n.cssans {\n' + fontsize + colors + '  --cssans-letter-spacing: 0.1em;\n  --cssans-word-spacing: 1em;\n  --cssans-line-height: 1.1em;\n}',
            layout: 'top',
            tags: ['cssans pro', 'css', 'font'],
            css_external : 'https://cssans.pro/dist/cssans.min.css'
        };

        cssans.codepen.value = JSON.stringify(data).replace(/"/g, "&​quot;").replace(/'/g, "&apos;");

        // Trigger CSS variables polyfill
        if (!cssans.checkVarsSupport()) {
            cssVars({
                variables : cssVarsOptions
            });
        }
    },

    inview : function () {
        inView('.js--inview').on('enter', function (el) {
            el.classList.add('is-inview');
        });
    },

    lettersInview: function () {
        inView('.specimen .cssans__word').on('enter', function (el) {
            el.classList.add('is-inview');
        });
    },

    init : function() {

        cssans.controls.text.addEventListener('input', cssans.setText);
        cssans.controls.fontsize.addEventListener('input', cssans.setFontSize);
        cssans.controls.fontsize.addEventListener('change', cssans.setFontSize);

        cssans.setCode();
        cssans.setTextFromParam();
        cssans.setText();
        cssans.setFontSize();
        cssans.inview();

        // CSSansify all other elements
        var els = document.querySelectorAll('.cssans');

        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            CSSans(el, el.innerText);
        }

        cssans.lettersInview();

    }
};

cssans.init();

