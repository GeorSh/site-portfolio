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

var links = document.querySelectorAll('.portfolio__link');
var pf = document.querySelectorAll('.portfolio__item_size-b');

var show = links[0];
var hide = links[1];

show.addEventListener('click', function(event){
  event.preventDefault();
  for(let i = 0; i < pf.length; i++){
    if (pf[i].classList.contains('portfolio__item_hidden')){
      pf[i].classList.remove('portfolio__item_hidden');
    }
  }
  show.classList.add('portfolio__link_hidden');
  hide.classList.remove('portfolio__link_hidden');
});

hide.addEventListener('click', function(event){
  event.preventDefault();
  console.log(pf.length - 1);
  for(let j = pf.length - 1; j > 1; j--){
    if (!pf[j].classList.contains('portfolio__item_hidden')){
      pf[j].classList.add('portfolio__item_hidden');
    }
  }
  hide.classList.add('portfolio__link_hidden');
  show.classList.remove('portfolio__link_hidden');
});


