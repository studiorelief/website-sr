// src/index.ts
import './index.css';

import { initBgRepeat } from '$utils/bgGlobal';
import { greetUser } from '$utils/greet';
import { loadScript } from '$utils/loadScript';
import { reviewSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'SR Dev';
  greetUser(name);

  // Load Finsweet Attributes scripts
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsstatic@1/cmsstatic.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js'),
  ]);

  // Load reviewSwiper (→ on Home)
  reviewSwiper();

  // Load initBgRepeat (→ on Home)
  initBgRepeat();
});
