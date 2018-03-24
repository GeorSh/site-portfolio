var hamburger = document.querySelector('.menu__item_hamburger');
var menu = document.querySelector('.menu');
console.log(hamburger);
console.log(menu.className);
hamburger.onclick = function(){
  if (menu.className == 'header__menu_adaptive'){
    alert('hello true');
    menu.classList.remove('header__menu_adaptive');
  } else {
    alert('hello false');
    menu.classList.add('header__menu_adaptive');
  }
}

var link = document.querySelector('.portfolio__link');
var pf = document.querySelector('.portfolio__items_size-b');

console.log(pf.className);

console.log(link);

link.onclick = function() {
  for (let i = 0; i < 3; i++){
    if (pf.className >= 'portfolio__item_hidden'){
      console.log('yes')
      pf.classList.remove('portfolio__item_hidden');
      link.classList.add('portfolio__link_hidden');
    }
  }
}

