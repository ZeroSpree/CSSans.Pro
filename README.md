# CSSans Pro - The Colourful, Sassy, CSS Font

> CSSans Pro is a made-for-fun CSS font by Andronache Izabela and Codrin Pavel.
It's developed using SCSS and makes use of CSS Custom Properties (a.k.a. CS variables).
Use at your own risk.

## Table of Contents

* [Quick Start](#quick-start) - **Setup in under 1 minute**
* [Quick start - JavaScript version](#quick-start-javascript-version) - Let JavaScript do the writing
* [Customization](#customization) - See available options and learn how to make CSSans Pro your own
* [IE support](#ie-support) - CSSans Pro can work without CSS variables
* [Accessibility](#accessibility) - Super, super, super important


## Quick Start

Grab the minified CSS file from the repo:
* `/dist/cssans.min.css`

Add in some example `HTML` markup:
```html
<div class="cssans cssans--center">
    <div class="cssans__accessible">CSSans Pro</div>

    <div class="cssans__word">
        <b class="cssans:C"></b>
        <b class="cssans:S"></b>
        <b class="cssans:S"></b>
        <b class="cssans:a"></b>
        <b class="cssans:n"></b>
        <b class="cssans:s"></b>
    </div>

    <div class="cssans__word">
        <b class="cssans:P"></b>
        <b class="cssans:r"></b>
        <b class="cssans:o"></b>
    </div>
</div>
```

... and done!

Here's a quick breakdown:
* Each character is **a single element** with a class of `cssans:{character}`
* Each word has it's own `.cssans__word` container. This will make sure your text is aligned and spaced properly.
* For improved accessibility, you should keep the original text in a `.cssans__accessible` container
* There are a few built-in helper classes such as `.cssans--center`, you can read about them [below](#customization)


## Quick start - JavaScript version

Grab the minified CSS and JS files from the repo:
* `/dist/cssans.min.css`
* `/dist/cssans.min.js`

Add in some example `HTML` markup:
```html
<div id="foo">CSSans Pro</div>
```

Call `CSSans(element, text)` 
```javascript
var element = document.getElementById('foo');
var text = el.innerText;
CSSans(element, text);
```

> You can grab the unminified CSSans() function from `/_src/cssans/js/cssans.js` to see what's going on in there. Nothing much, really!



