import 'jqueryui';

function makeDraggable() {
  $('.home-hero_icon-hand').draggable();
  $('.home-hero_icon-hand-static').draggable();
  $('.home-hero_pin-w').draggable();
  $('.is-sticker').draggable();
}

function triggerInte() {
  let uiVisibleRatio = 0;
  let uxVisibleRatio = 0;

  const heroComponents = document.querySelectorAll('.home-hero_component, .home-hero_icon-hand');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const targetId = (entry.target as HTMLElement).id;

        if (targetId === 'ui') {
          uiVisibleRatio = entry.intersectionRatio;
        } else if (targetId === 'ux') {
          uxVisibleRatio = entry.intersectionRatio;
        }

        // Vérifier les conditions
        heroComponents.forEach((heroComponent: Element) => {
          if (uiVisibleRatio >= 0.5 || uxVisibleRatio >= 0.5) {
            heroComponent.classList.remove('no-pointer');
          } else {
            heroComponent.classList.add('no-pointer');
          }
        });
      });
    },
    {
      threshold: [0.5], // Seuil à 50%
    }
  );

  // Observe les éléments UI et UX
  observer.observe(document.querySelector('#ui') as HTMLElement);
  observer.observe(document.querySelector('#ux') as HTMLElement);
}

export { makeDraggable, triggerInte };
