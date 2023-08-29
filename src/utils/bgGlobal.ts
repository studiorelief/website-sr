// Importation de jQuery si nécessaire
import $ from 'jquery';

export function initializeBackgroundRepeat() {
  function repeatImageY(imageClass: string) {
    const $container = $('.section_background');
    const $img = $(imageClass);

    if ($container.length === 0 || $img.length === 0) return;

    const imgHeight = $img.height();
    const containerHeight = $container.height();

    if (typeof imgHeight !== 'number' || typeof containerHeight !== 'number') return;

    const copiesNeeded = Math.ceil(containerHeight / imgHeight) - 1;

    // Supprime les images clonées existantes pour cette classe
    $(`${imageClass}.cloned`).remove();

    // Clone et ajoute l'image le nombre de fois nécessaire
    for (let i = 0; i < copiesNeeded; i++) {
      const $clonedImg = $img.clone();
      $clonedImg.css('top', `${imgHeight * (i + 1)}px`);
      $clonedImg.addClass('cloned');
      $container.append($clonedImg);
    }
  }

  function initBgRepeat() {
    repeatImageY('.background_image-primary-5');
    repeatImageY('.background_image-noise');
  }

  // Fonction simple de debounce
  function debounce(func: (...args: unknown[]) => void, wait: number) {
    let timeout: number | undefined;

    return function (this: ThisParameterType<typeof func>, ...args: unknown[]): void {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Initialisation de la répétition de fond et écouteur d'événements pour le redimensionnement de la fenêtre
  function init() {
    initBgRepeat();
    $(window).on('resize', debounce(initBgRepeat, 250));
  }

  // Init
  $(document).ready(() => {
    init();
  });
}
