function toggle_menu() {
  const menu = document.querySelector(".menu");
  let isOpen = false; 
  if (!menu.classList.contains("is-open")) {
    isOpen = true;
    menu.classList.toggle("is-open", true);
    console.log("Opened");
  } else {
    isOpen = false;
    menu.classList.toggle("is-open", false);
    console.log("Closed");
  }
}

function activeState() {
  let elem = event.target;
  let prev = elem.previousElementSibling;
  if (!elem.value) {
    prev.classList.toggle("focus")
  } else {
    prev.classList.toggle("focus", true)
  }
}

function check() {
  const username = document.querySelector("[name='username']");
  const password = document.querySelector("[name='password']");
  const confPassword = document.querySelector("[name='confPassword']");
  
  if (password.value != confPassword.value) {
    console.log("different passwords");
  } else {
    console.log("same passwords");
  }
}
