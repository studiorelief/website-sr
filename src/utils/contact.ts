function fnContact() {
  // Quand clic sur ".contact_step-flex" qui contient également la class "is-previous"
  $(document).on('click', '.contact_step-flex.is-previous', function () {
    $('.contact_left-arrow.w-slider-arrow-left').click(); // Simuler un clic sur "contact_right-left"
  });

  // Quand clic sur l'élément avec l'ID "contact-step-2"
  $(document).on('click', '.contact_step-flex.is-next', function () {
    $('.contact_right-arrow.w-slider-arrow-right').click(); // Simuler un clic sur "contact_right-right"
  });

  // Quand clic sur un bouton avec les classes ".is-small.is-contact"
  $(document).on('click', '.button.is-small.is-contact', function () {
    $('.trigger-contact').click(); // Simuler un clic sur "trigger-contact.is-hide"
  });

  // Attachez un gestionnaire d'événements "click" à tous les éléments avec la classe .fs_checkbox-4_field
  $('.fs_checkbox-4_field').click(function () {
    // Utilisez toggleClass pour ajouter ou supprimer la classe "is-active" sur l'élément cliqué
    $(this).toggleClass('is-active');
  });

  // Fonction pour vérifier si tous les champs requis sont remplis
  function checkRequiredFields() {
    const requiredInputs = document.querySelectorAll('.form-input');
    let allRequiredFilled = true;

    const stepFlex = document.querySelector('.contact_step-flex.is-clickable.is-next');
    const rightArrow = document.querySelector('.contact_right-arrow');

    requiredInputs.forEach((input) => {
      const inputElement = input as HTMLInputElement; // Assertion de type
      if (inputElement.hasAttribute('required')) {
        if (inputElement.value === '') {
          inputElement.classList.add('is-error');
          allRequiredFilled = false;
        } else {
          inputElement.classList.remove('is-error');
        }
      }
    });

    if (stepFlex && rightArrow) {
      // Vérifie que les éléments ne sont pas null
      if (allRequiredFilled) {
        stepFlex.classList.remove('pointer-events-off');
        rightArrow.classList.remove('pointer-events-off');
      } else {
        stepFlex.classList.add('pointer-events-off');
        rightArrow.classList.add('pointer-events-off');
      }
    }
  }

  // Vérifie que les éléments ne sont pas null avant d'ajouter des écouteurs d'événements
  const rightArrow = document.querySelector('.contact_right-arrow');
  const stepFlex = document.querySelector('.contact_step-flex.is-clickable.is-next');
  const form = document.querySelector('form');

  if (rightArrow) {
    rightArrow.addEventListener('mouseover', function () {
      checkRequiredFields();
    });
  }

  if (stepFlex) {
    stepFlex.addEventListener('mouseover', function () {
      checkRequiredFields();
    });
  }

  if (form) {
    form.addEventListener('input', function () {
      checkRequiredFields();
    });
  }
}

export { fnContact };
