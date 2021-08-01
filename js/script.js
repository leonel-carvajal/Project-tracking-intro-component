const Menu = document.querySelector('.header__menu')
const IconMenu = document.querySelector('.header__IconMenu')

const MenuChange = ()=>{
  if(!Menu.classList.contains('active')){
    Menu.classList.add('active')
    IconMenu.setAttribute('src','images/icon-close.svg')
  }else{
    Menu.classList.remove('active')
    IconMenu.setAttribute('src','images/icon-hamburger.svg')
  }
}

IconMenu.addEventListener('click',MenuChange)