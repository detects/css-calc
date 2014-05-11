
/**
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/calc.js
 * http://caniuse.com/calc
 */

var el = document.createElement('div')
el.style.cssText = 'width:-webkit-calc(10px);width:-moz-calc(10px);width:calc(10px);'
var supported = !!el.style.length
document.documentElement.className += (supported ? '' : 'no-') + 'csscalc'

export default supported
