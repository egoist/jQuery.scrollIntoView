# jQuery.scrollIntoView

When a DIV is scrolled into or out of the visible part of browser it executes a function.

![demo](http://ww4.sinaimg.cn/large/a15b4afegw1ew4n37b0hig211g0ha4qp.gif)

## Usage

$.scrollIntoView(mount, unmount, once)

**mount**: function, executed when scrolled into the view  
**unmount**: function, executed when scrolled out of the view  
**once**: boolean, default is false, it will still trigger the function when the specific element is already visible in view unless `once` is set to be `true`.

```javascript
$(function () {

  var mount = function () {
    $('body').css('background-color', 'red')
    console.log('hi')
  }
  var unmount = function () {
    $('body').css('background-color', '#fff')
    console.log('out')
  }

  $('.m2').scrollIntoView(mount, unmount, true)

})

```

## License

MIT.
