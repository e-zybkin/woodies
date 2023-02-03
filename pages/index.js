const anchors = document.querySelectorAll('a[href*="#"]');

const func = () => {
  console.log('здесь будет функция, открывающая меню а-ля бургер')
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
      //document.querySelector('.header__picture').style.left = '-50px';
      //document.querySelector('.header__picture').style.transform = 'rotate(-180deg)';
      document.querySelector('.header__picture').style.animation = 'moveStart 1s forwards, rotationStart 1s forwards';
      if (!document.querySelector('.header__picture').classList.contains('header__picture_type_burger')) {
        document.querySelector('.header__picture').addEventListener('click', func)
        document.querySelector('.header__picture').classList.add('header__picture_type_burger')
        document.querySelector('.header__picture_type_burger').addEventListener('mouseenter', scaleToFunc)
        document.querySelector('.header__picture_type_burger').addEventListener('mouseleave', scaleBackFunc)
      }
    } else {
      document.querySelector('.header__menu').style.top = '22px'
      //document.querySelector('.header__picture').style.left = '0';
      //document.querySelector('.header__picture').style.transform = 'rotate(-0deg)';
      document.querySelector('.header__picture').style.animation = 'moveEnd 0.65s forwards , rotationEnd 0.65s forwards';
      if (document.querySelector('.header__picture').classList.contains('header__picture_type_burger')) {
        document.querySelector('.header__picture').removeEventListener('click', func)
        document.querySelector('.header__picture_type_burger').removeEventListener('mouseenter', scaleToFunc)
        document.querySelector('.header__picture_type_burger').removeEventListener('mouseleave', scaleBackFunc)
        document.querySelector('.header__picture').classList.remove('header__picture_type_burger')
      }
    }
}


/*let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.querySelector('.header__menu').style.top = '-80px';
    document.querySelector('.header__picture').style.animation = 'moveStart 1s forwards, rotationStart 1s forwards';
    if (!document.querySelector('.header__picture').classList.contains('bMenu')) {
      document.querySelector('.header__picture').classList.add('bMenu');
      document.querySelector('.header__picture').addEventListener('click', func)
      document.querySelector('.header__picture').addEventListener('mouseenter', (e) => {
        e.target.style.transform = `${transform} scale(1.5)`
      })
      document.querySelector('.header__picture').addEventListener('mouseleave', (e) => {
        e.target.style.transform = 'scale(1)';
      })
    }
    //document.querySelector('.header__menu').style.opacity = '0'
  } else if (prevScrollpos == currentScrollPos) {
    document.querySelector('.header__menu').style.top = '22px'
    document.querySelector('.header__picture').style.animation = 'moveEnd 0.65s forwards , rotationEnd 0.65s forwards';
    //document.querySelector('.header__menu').style.opacity = '1'
    if (document.querySelector('.header__picture').classList.contains('bMenu')) {
      document.querySelector('.header__picture').classList.remove('bMenu')
      document.querySelector('.header__picture').removeEventListener('click', func)
      document.querySelector('.header__picture').removeEventListener('mouseenter', (e) => {
        e.target.style.transform = 'scale(1.5)';
      })
      document.querySelector('.header__picture').removeEventListener('mouseleave', (e) => {
        e.target.style.transform = 'scale(1)';
      })
    }
  }
  //prevScrollpos = currentScrollPos;
}*/
