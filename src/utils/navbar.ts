function scrollNav() {
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionNavbar = document.querySelector('.section_navbar') as HTMLElement; // Ajouté "as HTMLElement"
    const navbarButton = document.querySelector('.navbar_button-w') as HTMLElement;
    const navbarBrand = document.querySelector('.navbar_brand-w') as HTMLElement;
    const navbarBrandImg = document.querySelector('.navbar_brand-img') as HTMLElement;
    const navbarBrandImgScroll = document.querySelector('.navbar_brand-img-scroll') as HTMLElement;

    if (!sectionNavbar || !navbarButton || !navbarBrand || !navbarBrandImg || !navbarBrandImgScroll)
      return;

    // Conversion de 2rem en pixels (en supposant que la taille de base est de 16px)
    const twoRemInPixels = 1 * 16;

    // Si l'utilisateur défile vers le bas
    if (scrollTop > lastScrollTop) {
      sectionNavbar.style.transform = 'translateY(-5.125rem)';
      navbarButton.style.transform = 'translateY(5.125rem)';
      navbarBrand.style.transform = 'translateY(5rem)';
      navbarBrandImg.style.display = 'none';
      navbarBrandImgScroll.style.display = 'block';
    }
    // Si l'utilisateur défile vers le haut et scrollTop > 2rem
    else if (scrollTop + twoRemInPixels < lastScrollTop) {
      sectionNavbar.style.transform = 'translateY(0)';
      navbarButton.style.transform = 'translateY(0)';
      navbarBrand.style.transform = 'translateY(0)';
      navbarBrandImg.style.display = 'block';
      navbarBrandImgScroll.style.display = 'none';
    }

    lastScrollTop = scrollTop;
  });
}

export { scrollNav };
