function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var u=i("eWCmQ");const r={inputForm:document.querySelector(".form"),inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount" ]')};function l(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}r.inputForm.addEventListener("submit",(function(t){t.preventDefault();const n=Number(r.inputDelay.value),o=Number(r.inputStep.value),i=Number(r.inputAmount.value);if(n<0)return void e(u).Notify.info("Pleas input delay value from 0");if(o<0)return void e(u).Notify.info("Pleas input step value from 0");if(i<1)return void e(u).Notify.info("Pleas input amount value from 1");console.log("refs.inputForm.delay.textContent",n,o,i);for(let t=0;t<i;t+=1)l(t+1,t*o+n).then((({position:t,delay:n})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}));
//# sourceMappingURL=03-promises.e81cfab2.js.map