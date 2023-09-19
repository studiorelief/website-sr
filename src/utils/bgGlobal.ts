// V2 - TypeScript avec optimisations
function repeatImageY(imageClass: string) {
  const container = document.querySelector('.section_background') as HTMLElement | null;
  const img = document.querySelector(imageClass) as HTMLImageElement | null;

  if (!container || !img) return;

  const imgHeight = img.clientHeight;
  const copiesNeeded = Math.ceil(container.clientHeight / imgHeight) - 1;

  const existingClones = document.querySelectorAll(`${imageClass}.cloned`);
  const existingCloneCount = existingClones.length;

  // Utilisation d'un Document Fragment pour minimiser les reflows et repaints
  const fragment = document.createDocumentFragment();

  // Réutilisation des clones existants et ajout/suppression de clones si nécessaire
  if (existingCloneCount > copiesNeeded) {
    existingClones.forEach((clone, index) => {
      if (index >= copiesNeeded) {
        clone.remove();
      }
    });
  } else {
    for (let i = existingCloneCount; i < copiesNeeded; i++) {
      const clonedImg = img.cloneNode(true) as HTMLImageElement;
      clonedImg.style.top = `${imgHeight * (i + 1)}px`;
      clonedImg.classList.add('cloned');
      fragment.appendChild(clonedImg);
    }
    container.appendChild(fragment);
  }
}

function initBgRepeat() {
  repeatImageY('.background_image-primary-5');
  repeatImageY('.background_image-noise');
}

type DebounceFunction = (...args: unknown[]) => void;

function debounce(func: DebounceFunction, wait: number): DebounceFunction {
  let timeout: number | undefined;

  return function (this: ThisParameterType<DebounceFunction>, ...args: unknown[]): void {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function initBg() {
  initBgRepeat();

  // Augmentation du délai de debounce pour réduire le nombre d'appels
  window.addEventListener('resize', debounce(initBgRepeat, 500));
}

export { initBg };
