import throttle from "lodash.throttle";

const EMAIL_MESSAGE_KEY = 'feedback-form-text';
// let EmailKay = JSON.parse(localStorage.getItem(EMAIL_KEY));

const refs = {
    inputForm: document.querySelector(".feedback-form")
    ,
}
// const { email, message} = refs.inputForm;

function onInput (event) {
    event.preventDefault();
    const email = refs.inputForm.elements.email.value;
    const message = refs.inputForm.elements.message.value;
    localStorage.setItem(EMAIL_MESSAGE_KEY, JSON.stringify({message, email}));
}

function toOutput (event) {
    event.preventDefault();
    const outputText = localStorage.getItem(EMAIL_MESSAGE_KEY);
const outputObject = JSON.parse(outputText) || {email:"", message:""};
const { email, message } = outputObject;
refs.inputForm.elements.email.value = email;
refs.inputForm.elements.message.value = message;
}


function onSubmit(event) {
    event.preventDefault();
    const {
        elements: {email, message},
     } = event.currentTarget;
    
     
      if (email.value === ""){
        return alert("Input 'email' !!!")};
        if (message.value === ""){
        return alert("Input 'message' !!!")};
console.log({email:email.value, message:message.value})
localStorage.clear();
refs.inputForm.reset();
}

refs.inputForm.addEventListener('input', throttle(onInput), 500);
refs.inputForm.addEventListener('submit', onSubmit);
window.addEventListener('load', toOutput);

// let MESSAGE_KEY = JSON.parse(localStorage.getItem(MESSAGE_KEY));
// let MESSAGE_KEY;
// console.log(refs.inputForm.email.value);
// throttle(console.log(email.value), 1000)
// console.log(message.value);



// email.addEventListener("submit", (event) => {    
//         event.value === localStorage.getItem(EMAIL_KEY) 
//           ? console.log("emeil OK", event.value)
//           : localStorage.setItem(EMAIL_KEY, JSON.stringify(EMAIL_KEY));
        
//     })

// console.log(EMAIL_KEY)


// const feadBackForm = document.querySelector('.feedback-form');
// console.log(feadBackForm)


// feadBackForm.addEventListener("input", handleInput);
// let EMAIL_KEY;
// let MESSAGE_KEY;
// function handleInput (event) {
//     event.preventDefault();
//     const {
//         elements: { email, message } = event.currentTarget;
//         If ((email.value === localStorage.getItem(EMAIL_KEY))) && ((message.value === localStorage.getItem(EMAIL_KEY))) {

//         }
//     }
// }