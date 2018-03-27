var hamburger = document.querySelector('.menu__item_hamburger');
var menu = document.querySelector('.menu');

hamburger.addEventListener('click', function(){
  if (menu.classList.contains('header__menu_adaptive')){
    menu.classList.remove('header__menu_adaptive');
    menu.classList.add('header__menu');
  } else {
    menu.classList.add('header__menu_adaptive');
    menu.classList.remove('header__menu');
  }
})

var link = document.querySelector('.portfolio__link');
var pf = document.querySelectorAll('.portfolio__item_size-b');

link.addEventListener('click', function(event){
  event.preventDefault();
  if(pf[pf.length - 1].classList.contains('portfolio__item_hidden')){
    link.innerHTML = 'hide';
    for(let i = 0; i < pf.length; i++){
      pf[i].classList.remove('portfolio__item_hidden');
    }
  }else{
    for(let j = pf.length - 1; j > 1; j--){
      pf[j].classList.add('portfolio__item_hidden');
    }
    link.innerHTML = 'show more';
  }
});



