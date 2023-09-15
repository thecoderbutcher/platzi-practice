const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carMenu = document.querySelector('.navbar-shoppingcart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector('.cards-container')

 

menuEmail.addEventListener('click', function(){
    if(!shoppingCartContainer.classList.contains('inactive'))
        shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
});

burgerIconMenu.addEventListener('click', function(){
    if(!shoppingCartContainer.classList.contains('inactive'))
        shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive')
})

carMenu.addEventListener('click', function(){
    if(!mobileMenu.classList.contains('inactive') || !desktopMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive')
});

const productList = [];
productList.push(
    {
        name: 'bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'pantalla',
        price: 220,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Computer',
        price: 220,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
)

for (product of productList){
    let content = `
        <div class="product-card">
            <img src=${product.image} alt="">
            <div class="product-info">
            <div>
                <p>$${product.price}</p>
                <p>${product.name}</p>
            </div>
            <figure>
                <img src="./assets/icons/bt_add_to_cart.svg" alt="">
            </figure>
            </div>
        </div> 
    `;
    cardContainer.insertAdjacentHTML('beforeend',content)
}
const productCard = document.querySelector('.product-card img');
const productDetail = document.querySelector('#productDetail');
const productDetailCloseBtn = document.querySelector('.product-detail-close')

productCard.addEventListener('click', function(){
    productDetail.classList.remove('inactive')
});

productDetailCloseBtn.addEventListener('click', ()=>{
    productDetail.classList.add('inactive')
})