function scrollNav() {
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionNavbar = document.querySelector('.section_navbar') as HTMLElement;
    const navbarButton = document.querySelector('.navbar_button-w') as HTMLElement;
    const navbarButtonMobile = document.querySelector('.navbar_button') as HTMLElement;
    const navbarBrand = document.querySelector('.navbar_brand-w') as HTMLElement;
    const navbarBrandImg = document.querySelector('.navbar_brand-img') as HTMLElement;
    const navbarBrandImgScroll = document.querySelector('.navbar_brand-img-scroll') as HTMLElement;

    if (!sectionNavbar || !navbarButton || !navbarBrand || !navbarBrandImg || !navbarBrandImgScroll)
      return;

    // Conversion de 2rem en pixels (en supposant que la taille de base est de 16px)
    const twoRemInPixels = 1 * 16;

    // Vérifiez si la largeur de la fenêtre est supérieure à 768 pixels
    const isPC = window.innerWidth > 768;

    // Si l'utilisateur défile vers le bas
    if (scrollTop > lastScrollTop) {
      if (isPC) {
        navbarButton.style.transform = 'translateY(5.125rem)';
      }
      sectionNavbar.style.transform = 'translateY(-5.125rem)';
      navbarButtonMobile.style.transform = 'translateY(5.125rem)';
      navbarBrand.style.transform = 'translateY(5rem)';
      navbarBrandImg.style.display = 'none';
      navbarBrandImgScroll.style.display = 'block';
      navbarButtonMobile.classList.add('is-scroll'); // Add "is-scroll" class to navbarButton
    }
    // Si l'utilisateur défile vers le haut et scrollTop > 2rem
    else if (scrollTop + twoRemInPixels < lastScrollTop) {
      if (isPC) {
        navbarButton.style.transform = 'translateY(0)';
      }
      sectionNavbar.style.transform = 'translateY(0)';
      navbarButtonMobile.style.transform = 'translateY(0)';
      navbarBrand.style.transform = 'translateY(0)';
      navbarBrandImg.style.display = 'block';
      navbarBrandImgScroll.style.display = 'none';
      navbarButtonMobile.classList.remove('is-scroll'); // Remove "is-scroll" class from navbarButton
    }

    lastScrollTop = scrollTop;
  });
}

export { scrollNav };
