const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const navMenu = document.querySelector('.nav__menu');
const siteContent = document.getElementById('siteContent');

openMenu.addEventListener('click', () => {
    openMenu.style.display = 'none';
    closeMenu.style.display = 'inline-block';
    navMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    closeMenu.style.display = 'none';
    openMenu.style.display = 'inline-block';
    navMenu.classList.toggle('active');
});
window.onscroll = () => {
    openMenu.style.display = null;
    closeMenu.classList.display = null;
    navMenu.classList.remove("active");
}


