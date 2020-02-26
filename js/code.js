// alert('привет! как дела!');
let button = document.querySelector(".promo__button");
let wrap_form = document.querySelector(".wrap_form");
let cross = document.querySelector("i[class='fa fa-times']");
let cross_1 = document.querySelector(".cross");
let cross_2 = document.querySelector(".cross_1");
let faq_panel_1 = document.querySelector(".faq_panel_1");
let faq_answer_1 = document.querySelector(".faq_answer_1");
let faq_panel_2 = document.querySelector(".faq_panel_2");
let faq_answer_2 = document.querySelector(".faq_answer_2");
let faq_panel_3 = document.querySelector(".faq_panel_3");
let faq_answer_3 = document.querySelector(".faq_answer_3");
let sigin = document.querySelector(".sigin");
let sig_in = document.querySelector(".sig_in");
let regis = document.querySelector(".regis");
let regis_in = document.querySelector(".regis_in");
let regis_go = document.querySelector(".regis_go");



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

sigin.onclick = function(){
    sig_in.style.display = "flex";
}

cross_1.onclick = function(){
    sig_in.classList.add("zoomOut");

    setTimeout(() => {
        sig_in.style.display = "none";
        sig_in.classList.remove("zoomOut");
    }, 1000);
   
}
regis.onclick = function(){
    regis_in.style.display = "flex";
}



cross_2.onclick = function(){
    regis_in.classList.add("zoomOut");

    setTimeout(() => {
        regis_in.style.display = "none";
        regis_in.classList.remove("zoomOut");
    }, 1000);
   
}


faq_panel_1.onclick = function(){
    faq_answer_1.style.display = "flex";
    faq_answer_2.style.display = "none";
    faq_answer_3.style.display = "none";
}
faq_panel_2.onclick = function(){
    faq_answer_2.style.display = "flex";
    faq_answer_1.style.display = "none";
    faq_answer_3.style.display = "none";
}
faq_panel_3.onclick = function(){
    faq_answer_3.style.display = "flex";
    faq_answer_1.style.display = "none";
    faq_answer_2.style.display = "none";
}




