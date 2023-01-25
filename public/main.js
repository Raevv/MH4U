
window.onscroll = function () {
    topBtn();
    arrow();
}

if (document.body.classList.contains('index')) {
    const downArrow = document.querySelector('.arrow');
    downArrow.addEventListener('mouseenter', scrollPreview);

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
        }, 333);
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
        }
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
}

if (document.body.classList.contains('register-page')) {
    window.onload = focusEvent();

    function focusEvent() {
        if (document.body.classList.contains('register-page')) {
            const confPass = document.querySelector('.conf-pass');
            ['focusin', 'focusout'].forEach(evt => addEventListener(evt, function activeState(event) {
                if (!event.target.value) {
                    event.target.previousElementSibling.classList.toggle('move');
                    event.target.classList.toggle('focus');
                } else if (event.target.value && !confPass.classList.contains('wrong')) {
                    event.target.previousElementSibling.classList.toggle('move', true);
                    event.target.classList.toggle('focus', true);
                }
            }))        
        }
    }

    function resetForm() {
        let inputs = document.querySelectorAll('input');
        let labels = document.querySelectorAll('label');
        const warning = document.querySelector('.warning');
        inputs.forEach(input => {
            input.value = '';
            input.classList.remove('wrong', 'focus');
        });
        labels.forEach(label => label.classList.remove('move'));
        warning.classList.remove('show');
        warning.nextElementSibling.classList.remove('show');
    }
    
    function goToLogin() {
        const logIn = document.querySelector('.log-in-form');
        const signUp = document.querySelector('.register-form');
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
        const signUp = document.querySelector('.register-form');
            if (!signUp.classList.contains('form-display-visible')) {
                signUp.classList.add('form-display-visible');
                signUp.classList.remove('.form-display-none');
                logIn.classList.add('form-display-none');
                logIn.classList.remove('form-display-visible');
            }
        resetForm();
    }

    function checkPassword() {
        const pass = document.querySelector('.register-form .pass');
        const confPass = document.querySelector('.conf-pass');
        const form = document.querySelector('.register-form');
        const errorText = document.querySelector('.register-form span');
        const warning = document.querySelector('.warning');
        if (form.classList.contains('form-display-visible') && pass.value !== confPass.value && confPass.value) {
            confPass.classList.toggle('wrong', true);
            confPass.classList.toggle('focus', false);
            errorText.classList.toggle('show', true);
            warning.classList.toggle('show', true);
        } else {
            confPass.classList.toggle('wrong', false);
            confPass.classList.toggle('focus', true);
            errorText.classList.toggle('show', false);
            warning.classList.toggle('show', false);
        }
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

if (document.body.classList.contains('test')) {
    const slider = document.querySelector('.slider');
    var mouseDown = false;
    function holdClick() {
        if (!mouseDown) {
            mouseDown = true;
            let myInterval = setInterval(test, 100);
        } 
    }

    function releaseClick() {
        if (mouseDown) {
            mouseDown = false;
        }
    }

    function test() {
        slider.style.setProperty('--step', 392 / 22 * slider.value + "px");
    }

}