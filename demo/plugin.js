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
  }

  MyCoolPlugin.prototype.init = function () {
    this.$element.text("yo!")
  }


  $.registerPluginProto('mycoolplugin', MyCoolPlugin)

})(jQuery)
