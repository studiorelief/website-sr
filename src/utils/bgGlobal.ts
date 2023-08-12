function repeatImageY(imageClass: string) {
  const container = document.querySelector('.section_background') as HTMLElement | null; // Préciser que c'est un HTMLElement ou null
  const img = document.querySelector(imageClass) as HTMLImageElement | null; // Préciser que c'est un HTMLImageElement ou null

  if (!container || !img) return; // Si l'un d'eux est null, sortir de la fonction

  const imgHeight = img.clientHeight;
  const copiesNeeded = Math.ceil(container.clientHeight / imgHeight) - 1;

  // Supprime les images clonées existantes pour cette classe
  const existingClones = document.querySelectorAll(`${imageClass}.cloned`);
  existingClones.forEach((clone) => {
    clone.remove();
  });

  // Clone et ajoute l'image le nombre de fois nécessaire
  for (let i = 0; i < copiesNeeded; i++) {
    const clonedImg = img.cloneNode(true) as HTMLImageElement; // Assurez-vous que TypeScript sait que c'est une image
    clonedImg.style.top = `${imgHeight * (i + 1)}px`;
    clonedImg.classList.add('cloned');
    container.appendChild(clonedImg);
  }
}

function initBgRepeat() {
  repeatImageY('.background_image-primary-5');
  repeatImageY('.background_image-neutral-5');
}

// Export the function
export { initBgRepeat };
