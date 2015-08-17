/*!
 * jquery-plugin-prototype
 * https://github.com/dherges/jquery-plugin-prototype
 *
 * Copyright (c) 2015 David Herges
 * Licensed under the MIT license.
 */

;(function($) {

  'use strict';

  // yo yo yo ... let's popullute the $ namespace ... like print more money $$$
  $.pp = {}


  var defaultOpts = {
    noConflict: true
  }

  /** Usage: $.pp.register('myPlugin', {obj extends Prototype}) */
  $.pp.register = function (name, Proto, opts) {
    opts = $.extend({}, defaultOpts, opts)

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

    // register jQuery plugins
    $.fn[name]             = Plugin
    $.fn[name].Constructor = Proto

    // NO CONFLICT
    if (opts.noConflict) {
      var old = $.fn[name]

      $.fn[name].noConflict = function () {
        $.fn[name] = old
        return this
      }
    }
  }


  $.pp.init = function (name) {
    var filterExpr = (name !== '' && name.length) ? '[data-plugin="' + name + '"]' : '*'

    $('body [data-plugin]')
      .filter(filterExpr)
      .each(function () {
        var $element = $(this)
        var name = $element.data('plugin')

        $.fn[name].call($element, $element.data())
      })
  }

  $.pp.instance = function (el, name) {
    return $(el).data(name)
  }


})(jQuery)
