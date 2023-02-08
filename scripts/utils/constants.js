export const headerConfig = {
  openedMenu: 'header__picture_burger_opened',
  burgerMenu: 'header__picture_type_burger'
}

export const animationConfig = {
  scaleTo: 'moveStart 1s forwards, rotationStart 1s forwards, scaleStart 1s forwards',
  scaleBack: 'moveStart 1s forwards, rotationStart 1s forwards, scaleEnd 1s forwards',
  logoMove: 'moveStart 1s forwards, rotationStart 1s forwards',
  logoBack: 'moveEnd 0.65s forwards , rotationEnd 0.65s forwards'
}

export const headerSelector = document.querySelector('.header');
export const menuSelector = document.querySelector('.header__menu');
export const logoSelector = document.querySelector('.header__picture');
export const sections = document.querySelectorAll('.section');
export const menuItems = document.querySelectorAll('.header__nav-item');
export const anchors = document.querySelectorAll('a[href*="#"]');
