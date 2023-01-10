window.onload = focusEvent();
window.onscroll = function () {
    topBtn();
    arrow();
}

function focusEvent() {
    if (document.body.classList.contains('register-page')) {
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
root.addEventListener('click', e => console.log('width : ' + window.innerWidth, '\n', 'height : ' + window.innerHeight));

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

let topBtnUsed = false;

function topBtn() {
    const btn = document.querySelector('.top-btn');
    if (document.body.scrollTop > 100 & topBtnUsed == false || document.documentElement.scrollTop > 100 & topBtnUsed == false) {
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
    } else {
        btn.style.opacity = '0';
        btn.style.pointerEvents = 'none';
    }
}

function goToTop() {
    document.documentElement.scrollTop = 0;
    const btn = document.querySelector('.top-btn');
    btn.classList.toggle('top-btn-anim', true);
    topBtnUsed = true;
    setTimeout(() => {
        btn.classList.toggle('top-btn-anim', false);
        topBtnUsed = false;
    }, 500);
}

// let arrowHovered = false;

function scrollPreview() {
        const htmlElement = document.querySelector('html');
        htmlElement.style.scrollSnapType = 'none';
        document.documentElement.scrollTop = 200;
        downArrow.style.pointerEvents = 'auto';
        downArrow.style.opacity = '0';
        setTimeout(() => {
            htmlElement.style.scrollSnapType = 'y mandatory';
            document.documentElement.scrollTop = 0;
            downArrow.style.opacity = '1';
        }, 750);
}

function arrow() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        downArrow.style.opacity = '0';
    } else {
        downArrow.style.opacity = '1';
    }

    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        downArrow.style.pointerEvents = 'none';
    } else {
        downArrow.style.pointerEvents = 'auto';
    }2
}

const downArrow = document.querySelector('.arrow');
downArrow.addEventListener('mouseenter', scrollPreview);