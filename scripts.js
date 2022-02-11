

let button = document.querySelector('.createAccount').onclick = function(event) {
     let password = document.querySelector('#password').value;
     let confirmPassword = document.querySelector('#confirm-password').value;
     
     if (password != confirmPassword) {
        document.querySelector('.error').removeAttribute('hidden');
         event.preventDefault();
        }
        
}