# jquery-register-plugin-prototype

> Register JavaScript prototypes as jQuery plugins


## Usage


See ``demo/plugin.js`

First, define plugin's prototype

``js
var MyCoolPlugin = function() { ... }
MyCoolPlugin.prototype = ...

$.registerPluginProto('mycoolplugin', MyCoolPlugin)
``

Second, let your plugin be instanstiated through HTML ``data-*`` API:

```html
<div data-plugin="mycoolplugin">...</div>
``




## TODOs

* quality measures
 * tests -> mocha, headless browser stuff..
* features
 * .on('some-reload-event', <get the shit going again..>)
