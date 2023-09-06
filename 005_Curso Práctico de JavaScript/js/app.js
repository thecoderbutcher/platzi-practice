const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const burgerIconMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const carMenu = document.querySelector('.navbar-shoppingcart');
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', function(){
    if(!aside.classList.contains('inactive'))
        aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
});

burgerIconMenu.addEventListener('click', function(){
    if(!aside.classList.contains('inactive'))
        aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive')
})

carMenu.addEventListener('click', function(){
    if(!mobileMenu.classList.contains('inactive') || !desktopMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }


    aside.classList.toggle('inactive')
});
cambion.add("");