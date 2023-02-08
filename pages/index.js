const anchors = document.querySelectorAll('a[href*="#"]');

const func = (e) => {
  if(!e.target.classList.contains('header__picture_burger_opened')) {
    e.target.classList.add('header__picture_burger_opened')
    document.querySelector('.header__menu').style.top = '22px';
    document.querySelector('.header').style.width = '1152px'
    document.querySelector('.header').style.backdropFilter = 'blur(5px)';
  } else {
    e.target.classList.remove('header__picture_burger_opened')
    document.querySelector('.header__menu').style.top = '-80px';
    document.querySelector('.header').style.width = ''
    document.querySelector('.header').style.backdropFilter = '';
  }
}

const scaleToFunc = (e) => {
  e.target.style.animation = 'moveStart 1s forwards, rotationStart 1s forwards, scaleStart 1s forwards'
}

const scaleBackFunc = (e) => {
  e.target.style.animation = 'moveStart 1s forwards, rotationStart 1s forwards, scaleEnd 1s forwards'
}

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

window.addEventListener("scroll", bringmenu);

function bringmenu() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.querySelector('.header__menu').style.top = '-80px';
      document.querySelector('.header__picture').style.animation = 'moveStart 1s forwards, rotationStart 1s forwards';
      if (!document.querySelector('.header__picture').classList.contains('header__picture_type_burger')) {
        document.querySelector('.header__picture').addEventListener('click', func)
        document.querySelector('.header__picture').classList.add('header__picture_type_burger')
        document.querySelector('.header__picture_type_burger').addEventListener('mouseenter', scaleToFunc)
        document.querySelector('.header__picture_type_burger').addEventListener('mouseleave', scaleBackFunc)
      }
      if(document.querySelector('.header__picture').classList.contains('header__picture_burger_opened')) {
        document.querySelector('.header__picture').classList.remove('header__picture_burger_opened')
        document.querySelector('.header').style.backdropFilter = '';
      }
    } else {
      document.querySelector('.header__menu').style.top = '22px'
      document.querySelector('.header__picture').style.animation = 'moveEnd 0.65s forwards , rotationEnd 0.65s forwards';
      if (document.querySelector('.header__picture').classList.contains('header__picture_type_burger')) {
        document.querySelector('.header__picture').removeEventListener('click', func)
        document.querySelector('.header__picture_type_burger').removeEventListener('mouseenter', scaleToFunc)
        document.querySelector('.header__picture_type_burger').removeEventListener('mouseleave', scaleBackFunc)
        document.querySelector('.header__picture').classList.remove('header__picture_type_burger')
      }
    }
}

const sections = document.querySelectorAll('.section');
const menuItems = document.querySelectorAll('.header__nav-item');

const isInViewport = function (element) {
  const top = element.offsetTop;
  const bottom = top + element.offsetHeight;
  const viewportTop = window.scrollY;
  const viewportBottom = viewportTop + window.innerHeight;

  return top <= viewportBottom && bottom >= viewportTop;
};

const toggleActiveClass = function () {
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

window.addEventListener('scroll', toggleActiveClass);
