window.onload = focusEvent();

function focusEvent() {
    const body = document.querySelector('body');
    if (body.classList.contains('register-page')) {
        ['focusin', 'focusout'].forEach(evt => addEventListener(evt, function activeState(event) {
            if (!event.target.value) {
                event.target.previousElementSibling.classList.toggle('focus');
            } else {
                event.target.previousElementSibling.classList.toggle('focus', true);
            }
        }))        
    }
}

let root = document.documentElement;
root.addEventListener('click', e => console.log(window.innerWidth))

function open_menu() {
    const menu = document.querySelector('.menu');
    const anchors = document.querySelectorAll('a');
    let isOpen = false;

        if (!menu.classList.contains('open-menu')) {
            isOpen = true;
            menu.classList.toggle('open-menu', true);
            console.log('Menu opened');
            anchors.forEach(link => link.classList.toggle('show-text', true));
        } else {
            isOpen = false;
            menu.classList.toggle('open-menu', false);
            console.log('Menu closed');
            anchors.forEach(link => link.classList.toggle('show-text', false));
        }
}

function resetForm() {
    let inputs = document.querySelectorAll('input');
    let labels = document.querySelectorAll('label');
    inputs.forEach(input => input.value = '');
    labels.forEach(label => label.classList.remove('focus'));
}

function goToLogin() {
    const logIn = document.querySelector('.log-in-form');
    const signUp = document.querySelector('.sign-up-form');
        if (!logIn.classList.contains('form-display-visible')) {
            logIn.classList.add('form-display-visible');
            logIn.classList.remove('.form-display-none');
            signUp.classList.add('form-display-none');
            signUp.classList.remove('form-display-visible');
        }
    resetForm();
}

function goToSignUp() {
    const logIn = document.querySelector('.log-in-form');
    const signUp = document.querySelector('.sign-up-form');
        if (!signUp.classList.contains('form-display-visible')) {
            signUp.classList.add('form-display-visible');
            signUp.classList.remove('.form-display-none');
            logIn.classList.add('form-display-none');
            logIn.classList.remove('form-display-visible');
        }
        resetForm();
    }