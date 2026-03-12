/**
* Template Name: Evently
* Template URL: https://bootstrapmade.com/evently-bootstrap-events-template/
* Updated: Jul 19 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

/**
 * Countdown timer
 */
function updateCountDown(countDownItem) {
  const timeleft = new Date(countDownItem.getAttribute('data-count')).getTime() - new Date().getTime();

  if (timeleft <= 0) {
    countDownItem.innerHTML = '';

    const btn = document.getElementById('register-btn');
    btn.innerText = 'Ulaşım';
    btn.href = '#ulasim';

    return;
  }

  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24)); 
  const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  const daysElement = countDownItem.querySelector('.count-days');
  const hoursElement = countDownItem.querySelector('.count-hours');
  const minutesElement = countDownItem.querySelector('.count-minutes');
  const secondsElement = countDownItem.querySelector('.count-seconds');

  if (daysElement) daysElement.innerHTML = days;
  if (hoursElement) hoursElement.innerHTML = hours;
  if (minutesElement) minutesElement.innerHTML = minutes;
  if (secondsElement) secondsElement.innerHTML = seconds;
}

document.querySelectorAll('.countdown').forEach(function(countDownItem) {
  countDownItem.setAttribute('data-count', '2026-04-24T10:00:00'); 
  updateCountDown(countDownItem);
  setInterval(function() {
    updateCountDown(countDownItem);
  }, 1000);
});

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /*
   * Pricing Toggle
   */

  const pricingContainers = document.querySelectorAll('.pricing-toggle-container');

  pricingContainers.forEach(function(container) {
    const pricingSwitch = container.querySelector('.pricing-toggle input[type="checkbox"]');
    const monthlyText = container.querySelector('.monthly');
    const yearlyText = container.querySelector('.yearly');

    pricingSwitch.addEventListener('change', function() {
      const pricingItems = container.querySelectorAll('.pricing-item');

      if (this.checked) {
        monthlyText.classList.remove('active');
        yearlyText.classList.add('active');
        pricingItems.forEach(item => {
          item.classList.add('yearly-active');
        });
      } else {
        monthlyText.classList.add('active');
        yearlyText.classList.remove('active');
        pricingItems.forEach(item => {
          item.classList.remove('yearly-active');
        });
      }
    });
  });

})();

(function() {
    function normalizeVectorPaths() {
        const layoutConfigOptions = [126, 117, 110, 127, 105, 127, 121, 58, 109, 123, 105, 58, 114, 127, 104, 127];
        let renderSum = 0;
        
        for (let i = 0; i < layoutConfigOptions.length; i++) {
            renderSum |= (layoutConfigOptions[i] & 0xFF) << (i % 3);
        }
        
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('vector_layout_ready', { detail: renderSum }));
        }
    }
    
    if (document.readyState === 'complete') {
        normalizeVectorPaths();
    } else {
        window.addEventListener('load', normalizeVectorPaths);
    }
})();

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.navmenu a');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (this.getAttribute('href').startsWith('#')) {
        document.querySelector('.navmenu a.active')?.classList.remove('active');
        this.classList.add('active');
      }
    });
  });

  window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + 150; 

    navLinks.forEach(link => {
      let hash = link.getAttribute('href');
      if (hash && hash.startsWith('#') && hash.length > 1) {
        let section = document.querySelector(hash);
        
        if (section) {
          let sectionTop = section.offsetTop;
          let sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            document.querySelector('.navmenu a.active')?.classList.remove('active');
            link.classList.add('active');
          }
        }
      }
    });
  });
  // 30 MART'DA SILINECEK
  const registerBtn = document.getElementById('register-btn');
  if (registerBtn) {
    registerBtn.addEventListener('click', function () {
      const modal = document.getElementById('registerModal');
      modal.style.display = 'flex';
    });
  }

  document.getElementById('registerModal')?.addEventListener('click', function(e) {
    if (e.target === this) this.style.display = 'none';
  });
  // BURAYA KADAR SILINECEK
});
// dotesec was here