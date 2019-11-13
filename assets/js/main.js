// Update prototype
Document.prototype.ready = fn => {
  if(fn && typeof fn === 'function') {
    document.addEventListener("DOMContentLoaded", () =>  {
      if(document.readyState === "interactive" || document.readyState === "complete") {
        return fn();
      }
    });
  }
};

/******* MENU ************/
let menu, burgerMenu;

// Add/Remove class is-open on menu
function toggleMenu() {
  menu.classList.toggle('is-open')
}

// Toggle menu on click
function initMenu() {
  burgerMenu = document.querySelector('.burger-menu');
  menu = document.querySelector('.menu');

  burgerMenu.addEventListener('click', toggleMenu);
};

// Init
document.ready( () => {
  initMenu();
})


