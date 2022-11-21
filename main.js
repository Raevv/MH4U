const menu = document.querySelector(".menu");
let isOpen = false;

function toggle_menu() {
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
