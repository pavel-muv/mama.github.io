let burger = document.querySelector('.header-burger');
let headerNav = document.querySelector('.header-nav');
let heroTitle = document.querySelector('.hero-cell');
let body = document.querySelector('body');
let headerItem = document.querySelectorAll('.header-nav__item')

burger.addEventListener('click', function(){
	this.classList.toggle('active');
	headerNav.classList.toggle('active');
	heroTitle.classList.toggle('active');
	body.classList.toggle('scroll')
})

headerItem.forEach(e => {
    e.addEventListener('click', function(){
        headerNav.classList.remove('active');
        burger.classList.remove('active');
        body.classList.remove('scroll');
        heroTitle.classList.remove('active');
    })
})

let accordeonItem = document.querySelectorAll('.qa-item');
let accordenBtn = document.querySelectorAll('.qa-item__btn');
let accordeonContent = document.querySelectorAll('.qa__answer');

for(let i=0; i< accordeonItem.length; i++) {
    accordeonItem[i].addEventListener('click', function(){
        console.log('111')
        accordenBtn[i].classList.toggle('active');
        accordeonContent[i].classList.toggle('active');
    })
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}