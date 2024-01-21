document.addEventListener("DOMContentLoaded", function () {
    const burgerBtn = document.querySelector(".burger-btn");
    const nav = document.querySelector(".nav");
    const allNavsItems = document.querySelectorAll(".nav__item");

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
      burgerBtn.addEventListener("click", handleNav);
})