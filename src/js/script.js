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