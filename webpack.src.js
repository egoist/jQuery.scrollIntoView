var $ = require('jquery')
require('./jquery.scrollIntoView')
$(function() {

  var mount = function() {
    $('body').css('background-color', 'red')
    console.log('hi')
  }
  var unmount = function() {
    $('body').css('background-color', '#fff')
    console.log('out')
  }
  $('.m2').scrollIntoView(mount, unmount, true)
  
})