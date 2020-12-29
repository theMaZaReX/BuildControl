const burgerBtn = document.getElementById('btn-burger');
const mobileMenu = document.getElementById('mobile-menu');
const btnCloseMenu = document.getElementById('btn-close-menu');
const overlay = document.getElementById('overlay');
const body = document.body;




const openMobileMenu = function(){
    mobileMenu.classList.add('menu-mobile--show');
    overlay.classList.add('overlay--show');
    body.style.overflow = 'hidden';
};

const closeMobileMenu = function(){
    mobileMenu.classList.remove('menu-mobile--show');
    overlay.classList.remove('overlay--show');
    body.style.overflow = 'visible';
};

burgerBtn.addEventListener('click', openMobileMenu);
btnCloseMenu.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);
document.addEventListener('keydown',function(event){
  if ((mobileMenu.classList.contains('menu-mobile--show')) && (event.code === 'Escape')){
    closeMobileMenu();
  }
})