// alert('привет! как дела!');
let button = document.querySelector(".promo__button");
let wrap_form = document.querySelector(".wrap_form");
let cross = document.querySelector("i[class='fa fa-times']");
let faq_panel = document.querySelector(".faq_panel");
let faq_answer = document.querySelector(".faq_answer");


// задача чтобы у нас при клике на панель становился видимым блок ответа
// не прошу что бы обратное действие

button.onclick = function(){
    wrap_form.style.display = "flex";
}
cross.onclick = function(){
    wrap_form.classList.add("zoomOut");

    setTimeout(() => {
        wrap_form.style.display = "none";
        wrap_form.classList.remove("zoomOut");
    }, 1000);
   
}
