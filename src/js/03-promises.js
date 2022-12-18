import Notiflix from "notiflix";
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

const refs = {
  inputForm: document.querySelector(".form"),
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount" ]'),
}





refs.inputForm.addEventListener('submit', onSubmit)

function onSubmit(event) {
  event.preventDefault();
  const delayValue = Number(refs.inputDelay.value);
const stepValue = Number(refs.inputStep.value);
const amountValue = Number(refs.inputAmount.value);
if(delayValue < 0){
  Notiflix.Notify.info("Pleas input delay value from 0");
   return;
};
if(stepValue < 0){
  Notiflix.Notify.info("Pleas input step value from 0");
   return;
};
if(amountValue < 1){
  Notiflix.Notify.info("Pleas input delay value from 1");
   return;
}
  console.log('refs.inputForm.delay.textContent',delayValue,stepValue,amountValue)
  for (let i = 0; i < amountValue; i += 1) {
    createPromise(i + 1, i * stepValue + delayValue)
    .then(({position, delay}) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({position, delay}) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}