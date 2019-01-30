# CSSans Pro - The Colourful, Sassy, CSS Font

<a target="_blank" href="https://cssans.pro">
    <img alt="Font specimen" src="https://cssans.pro/cssans.pro.jpg" />
</a>

> **CSSans Pro** is a just-for-fun CSS project by [Andronache Izabela](https://www.instagram.com/izadraws/) and [Codrin Pavel](https://twitter.com/zerospree).

## Table of Contents

* [All Characters & Classes](#overview)
* [Quick Start](#quick-start) - Get **CSSans Pro** up and running in seconds
* [Quick Start - JavaScript Version](#quick-start---javascript-version) - Let JS do the writing
* [Options](#options)
  * [Colors](#colors)
  * [Letter-Spacing](#letter-spacing)
  * [Word-Spacing](#word-spacing)
  * [Line-Height](#line-height)
  * [Italic (slanted text)](#italic-slanted)
  * [Alignment: Center](#align-center)
  * [Alignment: Right](#align-right)
* [Browser Support](#browser-support) - How to use without CSS variables
* [Accessibility](#accessibility) - Super, super important
* [Installation](#installation) - Instructions for running this repo locally


## All Characters & Classes

* A `<b class="cssans:A"></b>`
* B `<b class="cssans:B"></b>`
* C `<b class="cssans:C"></b>`
* D `<b class="cssans:D"></b>`


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

... profit!

Here's a quick breakdown:
* Each character is **a single element** with a class of `cssans:CHAR`
* Each individual word goes inside a `.cssans__word` container. This will make sure all text is being spaced properly.
* For improved accessibility, you should add the original text in a `.cssans__accessible` container. [Definitely read this](#accessibility)
* **CSSans Pro** provides some options and built-in helper classes such as `.cssans--center`. [See more Options](#options)


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
to see what's going on in there. Nothing much, really, feel free to make your own.


## Options

### Colors

The color pallete is controlled by 5 CSS variables written as `--cssans-**WHICHCOLOR**: **R**, **G**, **B**`. 

This notation uses only the color **values**, without the `rgb()` syntax.

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

This class will make sure all words align properly in the middle of the parent container.
> Simply setting `text-align:center;` won't do quite as well since words are separated by margins.

```html
<div class="cssans--center">
    <div class="cssans__word">...</div>
</div>
```

### Align: right

Use the `cssans--right` class on the container that holds your font markup.

This class will help you properly align text to the right side of the parent container.

```html
<div class="cssans--right">
    <div class="cssans__word">...</div>
</div>
```

### Italic (slanted)

Use the `cssans--slanted` class on the container that holds your font markup to give the font an _italicized_ look.

Note: this class literally adds `transform: skew(-15deg);` to each `.cssans__word`. Feel free to experiment 👍

```html
<div class="cssans--slanted">
    <div class="cssans__word">...</div>
</div>
```

## Browser support

**CSSans Pro** can work on older browsers that don't support CSS Custom Properties. Here's a few ways to do that, pick the one that suits best:

* Use the prebuilt IE compatible version of **CSSans Pro** [`/dist/cssans.min.ie.css`](https://github.com/ZeroSpree/CSSans.Pro/blob/master/dist/cssans.min.ie.css) - 
this file contains no CSS Variables, all the code is precompiled to normal CSS properties. Feel free to find/replace all colors and spacings you'd like to customize.

* [Install](#installation) the repo locally and build your own version of `cssans.min.ie.css` or...

* Use a polyfil, such as [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill)


## Accessibility

> You don't need to read this if you use the `CSSans()` JavaScript function.

**CSSans Pro** is made out of CSS shapes that screen readers and other assistive technologies cannot identify.

In order to keep your site accessible, **please** use the built-in `.cssans__accessible` class. It's really easy, look:

```html
<div class="cssans__accessible">I can be read by a screen reader, hurray!</div>
```


## Installation

1. You will need a working [`Jekyll`](https://jekyllrb.com/) environment and [`NPM`](https://www.npmjs.com/) installed on your machine. 
Make sure these are working on your system before proceeding.

2. Clone the repo

3. Install dependencies with `npm install`

4. Run `gulp`

At this point, BrowserSync should open a new browser tab at `http://localhost:3000` and you're good to go!

The repository contains all the files for **CSSans Pro**, as well as the presentation site.

You can find the font files under `_src/cssans/sass/`. All the CSS Custom Properties are set in `_common.scss`.

The `dist` directory should update on-the-fly as you update the files, so you can grab the minified files from the `_dist` folder as soon as you finish editing.

Have fun!