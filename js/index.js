const mobileMenu = document.getElementById("mobile-menu");
const menuButton = document.getElementById("menuButton");

function openClose(){
   mobileMenu.style.display = mobileMenu.style.display == "block"?"none":"block"; 
   menuButton.innerHTML = menuButton.innerHTML == "Open"?"Close":"Open";
}