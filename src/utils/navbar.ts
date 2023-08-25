function scrollNav() {
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionNavbar = document.querySelector('.section_navbar');
    const navbarButton = document.querySelector('.navbar_button-w');

    if (!sectionNavbar || !navbarButton) return; // Si l'un des éléments n'existe pas, on sort du gestionnaire d'événements

    // Si l'utilisateur défile vers le bas
    if (scrollTop > lastScrollTop) {
      (sectionNavbar as HTMLElement).style.transform = 'translateY(-5.125rem)';
      (navbarButton as HTMLElement).style.transform = 'translateY(5.125rem)';
    } else if (scrollTop < lastScrollTop) {
      (sectionNavbar as HTMLElement).style.transform = 'translateY(0)';
      (navbarButton as HTMLElement).style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop; // Mise à jour de la dernière position de défilement
  });
}

export { scrollNav };
