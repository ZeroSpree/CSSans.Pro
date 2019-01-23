# CSSans Pro: The Colourful, Sassy, CSS Font

> CSSans Pro is a made-for-fun CSS font. Use at your own risk.

## Table of Contents

* [Quick Start](#quick-start) - **Setup in under 1 minute**
* [CSS only setup](#css-only-setup) - Write your own CSSans Markup, no JS involved
* [Customization](#customization) - See available options and learn how to make CSSans Pro your own
* [IE support](#ie-support) - CSSans Pro can work without CSS variables
* [Accessibility](#accessibility) - Making sure everyone ca read the text


## Quick Start

First, grab these 2 files from the repo:
* /dist/cssans.min.css
* /dist/cssans.min.js

Then setup some test code:
```html
<div id="foo">Lorem ipsum dolor sit amet.</div>
```

Last, call the CSSans() function provided in cssans.min.js
```javascript
var el = document.getElementById('foo');
CSSans(el, el.innerText);
```

Done!
> You can grab the unminified JS file from `/_src/cssans/js/cssans.js` to see what's going on there. Nothing much, really!


## CSS only setup

**CSSans Pro** is a CSS based font, therefore it can work even without any JavaScript!

The `HTML` notation looks like this:

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

Here's a quick breakdown:
* Each character is a single element with a class of `cssans:{character}`
* Each word has it's own `.cssans__word` container. This will make sure your text is aligned and spaced properly.
* For improved accessibility, you should keep the original text in a `.cssans__accessible` container
* There are a few built-in helper classes such as `.cssans--center`, you can read about them [below](#customization)

