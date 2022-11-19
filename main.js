const menu = document.querySelector(".menu_btn");
let count = 0;
let insultes = ["Salope", "Pute", "Chienne", "Ta mère c'est ton père", "T tout nul", "Si manette c'est pété viens manette et monte GM on va voir"]

function toggle_menu() {
  console.log(insultes[count]);
  count++;
  if (count == insultes.length) {
    count = 0;
  }
}
