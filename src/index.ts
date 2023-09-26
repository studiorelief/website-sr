import './index.css';

/* import { initBg } from '$utils/bgGlobal'; */
import { fnContact } from '$utils/contact';
import { animateHero, animateProcess } from '$utils/home/gsap';
import { makeDraggable, triggerInte } from '$utils/home/hero';
import { reviewSwiper } from '$utils/home/swiper';
import { loadScript } from '$utils/loadScript';
import { scrollNav } from '$utils/navbar';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Load Finsweet Attributes scripts
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsstatic@1/cmsstatic.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-selectcustom@1/selectcustom.js'),
  ]);

  // Load contact jQuery
  fnContact();

  // Load reviewSwiper (→ on Home)
  reviewSwiper();

  // Load initBgRepeat (→ on Home)
  /* initBg(); */

  // Load scrollNav (→ on Home)
  scrollNav();

  // Load gsap scroll home (→ on Home)
  animateProcess();
  animateHero();

  // Load Draggable (→ on Home)
  triggerInte();
  makeDraggable();
});
