# jQuery.scrollIntoView

When a DIV is scrolled into or out of the visible part of browser it executes a function.

![demo](http://ww4.sinaimg.cn/large/a15b4afegw1ew4n37b0hig211g0ha4qp.gif)

## Install

```
bower install jquery-scrollIntoView
npm install jquery-scrollintoview
```

## Usage

**$.scrollIntoView(mount, unmount, once)**

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

This project is released under SOX license that means you can do whatever you want to do, but you have to open source your copy on github if you let the public uses it. All copies should be released under the same license. The owner of each copy is only reponsible for his own copy, not for the parents, not for the children.

permitted use:  
fork on github  
change  
do evil with your copy  

prohibted use:  
do evil with copies not of your own  
open source your copy without declaring your parent copy  
