/**
 * Require the module at `name`.
 *
 * @param {String} name
 * @return {Object} exports
 * @api public
 */

function require(name) {
  var module = require.modules[name];
  if (!module) throw new Error('failed to require "' + name + '"');

  var definition = module.definition;
  if (definition) {
    definition.call(this, module.exports = {}, module);
    delete module.definition;
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Register module at `name` with callback `definition`.
 *
 * @param {String} name
 * @param {Function} definition
 * @api private
 */

require.register = function (name, definition) {
  require.modules[name] = {
    definition: definition
  };
};

require.register("./index.js", function (exports, module) {

/**
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/calc.js
 * http://caniuse.com/calc
 */

var supported

module.exports = function csscalc() {
  if (supported != null) return supported
  var el = document.createElement('div')
  el.style.cssText = 'width:-webkit-calc(10px);width:-moz-calc(10px);width:calc(10px);'
  supported = !!el.style.length
  document.documentElement.className += (supported ? '' : 'no-') + 'csscalc'
  return supported
}

})

require("./index.js");
