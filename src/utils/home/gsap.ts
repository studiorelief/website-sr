import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Set up ResizeObserver
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentRect) {
      // Something has changed, refresh ScrollTrigger
      ScrollTrigger.refresh();
    }
  }
});

// Observe the body for size changes (replace with a specific element if needed)
resizeObserver.observe(document.body);

// Home Hero animation
function animateHero() {
  // Sélectionner les éléments
  const designerIcon = document.querySelector('.home-hero_designer-icon');
  const developerIcon = document.querySelector('.home-hero_developper-icon');

  // Points de déplacement pour designerIcon
  const designerPoints = [
    { x: 0, y: 0, duration: 0 },
    { x: -60, y: -50, duration: 0.5, ease: 'easeOut' },
    { x: 120, y: 100, duration: 1.5 },
    { x: 120, y: 100, duration: 1 },
    { x: -80, y: 300, duration: 1.5 },
    { x: -80, y: 300, duration: 0.5 },
    { x: 0, y: 0, duration: 1.5 }, // Retour au point de départ
  ];

  // Points de déplacement pour developerIcon
  const developerPoints = [
    { x: 0, y: 0, duration: 0 },
    { x: -100, y: -50, duration: 1, ease: 'easeOut' },
    { x: 50, y: -100, duration: 1 },
    { x: 0, y: 0, duration: 1 }, // Retour au point de départ
  ];

  // Créer la timeline pour designerIcon
  const tlDesigner = gsap.timeline({ repeat: -1 });
  designerPoints.forEach((point) => {
    tlDesigner.to(designerIcon, {
      x: point.x,
      y: point.y,
      duration: point.duration,
      ease: point.ease,
    });
  });

  // Créer la timeline pour developerIcon
  const tlDeveloper = gsap.timeline({ repeat: -1 });
  developerPoints.forEach((point) => {
    tlDeveloper.to(developerIcon, {
      x: point.x,
      y: point.y,
      duration: point.duration,
      ease: point.ease,
    });
  });
}

// Home Process animation
function animateProcess() {
  $('.section_home-process').each(function () {
    const targetElement = $('.home-process_step');
    const targetElement2 = $('.home-process_cards-illu-w');
    const targetElement3 = $('.home-process_cards');

    // Set initial opacity
    gsap.set(targetElement2, {
      x: 3,
      y: 3,
      boxShadow: '0px 0px 0 0 rgba(32, 32, 32, 0)',
    });
    // Set initial opacity
    gsap.set(targetElement3, {
      opacity: 0.25,
    });

    // Step highlights animation
    const tl = gsap.timeline({
      scrollTrigger: {
        markers: false,
        trigger: '.section_home-process',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: true,
      },
    });
    // Rotate animation with a duration of 0.5
    tl.to(targetElement, {
      rotation: 360,
      duration: 0.5,
      stagger: 0.25,
    });

    // Step highlights animation
    const tl2 = gsap.timeline({
      scrollTrigger: {
        markers: false,
        trigger: '.section_home-process',
        start: 'top 55%',
        end: 'bottom 80%',
        scrub: true,
      },
    });
    tl2.to(targetElement2, {
      x: 0,
      y: 0,
      boxShadow: '3px 3px 0 0 rgba(32, 32, 32, 1)',
      duration: 0.25,
      stagger: 0.25,
    });

    // cards highlights opacity animation
    const tl3 = gsap.timeline({
      scrollTrigger: {
        markers: false,
        trigger: '.section_home-process',
        start: 'top 55%',
        end: 'bottom 80%',
        scrub: true,
      },
    });
    tl3.to(targetElement3, {
      opacity: 1,
      duration: 0.125,
      stagger: 0.25,
    });
  });
}

export { animateHero, animateProcess };
