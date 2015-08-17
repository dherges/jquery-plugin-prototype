# jquery-plugin-prototype

> JavaScript prototypes are your better jQuery plugins


## Usage


See ``demo/plugin.js``

First, define plugin's prototype

```js
var MyCoolPlugin = function(element, options) { ... }
MyCoolPlugin.prototype.doSomething = function() { ... }

$.pp.register('mycoolplugin', MyCoolPlugin)
```

Second, let your plugin be instanstiated through HTML ``data-*`` API:

```html
<div data-plugin="mycoolplugin">...</div>
<script>$.pp.init()</script>
```



## TODOs

* quality measures
 * tests -> mocha, headless browser stuff..
* features
 * .on('some-reload-event', <get the shit going again..>)
