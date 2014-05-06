
/**
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/calc.js
 * http://caniuse.com/calc
 */

module prefixes from "https://nlz.io/github/detects/prefixes.js/*/index.js"

var supported

export default function () {
  if (supported !== null) return supported
  var prop = 'width:'
  var value = 'calc(10px);'
  var el = document.createElement('div')
  var text = ''
  for (var i = 0; i < prefixes.length; i++) {
    text += prop + prefixes[i] + value
  }
  el.style.cssText = text
  supported = !!el.style.length
  document.documentElement.className += (supported ? '' : 'no-') + 'csscalc'
  return supported
}
