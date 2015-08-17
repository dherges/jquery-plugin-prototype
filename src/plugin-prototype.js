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


  /**
   * Registers a JavaScript prototype as jQuery plugin.
   *
   * @param name {String} jQuery plugin name
   * @param Proto {object} A JavaScript prototype object
   * @param opts {object} Optional options...tbd {noConflict: false} to suppress noConflict mode
   */
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


  /**
   * Instantiates prototype instances for jQuery plugins.
   *
   * @param name {String} jQuery plugin names; leave empty to instantiate all
   */
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

  /**
   * Returns prototype instances
   *
   * @param el {Element|String} jQuery element or selector string
   * @param name {String} jQuery plugin name
   */
  $.pp.instance = function (el, name) {
    return $(el).data(name)
  }


})(jQuery)
