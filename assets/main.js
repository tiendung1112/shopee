const registerBtn = document.querySelector('.register');
const loginBtn = document.querySelector('.login')
const modal = document.querySelector('.modal');
const registerForm = document.querySelector('.register-form');
const loginForm = document.querySelector('.login-form');
const btnBack = document.querySelector('.auth-form__controls-back');


function showRegisterForm() {
    modal.classList.add('open');
    registerForm.classList.add('unlock');
}

function showLoginForm() {
    modal.classList.add('open');
    loginForm.classList.add('unlock');
}

function hideRegisterForm() {
    modal.classList.remove('open');
    registerForm.classList.remove('unlock');
}

function hideLoginForm() {
    modal.classList.remove('open');
    loginForm.classList.remove('unlock');
}

registerBtn.addEventListener('click', showRegisterForm)
modal.addEventListener('click', hideRegisterForm)

loginBtn.addEventListener('click', showLoginForm)
modal.addEventListener('click', hideLoginForm)

registerForm.addEventListener('click', function(event) {
    event.stopPropagation();
})

loginForm.addEventListener('click', function(event) {
    event.stopPropagation();
})