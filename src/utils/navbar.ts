/* function scrollNav() {
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionNavbar = document.querySelector('.section_navbar');
    const navbarButton = document.querySelector('.navbar_button-w'); // Sélection de .navbar_button-w seulement
    const navbarBrand = document.querySelector('.navbar_brand-w'); // Sélection de .navbar_brand-w seulement

    if (!sectionNavbar || !navbarButton || !navbarBrand) return; // Vérification de l'existence des éléments

    // Si l'utilisateur défile vers le bas
    if (scrollTop > lastScrollTop) {
      (sectionNavbar as HTMLElement).style.transform = 'translateY(-5.125rem)';
      (navbarButton as HTMLElement).style.transform = 'translateY(5.125rem)';
      (navbarBrand as HTMLElement).style.transform = 'translateY(5rem)';
    } else if (scrollTop < lastScrollTop) {
      (sectionNavbar as HTMLElement).style.transform = 'translateY(0)';
      (navbarButton as HTMLElement).style.transform = 'translateY(0)';
      (navbarBrand as HTMLElement).style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop; // Mise à jour de la dernière position de défilement
  });
}

export { scrollNav }; */

function scrollNav() {
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionNavbar = document.querySelector('.section_navbar');
    const navbarButton = document.querySelector('.navbar_button-w');
    const navbarBrand = document.querySelector('.navbar_brand-w');
    const navbarBrandImg = document.querySelector('.navbar_brand-img'); // Nouvel élément
    const navbarBrandImgScroll = document.querySelector('.navbar_brand-img-scroll'); // Nouvel élément

    if (!sectionNavbar || !navbarButton || !navbarBrand || !navbarBrandImg || !navbarBrandImgScroll)
      return;

    // Si l'utilisateur défile vers le bas
    if (scrollTop > lastScrollTop) {
      (sectionNavbar as HTMLElement).style.transform = 'translateY(-5.125rem)';
      (navbarButton as HTMLElement).style.transform = 'translateY(5.125rem)';
      (navbarBrand as HTMLElement).style.transform = 'translateY(5rem)';
      (navbarBrandImg as HTMLElement).style.display = 'none'; // Cache le logo
      (navbarBrandImgScroll as HTMLElement).style.display = 'block'; // Affiche le logo de défilement
    } else if (scrollTop < lastScrollTop) {
      (sectionNavbar as HTMLElement).style.transform = 'translateY(0)';
      (navbarButton as HTMLElement).style.transform = 'translateY(0)';
      (navbarBrand as HTMLElement).style.transform = 'translateY(0)';
      (navbarBrandImg as HTMLElement).style.display = 'block'; // Affiche le logo
      (navbarBrandImgScroll as HTMLElement).style.display = 'none'; // Cache le logo de défilement
    }

    lastScrollTop = scrollTop;
  });
}

export { scrollNav };
