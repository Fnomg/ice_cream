let navButton = document.querySelector('.header__nav-toggle')
let closed = navButton.querySelector('.closed')
let opened = navButton.querySelector('.opened')
let nav = document.querySelector('.nav')

navButton.addEventListener('click', function (){
  closed.classList.toggle('visually-hidden')
  opened.classList.toggle('visually-hidden')
  navButton.classList.toggle('opened')
  navButton.classList.toggle('closed')
})

nav.addEventListener('click', function (e){
  if (e.target.classList.contains('nav__link')) {
    nav.querySelector('.nav__link--active').classList.remove('nav__link--active')
    e.target.classList.add('nav__link--active')
  }
})

let product = document.querySelector('.product__nav')

product.addEventListener('click', function (e){
  if (e.target.classList.contains('product__link')) {
    product.querySelector('.product__link--active').classList.remove('product__link--active')
    e.target.classList.add('product__link--active')
  }
})

