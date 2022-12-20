import Notiflix from 'notiflix';

const refs = {
  inputForm: document.querySelector('.form'),
};

refs.inputForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const delayValue = Number(event.currentTarget.delay.value);
  const stepValue = Number(event.currentTarget.step.value);
  const amountValue = Number(event.currentTarget.amount.value);
  if (delayValue < 0) {
    Notiflix.Notify.info('Pleas input delay value from 0');
    return;
  }
  if (stepValue < 0) {
    Notiflix.Notify.info('Pleas input step value from 0');
    return;
  }
  if (amountValue < 1) {
    Notiflix.Notify.info('Pleas input amount value from 1');
    return;
  }

  for (let i = 0; i < amountValue; i += 1) {
    createPromise(i + 1, i * stepValue + delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
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
