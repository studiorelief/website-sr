import 'jqueryui';

function makeDraggable() {
  $('.home-hero_icon-hand').draggable();
  $('.home-hero_pin-w').draggable();
}

function triggerInte() {
  let wireframeVisible = false;
  let uiVisibleRatio = 0;

  const heroComponents = document.querySelectorAll('.home-hero_component, .home-hero_icon-hand');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const targetId = (entry.target as HTMLElement).id;

        if (targetId === 'wireframe') {
          wireframeVisible = entry.intersectionRatio > 0;
        } else if (targetId === 'ui') {
          uiVisibleRatio = entry.intersectionRatio;
        }

        // Vérifier les conditions
        heroComponents.forEach((heroComponent: Element) => {
          if (wireframeVisible || uiVisibleRatio > 0.5) {
            heroComponent.classList.remove('no-pointer');
          } else if (!wireframeVisible && uiVisibleRatio <= 0.5) {
            heroComponent.classList.add('no-pointer');
          }
        });
      });
    },
    {
      threshold: [0, 0.5, 1],
    }
  );

  // Observe multiple elements
  observer.observe(document.querySelector('#wireframe') as HTMLElement);
  observer.observe(document.querySelector('#ui') as HTMLElement);
}

export { makeDraggable, triggerInte };
