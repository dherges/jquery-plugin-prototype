/*!
 * jquery-register-plugin-prototype
 * https://github.com/dherges/jquery-register-plugin-prototype
 *
 * Copyright (c) 2015 David Herges
 * Licensed under the MIT license.
 */

;(function($) {

  /** Usage: $.registerPluginProto('myPlugin', {obj extends Prototype}) */
  $.registerPluginProto = function (name, Proto) {

    // PLUGIN function
    var Plugin = function (option) {
      return this.each(function () {
        var $this   = $(this)
        var data    = $this.data(name)
        var options = typeof option == 'object' && option

        if (!data) $this.data(name, (data = new Proto(this, options)))
        if (typeof option == 'string') data[option]()
      })
    }

    // NO CONFLICT
    var old = $.fn[name]
    $.fn[name]             = Plugin
    $.fn[name].Constructor = Proto

    $.fn[name].noConflict = function () {
      $.fn[name] = old
      return this
    }

    // DATA-API + DATA-PLUGIN loader
    $(window).on('load', function () {
      $('[data-plugin="' + name + '"]').each(function () {
        var $element = $(this)
        Plugin.call($element, $element.data())
      })
    })

  }

})(jQuery)
