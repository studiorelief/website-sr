import 'jqueryui';

function makeDraggable() {
  $('.home-hero_icon-hand').draggable();
  $('.home-hero_icon-hand-static').draggable();
  $('.home-hero_pin-w').draggable();
}

function triggerInte() {
  let uiVisibleRatio = 0;

  const heroComponents = document.querySelectorAll('.home-hero_component, .home-hero_icon-hand');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const targetId = (entry.target as HTMLElement).id;

        if (targetId === 'ui') {
          uiVisibleRatio = entry.intersectionRatio;
        }

        // Vérifier les conditions
        heroComponents.forEach((heroComponent: Element) => {
          if (uiVisibleRatio > 0.1) {
            heroComponent.classList.remove('no-pointer');
          } else if (uiVisibleRatio <= 0.1) {
            heroComponent.classList.add('no-pointer');
          }
        });
      });
    },
    {
      threshold: [0, 0.5, 1],
    }
  );

  // Observe the UI element
  observer.observe(document.querySelector('#ui') as HTMLElement);
}

export { makeDraggable, triggerInte };
