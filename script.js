document.getElementById('sign-in__button').onclick = function() {
    document.getElementById('form-wrapper').classList.add('sign-in__form_visible');
};

document.getElementById('sign-in__close').onclick = function () {
    document.getElementById('form-wrapper').classList.remove('sign-in__form_visible')
};
