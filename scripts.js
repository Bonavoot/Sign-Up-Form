

let form = document.querySelector('form');
let password = form.getElementById('password').value;
let passwordConfirmation = form.getElementById('password-confirm').value;
let createAccountButton = form.getElementById('createAccount');
let error = form.getElementById('error');


createAccountButton.addEventListener('click', (e) => {

    if(password != passwordConfirmation) {
        e.preventDefault();
        error.removeAttribute('hidden');

    }
    error.removeAttribute('hidden');
});