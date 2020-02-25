let button = document.querySelector('.promo__button');
let wrap_form = document.querySelector('.wrap_form');
let cross = document.querySelector("i[class='fa fa-times']");
let faq_panel = document.querySelectorAll(".faq_panel");
let faq_answer = document.querySelectorAll(".faq_answer");

button.onclick = function () {
    wrap_form.style.display = "flex";
};

cross.onclick = function () {
    wrap_form.classList.add('zoomOut');
	
    setTimeout(() => {
        wrap_form.style.display = "none";
        wrap_form.classList.remove('zoomOut');
    }, 1000);
};

faq_panel.forEach(function (item, i, arr) {
item.onclick = function () {
    faq_answer[i].classList.toggle('visible')
}
});