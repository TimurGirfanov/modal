jQuery modal box.
=================

This is light-weight modal box plugin for jQuery. 
Box could be opened as a new layer.

Example is here: http://timka.me

Options:
--------
 - layer - optional. Boolean. Default value: false.
 - width - optional. Integer (pixels) / string (percents). Default value: 60%.
 - title - optional. String. If defined, then you'll see title-block with defined title.
 - text  - optional. String. This is content of the modal box.
 - url   - optional. String. If you want to load content by the link, then you should use it.
 - data  - optional. Array. If you want to transfer some data (POST), then define it.

Functions:
----------
 - mb.open() - opens modal box;
 - mb.decorate() - puts in center of x-axis;
 - mb.center() - puts in top;
 - mb.close() - removes modal box;
 - mb.closeAll() - removes all modal boxes;

How to:
-------
```javascript

/**
 * Open new modal box.
 */
$('#element').on('click',function(){
 mb.open({
  width: 700, // in pixels;
  title: 'One two three!',
  text: '<h1>Here we go!</h1><div>Hello world!</div>'
 });
 return false;
});

/**
 * Open new modal box with content loaded by link.
 */
$('#element').on('click',function(){
 mb.open({
  width: 700, // in pixels;
  title: 'One two three!',
  url: 'http://mysite.com/ajax/signup'
 });
 return false;
});

/**
 * Open new modal box as new layer.
 */
$('#element').on('click',function(){
 mb.open({
  width: 700, // in pixels;
  title: 'One two three!',
  layer: true,
  text: '<h1>Here we go!</h1><div>Hello world!</div>'
 });
 return false;
});

/**
 * Open new modal box with width in percent.
 */
$('#element').on('click',function(){
 mb.open({
  width: "70%", // in percent;
  title: 'One two three!',
  text: '<h1>Here we go!</h1><div>Hello world!</div>'
 });
 return false;
});

/**
 * Put in top.
 */
$('#element').on('click',function(){
 mb.open({
  width: 700, // in pixels;
  title: 'One two three!',
  text: '<h1>Here we go!</h1><div>Hello world!</div>'
 });
 return false;
});

$('#element-two').on('click',function(){
 // bla-bla-bla
 ...
 // put in top. Position depends on height;
 mb.center();
 return false;
});
```
