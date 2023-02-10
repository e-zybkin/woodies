import './index.css';

import {headerConfig} from '../scripts/utils/constants.js';
import {animationConfig} from '../scripts/utils/constants.js';
import {
  headerSelector,
  menuSelector,
  logoSelector,
  sections,
  menuItems,
  anchors
} from '../scripts/utils/constants.js'

const func = (e) => {
  if(!e.target.classList.contains(headerConfig.openedMenu)) {
    e.target.classList.add(headerConfig.openedMenu)
    menuSelector.style.top = '22px';
    headerSelector.style.width = '1152px'
    headerSelector.style.backdropFilter = 'blur(5px)';
  } else {
    e.target.classList.remove(headerConfig.openedMenu)
    menuSelector.style.top = '-80px';
    headerSelector.style.width = ''
    headerSelector.style.backdropFilter = '';
  }
}

const scaleToFunc = (e) => {
  e.target.style.animation = animationConfig.scaleTo;
}

const scaleBackFunc = (e) => {
  e.target.style.animation = animationConfig.scaleBack;
}

const logoToButton = () => {
  logoSelector.classList.add(headerConfig.burgerMenu)
  logoSelector.addEventListener('click', func)
  logoSelector.addEventListener('mouseenter', scaleToFunc)
  logoSelector.addEventListener('mouseleave', scaleBackFunc)
}

const buttonToLogo = () => {
  logoSelector.removeEventListener('click', func)
  logoSelector.removeEventListener('mouseenter', scaleToFunc)
  logoSelector.removeEventListener('mouseleave', scaleBackFunc)
  logoSelector.classList.remove(headerConfig.burgerMenu)
}

function bringmenu() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    menuSelector.style.top = '-80px';
    logoSelector.style.animation = animationConfig.logoMove;
    if (!logoSelector.classList.contains(headerConfig.burgerMenu)) {
      logoToButton();
    }
    if(logoSelector.classList.contains(headerConfig.openedMenu)) {
      logoSelector.classList.remove(headerConfig.openedMenu)
      headerSelector.style.backdropFilter = '';
    }
  } else {
    menuSelector.style.top = '22px'
    logoSelector.style.animation = animationConfig.logoBack;
    if (logoSelector.classList.contains(headerConfig.burgerMenu)) {
      buttonToLogo();
    }
  }
}

function isInViewport(item) {
  const top = item.offsetTop;
  const bottom = top + item.offsetHeight;
  const viewportTop = window.scrollY;
  const viewportBottom = viewportTop + window.innerHeight;

  return top <= viewportBottom && bottom >= viewportTop;
};

function toggleActiveClass() {
  let currentSection = null;

  sections.forEach((section, i) => {
    if (isInViewport(section)) {
      if (currentSection == null) {
        currentSection = i;
      }
    }
  });

  menuItems.forEach((item) => {
    item.classList.remove('header__nav-item_active');
  });

  if (currentSection !== null) {
    menuItems[currentSection].classList.add('header__nav-item_active');
  }
};

for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

window.addEventListener('scroll', () => {
  bringmenu();
  toggleActiveClass();
});
