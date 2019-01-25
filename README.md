# CSSans Pro - The Colourful, Sassy, CSS Font

> **CSSans Pro** is a just-for-fun CSS project by [Andronache Izabela](https://www.instagram.com/izadraws/) and [Codrin Pavel](https://codrin.eu).

## Table of Contents

* [Quick Start](#quick-start) - **Setup in under 1 minute**
* [Quick Start - JavaScript version](#quick-start---javascript-version) - Let JS do the writing
* [Options](#options) - Options, options, options
  * [Colors](#colors)
  * [Letter-spacing](#letter-spacing)
  * [Word-spacing](#word-spacing)
  * [Line-height](#line-height)
  * [Align: center](#align-center)
  * [Align: right](#align-right)
  * [Italic (slanted text)](#italic-slanted)
* [Support for IE & co.](#ie-support) - It's just like **CSSans Pro**, but without CSS variables
* [Accessibility](#accessibility) - Super, super important
* [Customize](#customize) - Install locally and go crazy


## Quick Start

Grab the minified CSS file from the repo:
* [`/dist/cssans.min.css`](https://raw.githubusercontent.com/ZeroSpree/CSSans.Pro/master/dist/cssans.min.css)

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
* For improved accessibility, you should add the original text in a `.cssans__accessible` container. [Definitely read this](#accessibility)
* **CSSans Pro** provides options and built-in helper classes such as `.cssans--center`. [See more Options](#options)


## Quick start - JavaScript version

Grab the minified CSS and JS files from the repo:
* [`/dist/cssans.min.css`](https://raw.githubusercontent.com/ZeroSpree/CSSans.Pro/master/dist/cssans.min.css)
* [`/dist/cssans.min.js`](https://raw.githubusercontent.com/ZeroSpree/CSSans.Pro/master/dist/cssans.min.js)

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

> You can grab the unminified CSSans() function from 
[`/_src/cssans/js/cssans.js`](https://github.com/ZeroSpree/CSSans.Pro/blob/master/_src/cssans/js/cssans.js) 
to see what's going on in there. Nothing much, really!


## Options

### Colors

The color pallete is controlled by 5 CSS variables written as `--cssans-*whichcolor*: *r*, *g*, *b*`. 

Note that we only need the color **values**, without the `rgb()` syntax.

```css
--cssans-primary: 31, 51, 104;    // blue
--cssans-secondary: 237, 21, 118; // pink
--cssans-accent1: 43, 208, 247;   // light blue
--cssans-accent2: 255, 92, 92;    // orange
--cssans-accent3: 255, 216, 9;    // yellow
```

### Letter-spacing

```css
--cssans-letter-spacing: 0.1em;
```

### Word-spacing

```css
--cssans-word-spacing: 1em;
```


### Line-height
```css
--cssans-line-height: 1.1em;
```

### Align: center

Use the `cssans--center` class on the container that holds your font markup.

This class will make sure all letters align properly in the middle of the container.
Simply setting `text-align:center;` won't do quite as well since words are separated by margins.

```html
<div class="cssans--center">
    <div class="cssans__word">...</div>
</div>
```

### Align: right

Use the `cssans--right` class on the container that holds your font markup.

Just like with centering, this class will help you properly align text to the right side of the container.

```html
<div class="cssans--right">
    <div class="cssans__word">...</div>
</div>
```

### Italic (slanted)

Use the `cssans--slanted` class on the container that holds your font markup to give it the font an italicized look.

Note: this class literally adds `transform: skew(-15deg);` to each `.cssans__word`, feel free to make your own 👍

```html
<div class="cssans--slanted">
    <div class="cssans__word">...</div>
</div>
```

## IE support

**CSSans Pro** can work on older browsers that don't support CSS Custom Properties. Here's a few ways to do that, pick the one that suits best:

* Clone the repo locally and build your own version of `cssans.min.ie.css` or...

* ...Use the IE compatible [`/dist/cssans.min.ie.css`](https://github.com/ZeroSpree/CSSans.Pro/blob/master/dist/cssans.min.ie.css) - 
this file contains no CSS Variables, all the code is precompiled to normal CSS properties. Feel free to find all/replace all colors and spacings you'd like to customize.



## Accessibility

> You don't need to read this if you use the `CSSans()` JavaScript function.

**CSSans Pro** is made out of CSS shapes that screen readers and other assistive technologies cannot identify.

In order to keep your site accessible, **please** use the built-in `.cssans__accessible` class. It's really easy, look:

```html
<div class="cssans__accessible">I can be read by a screen reader, hurray!</div>
```
