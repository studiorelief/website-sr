function repeatImageY(imageClass: string) {
  const container = document.querySelector('.section_background') as HTMLElement | null;
  const img = document.querySelector(imageClass) as HTMLImageElement | null;

  if (!container || !img) return;

  const imgHeight = img.clientHeight;
  const copiesNeeded = Math.ceil(container.clientHeight / imgHeight) - 1;

  // Supprime les images clonées existantes pour cette classe
  const existingClones = document.querySelectorAll(`${imageClass}.cloned`);
  existingClones.forEach((clone) => {
    clone.remove();
  });

  // Clone et ajoute l'image le nombre de fois nécessaire
  for (let i = 0; i < copiesNeeded; i++) {
    const clonedImg = img.cloneNode(true) as HTMLImageElement;
    clonedImg.style.top = `${imgHeight * (i + 1)}px`;
    clonedImg.classList.add('cloned');
    container.appendChild(clonedImg);
  }
}

function initBgRepeat() {
  repeatImageY('.background_image-primary-5');
  repeatImageY('.background_image-noise');
}

// Fonction simple de debounce
type DebounceFunction = (...args: unknown[]) => void;

function debounce(func: DebounceFunction, wait: number): DebounceFunction {
  let timeout: number | undefined;

  return function (this: ThisParameterType<DebounceFunction>, ...args: unknown[]): void {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Initialisation de la répétition de fond et écouteur d'événements pour le redimensionnement de la fenêtre
function init() {
  initBgRepeat();

  // Ajout d'un écouteur d'événements pour le redimensionnement de la fenêtre avec un debounce de 250ms
  window.addEventListener('resize', debounce(initBgRepeat, 250));
}

// Export the function
export { init as initBgRepeat };
