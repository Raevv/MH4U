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

inputs = document.querySelectorAll('input');
['focusin', 'focusout'].forEach(evt => addEventListener(evt, function activeState(event) {
    if (!event.target.value) {
        event.target.previousElementSibling.classList.toggle('focus');
    } else {
        event.target.previousElementSibling.classList.toggle('focus', true);
    }
}))