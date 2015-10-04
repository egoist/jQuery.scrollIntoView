;(function (W, $) {

  function scrolledIntoView (mount, unmount, once) {

    var inView = false
    mount = mount || null
    unmount = unmount || null
    once = once || false

    $(window).scroll(function () {
      if (isScrolledIntoView(this)){

        if (once && inView) {
          return
        }
        if (mount) {
          mount()
          inView = true
        }

      } else {

        if (once && !inView) {
          return
        }
        if (unmount) {
          unmount()
          inView = false
        }

      }
    }.bind(this))

    return this
  }

  function isScrolledIntoView(elem) {
    var $elem = $(elem)
    var $window = $(window)

    var docViewTop = $window.scrollTop()
    var docViewBottom = docViewTop + $window.height()

    var elemTop = $elem.offset().top
    var elemBottom = elemTop + $elem.height()

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
  }

  $.fn.scrollIntoView = scrolledIntoView

  if (typeof module !== 'undefined') {
    module.exports = scrolledIntoView
  }

})(window, (typeof window.jQuery !== 'undefined') ? window.jQuery : require('jquery'));
