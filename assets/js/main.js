/**
 * Template Name: Impact
 * Updated: Jul 27 2023 with Bootstrap v5.3.1
 * Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  // // event read more
  // document.addEventListener("DOMContentLoaded", function () {
  //   const readMoreLink = document.querySelector("#readmore");
  //   const additionalParagraph = document.querySelector("#additional-paragraph");

  //   readMoreLink.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     additionalParagraph.classList.toggle("show");
  //   });
  // });

  /**
   * Sticky Header on Scroll
   */
  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;

    const headerFixed = () => {
      const active = hamburger.classList.contains("active");
      if (!active) {
        if (headerOffset - window.scrollY <= -750) {
          selectHeader.classList.add("sticked");
          if (nextElement) nextElement.classList.add("sticked-header-offset");
        } else {
          selectHeader.classList.remove("sticked");
          if (nextElement) nextElement.classList.remove("sticked-header-offset");
        }
      }else{
        selectHeader.classList.add("sticked");
        if (nextElement) nextElement.classList.add("sticked-header-offset");
      }
    };
    window.addEventListener("load", headerFixed);
    document.addEventListener("scroll", headerFixed);
  }

  /**
   * Navbar links active state on scroll
   */
  // let navbarlinks = document.querySelectorAll("#navbar a");

  // function navbarlinksActive() {
  //   navbarlinks.forEach((navbarlink) => {
  //     if (!navbarlink.hash) return;

  //     let section = document.querySelector(navbarlink.hash);
  //     if (!section) return;

  //     let position = window.scrollY + 200;

  //     if (
  //       position >= section.offsetTop &&
  //       position <= section.offsetTop + section.offsetHeight
  //     ) {
  //       navbarlink.classList.add("active");
  //     } else {
  //       navbarlink.classList.remove("active");
  //     }
  //   });
  // }
  // window.addEventListener("load", navbarlinksActive);
  // document.addEventListener("scroll", navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  // const mobileNavShow = document.querySelector(".mobile-nav-show");
  // const mobileNavHide = document.querySelector(".mobile-nav-hide");

  // document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
  //   el.addEventListener("click", function (event) {
  //     event.preventDefault();
  //     mobileNavToogle();
  //   });
  // });

  // function mobileNavToogle() {
  //   document.querySelector("body").classList.toggle("mobile-nav-active");
  //   mobileNavShow.classList.toggle("d-none");
  //   mobileNavHide.classList.toggle("d-none");
  // }

  /**
   * Hide mobile nav on same-page/hash links
   */
  // document.querySelectorAll("#navbar a").forEach((navbarlink) => {
  //   if (!navbarlink.hash) return;

  //   let section = document.querySelector(navbarlink.hash);
  //   if (!section) return;

  //   navbarlink.addEventListener("click", () => {
  //     if (document.querySelector(".mobile-nav-active")) {
  //       mobileNavToogle();
  //     }
  //   });
  // });

    const hamburger = document.querySelector(".hamburger");
    const navigation = document.querySelector(".nav-list");
  
    hamburger.addEventListener("click", function () {
      console.log('hamurger clicked');
      hamburger.classList.toggle("active");
      navigation.classList.toggle("active");
    });
  
  /**
   * Toggle mobile nav dropdowns
   */
  // const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  // navDropdowns.forEach((el) => {
  //   el.addEventListener("click", function (event) {
  //     if (document.querySelector(".mobile-nav-active")) {
  //       event.preventDefault();
  //       this.classList.toggle("active");
  //       this.nextElementSibling.classList.toggle("dropdown-active");

  //       let dropDownIndicator = this.querySelector(".dropdown-indicator");
  //       dropDownIndicator.classList.toggle("bi-chevron-up");
  //       dropDownIndicator.classList.toggle("bi-chevron-down");
  //     }
  //   });
  // });

  /**
   * Initiate glightbox
   */
  // const glightbox = GLightbox({
  //   selector: ".glightbox",
  // });

  /**
   * Scroll top button
   */

  const scrollTop = document.querySelector(".scroll-top");

  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };

    // scrollTop.addEventListener("click", function () {
    //   // Redirect to a different link when the button is clicked
    //   window.location.href = "https://www.google.com"; // Replace with your desired URL
    // });

    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
  }

  // const scrollTop = document.querySelector(".scroll-top");
  // if (scrollTop) {
  //   const togglescrollTop = function () {
  //     window.scrollY > 100
  //       ? scrollTop.classList.add("active")
  //       : scrollTop.classList.remove("active");
  //   };
  //   // document.addEventListener('scroll', togglescrollTop);
  //   // scrollTop.addEventListener('click', window.scrollTo({
  //     //   top: 0,
  //     //   behavior: 'smooth'
  //     // }));
  //     scrollTop.addEventListener("click", function () {
  //       // Redirect to a different link when the button is clicked
  //       window.location.href = "https://www.google.com"; // Replace 'https://example.com/your-link' with the desired URL
  //     });

  //     window.addEventListener("load", togglescrollTop);
  // }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Clients Slider
   */
  new Swiper(".clients-slider", {
    speed: 1000, // Adjust the speed here (e.g., 100 for very fast)
    loop: true, // Enable continuous loop
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120,
      },
    },
  });
  

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  // new Swiper(".slides-1", {
  //   speed: 600,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   },
  //   slidesPerView: "auto",
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "bullets",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });

  // /**
  //  * Init swiper slider with 3 slides at once in desktop view
  //  */
  // new Swiper(".slides-3", {
  //   speed: 600,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   },
  //   slidesPerView: "auto",
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "bullets",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 40,
  //     },

  //     1200: {
  //       slidesPerView: 3,
  //     },
  //   },
  // });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector(".portfolio-isotope");

  if (portfolionIsotope) {
    let portfolioFilter = portfolionIsotope.getAttribute(
      "data-portfolio-filter"
    )
      ? portfolionIsotope.getAttribute("data-portfolio-filter")
      : "*";
    let portfolioLayout = portfolionIsotope.getAttribute(
      "data-portfolio-layout"
    )
      ? portfolionIsotope.getAttribute("data-portfolio-layout")
      : "masonry";
    let portfolioSort = portfolionIsotope.getAttribute("data-portfolio-sort")
      ? portfolionIsotope.getAttribute("data-portfolio-sort")
      : "original-order";

    window.addEventListener("load", () => {
      let portfolioIsotope = new Isotope(
        document.querySelector(".portfolio-container"),
        {
          itemSelector: ".portfolio-item",
          layoutMode: portfolioLayout,
          filter: portfolioFilter,
          sortBy: portfolioSort,
        }
      );

      let menuFilters = document.querySelectorAll(
        ".portfolio-isotope .portfolio-flters li"
      );
      menuFilters.forEach(function (el) {
        el.addEventListener(
          "click",
          function () {
            document
              .querySelector(
                ".portfolio-isotope .portfolio-flters .filter-active"
              )
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            portfolioIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aos_init === "function") {
              aos_init();
            }
          },
          false
        );
      });
    });
  }

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
});
