!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var u=i("iU1Pc"),r={inputForm:document.querySelector(".form"),inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount" ]')};function a(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}r.inputForm.addEventListener("submit",(function(n){n.preventDefault();var t=Number(r.inputDelay.value),o=Number(r.inputStep.value),i=Number(r.inputAmount.value);if(t<0)return void e(u).Notify.info("Pleas input delay value from 0");if(o<0)return void e(u).Notify.info("Pleas input step value from 0");if(i<1)return void e(u).Notify.info("Pleas input delay value from 1");console.log("refs.inputForm.delay.textContent",t,o,i);for(var l=0;l<i;l+=1)a(l+1,l*o+t).then((function(n){var t=n.position,o=n.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(u).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.9a16b5e3.js.map
