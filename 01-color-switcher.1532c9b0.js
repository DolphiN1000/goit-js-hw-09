!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,b=Math.max,v=Math.min,y=function(){return d.Date.now()};function m(t,e,n){var r,i,u,f,a,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof t)throw new TypeError(o);function j(e){var n=r,o=i;return r=i=void 0,l=e,f=t.apply(o,n)}function h(t){return l=t,a=setTimeout(T,e),d?j(t):f}function O(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-l>=u}function T(){var t=y();if(O(t))return w(t);a=setTimeout(T,function(t){var n=e-(t-c);return s?v(n,u-(t-l)):n}(t))}function w(t){return a=void 0,m&&r?j(t):(r=i=void 0,f)}function M(){var t=y(),n=O(t);if(r=arguments,i=this,c=t,n){if(void 0===a)return h(c);if(s)return a=setTimeout(T,e),j(c)}return void 0===a&&(a=setTimeout(T,e)),f}return e=g(e)||0,p(n)&&(d=!!n.leading,u=(s="maxWait"in n)?b(g(n.maxWait)||0,e):u,m="trailing"in n?!!n.trailing:m),M.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},M.flush=function(){return void 0===a?f:w(y())},M}function p(t){var o=void 0===t?"undefined":e(n)(t);return!!t&&("object"==o||"function"==o)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(p(t)){var o="function"==typeof t.valueOf?t.valueOf():t;t=p(o)?o+"":o}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var c=u.test(t);return c||f.test(t)?a(t.slice(2),c?2:8):i.test(t)?NaN:+t}function j(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}console.log(document.body.style.backgroundColor);var h=document.querySelector("[data-start]"),O=document.querySelector("[data-stop]");console.log(h);var T=null;null===T&&O.setAttribute("disabled",!0),h.addEventListener("click",(function(){document.body.style.backgroundColor=j(),T=setInterval((function(){document.body.style.backgroundColor=j()}),1e3),h.setAttribute("disabled",!0),O.removeAttribute("disabled")})),O.addEventListener("click",(function(){clearInterval(T),h.removeAttribute("disabled"),O.setAttribute("disabled",!0)}))}();
//# sourceMappingURL=01-color-switcher.1532c9b0.js.map
