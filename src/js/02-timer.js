import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

let startTime = 0;
let deltaTime = 0;

const refs = {
  dataInput : document.querySelector("#datetime-picker") ,
  startBtn : document.querySelector("[data-start]"),
days : document.querySelector("[data-days]"),
hours : document.querySelector("[data-hours]"),
minutes : document.querySelector("[data-minutes]"),
seconds : document.querySelector("[data-seconds]"),
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      startTime = selectedDates[0].getTime();
      if (startTime < Date.now()) {
        Notiflix.Notify.info("Please choose a date in the future");
        return;
      }
      refs.startBtn.removeAttribute("disabled");
     
    },
  };

  flatpickr("input#datetime-picker", options);
console.dir(flatpickr)
refs.startBtn.setAttribute("disabled", true);
refs.startBtn.addEventListener('click', startTimer);

function startTimer() {
  refs.dataInput.setAttribute("disabled", true);
  refs.startBtn.setAttribute("disabled", true);
  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    deltaTime = startTime - currentTime;
    if (deltaTime < 0) {
      clearInterval(intervalId);
      refs.dataInput.removeAttribute("disabled");
      return;
    }
    const time = convertMs(deltaTime);
    console.log(time);
    refs.days.textContent = pad(time.days);
    refs.hours.textContent = pad(time.hours);
    refs.minutes.textContent = pad(time.minutes);
    refs.seconds.textContent = pad(time.seconds);

    if (time.days <= 0 && time.hours <= 0 && time.minutes <= 0 && time.seconds <= 0) {
      Notiflix.Notify.info('END')
      clearInterval(intervalId);
      refs.dataInput.removeAttribute("disabled");
    
    return;
    }

    }, 1000);
}

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  function pad(value) {
    return String(value).padStart(2, '0');
  };





// refs.startBtn.addEventListener('click', console.log(refs.dataInput.elements.input.value))
