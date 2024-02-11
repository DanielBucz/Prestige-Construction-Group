document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".burger-btn");
  const nav = document.querySelector(".nav");
  const allNavsItems = document.querySelectorAll(".nav__item");
  const navBtnBars = document.querySelector('.burger-btn__bars');
  const allSections = document.querySelectorAll('.section');
  const footerYear = document.querySelector('.footer__year');

  const handleNav = () => {
    nav.classList.toggle("nav--active");

    navBtnBars.classList.remove('black-bars-color');
    allNavsItems.forEach((navItem) => {
      navItem.addEventListener("click", () => {
        nav.classList.remove('nav--active');
      });
    });
    handleNavItemsAnimation();
  };
  const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavsItems.forEach((navItem) => {
        navItem.classList.toggle('nav-items-animation');
        navItem.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
        console.log(delayTime);
         
    })
  };

  const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
  };
  const handleObserver = () => {
    const currentSection = window.scrollY;
    allSections.forEach(section => {
      if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 90) {
        navBtnBars.classList.add('orange-bars-color');
      } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 90) {
        navBtnBars.classList.remove('orange-bars-color');
      }
    })
  }
  handleCurrentYear();
  burgerBtn.addEventListener("click", handleNav);
  window.addEventListener('scroll', handleObserver);
});
