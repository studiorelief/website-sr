import { scrollNav } from '$utils/navbar';

function scrollHome() {
  $(document).ready(function () {
    // Vérifiez la largeur de l'écran
    if (($(window).width() as number) > 990) {
      // Vérifiez si l'utilisateur est sur la page d'accueil
      if (window.location.pathname === '/') {
        if (
          window.location.hash !== '#integration' &&
          window.location.hash !== '#super-pouvoirs' &&
          window.location.hash !== '#portfolio'
        ) {
          window.location.hash = 'integration';
          const integrationElement = $('#integration');
          const offset = integrationElement.offset();
          if (offset) {
            $('html, body').animate(
              {
                scrollTop: offset.top,
              },
              1000,
              function () {
                // Animation terminée, déclenchez scrollNav()
                scrollNav();
              }
            );
          }
        } else if (
          window.location.hash === '#super-pouvoirs' ||
          window.location.hash === '#portfolio'
        ) {
          // Si le hash est #super-pouvoirs ou #portfolio, déclenchez scrollNav()
          scrollNav();
        }
      }
    } else scrollNav();
  });
}

export { scrollHome };
