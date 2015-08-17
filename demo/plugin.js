;(function($) {

  'use strict';

  // MyCoolPlugin Class Definition
  // ====================================

  var MyCoolPlugin = function (element, options) {
    this.options = $.extend({}, MyCoolPlugin.DEFAULTS, options)
    this.$element = $(element)

    this.init()
  }

  MyCoolPlugin.VERSION  = '1.0.0'

  MyCoolPlugin.DEFAULTS = {
    someAttrib: 7
  }

  MyCoolPlugin.prototype.init = function () {
    var htmlStr = "yo!<br>" + "My name is MyCoolPlugin<br>" +
            "Here I am: " + this.$element.prop('nodeName') + "<br>" +
            "This is how i do: " + JSON.stringify(this.options)

    this.$element.html(htmlStr)
  }


  $.pp.register('mycoolplugin', MyCoolPlugin)

  $(window).on('load', $.pp.init)


})(jQuery)
