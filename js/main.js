let cart = document.querySelector('.header_right');
let cartText = document.querySelector('.cart-text')


cart.addEventListener('mouseover', () => {
    cartText.style.opacity = 1
    cartText.style.transition = 'all .8s'
})

cart.addEventListener('mouseout', () => {
    cartText.style.opacity = 0
    cartText.style.transition = 'all .1s'
})