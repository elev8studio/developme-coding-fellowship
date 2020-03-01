# Project: Homepage

---

## Some help

---

### Planning

- Consistency: What is repeated?
- Content first
- What elements are reused, where?
- Do containers have consistent padding or margin?
- Fixed size? Responsive design... what if content changed?

---

> I am not looking for a pixel perfect design, I am looking for a responsive design, that resizes well

---

### Do a bit of prototyping

HTML sectioning elements first

Think about your boxes…

Layout early, test it

---

### Naming things

- What am I targeting?
- Do I want to target all of them on the whole site, or just for this particular use case?
- ...as that will inform how you target an element to change its styling

---

> I want to see classes being used

---

### The *cascade* is really important

Remember for now, what comes last is added last

It overrides what has been declared before

---

### CSS File Order

```css
/* 1) Layout */
Stuff to lay out your page structure

/* 2) Generic */
Fonts, colours, bullet point styles, link hover state, forms

/* 3) Specific */
Page/content specific, e.g. this one button
```
---

> Don't worry it's going to get messy, we'll talk more about file structure and order with next weeks project

---

### Browsers add styles

Start clean - add reset.css

[https://meyerweb.com/eric/tools/css/reset/](https://meyerweb.com/eric/tools/css/reset/)

- Google it :)
- Either
	- Copy and paste it into the TOP of your CSS
	- Create a new file `reset.css` and remember to include it in your build

---

### Normalize

> Normalize.css is a small CSS file that provides better cross-browser consistency in the default styling of HTML elements.

[https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/)

- Download it
- Set it as first stylesheet
- Then pull in your stylesheet

---

## Demo: Codepen

---

### Use comments!

HTML
```
<div class=“header”>

</div><!-- /.header -->
```

CSS
```css
/* forms, input and buttons */
form {
	border: 1px solid red;
}
```

---

### Start as you mean to go on

- Keep your code neat
	- indenting
	- spacing
- keep CSS structured/organised
- USE DEVTOOLS!!

---

### Folder structure & filenames

- lowercase
- NO spaces, use underscore _ or hyphen -
- pick a style and stick to it
- new-january-newsletter-logo.jpg

---

### Something like

- index.html
- styles
	- reset.css
	- style.css
- fonts
	- font files here
- images
	- myimage.jpg
- scripts
 	- javascript would go here

---


