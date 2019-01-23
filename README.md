# CSSans Pro: The Colourful, Sassy, CSS Font

> CSSans Pro is a made-for-fun CSS font. Use at your own risk.

## Table of Contents

* [Getting Started](#getting-started) - **Quick setup without headaches**
* [Getting Started without JS](#getting-started-without-js) - Write your own CSSans Markup
* [Customize to your needs](#customize-to-your-needs) - Learn how to customize CSSans Pro
* [IE support](#ie-support) - CSSans Pro can work without CSS variables
* [Accessibility](#accessibility) - Making sure everyone ca read the text

## Getting Started

First, grab these 2 files from the repo:
/dist/cssans.min.css
/dist/cssans.min.js

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
