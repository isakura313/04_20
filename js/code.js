// alert('привет! как дела!');
let button = document.querySelector(".promo__button");
let wrap_form = document.querySelector(".wrap_form");
let cross = document.querySelector("i[class='fa fa-times']");
let wrap_panel = document.querySelector(".wrap_panel");
let wrap_faq = wrap_panel.querySelectorAll(".wraper_faq");
let faq_panel = wrap_panel.querySelectorAll(".faq_panel");
let faq_answer = wrap_panel.querySelectorAll(".faq_answer");

let form = document.querySelector("form");


form.onsubmit = function(e){
    e.preventDefault(); // отмена посыла формы
    let form_name = this.querySelector("input[name='name']");
    let form_email= this.querySelector("input[name='email']");
    let form_tel = this.querySelector("input[name='tel']"); // это сами инпуты

    let error_msg = this.querySelector(".error");
    let error_name = this.querySelector(".error_name");
    let error_email = this.querySelector(".error_email");
    let error_tel = this.querySelector(".error_tel"); // p под сообщения об ошибках

    if(form_name.value == "" || form_email.value== "" || form_tel.value=="" ){
        error_msg.innerHTML = "что-то пустое, надо дозаполнить";
    }else{
          error_msg.innerHTML = "Все классно"; 
          // тут форма отправляется
          form.submit();
    }
    // отдельная проверка
        if(form_name.value == "" ){
            error_name.innerHTML = "имя пустое";
            form_name.style.borderColor = "red";
        }else{
            form_name.style.borderColor = "green";
            error_name.innerHTML = "";
        }

        if(form_email.value == "" ){
            error_email.innerHTML = "email пустой";
            form_email.style.borderColor = "red";
        }else{
            form_email.style.borderColor = "green";
            error_email.innerHTML = "";
        }

        if(form_tel.value == "" ){
            error_tel.innerHTML = "телефон пустой";
            form_tel.style.borderColor = "red";
        }else{
            form_tel.style.borderColor = "green";
            error_tel.innerHTML = "";
        } 

}


function purge(){
    for (let i = 0; i < faq_panel.length; i++) {
        faq_answer[i].classList.remove("see");
    }
}

for (let i = 0; i < faq_panel.length; i++) {
    faq_panel[i].onclick = function(){
        purge();
        faq_answer[i].classList.add("see");
    }  
}



console.log(faq_panel);
console.log(faq_answer);

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

let count = 0;
cross.onmouseover = function(){
    if(count==0){
    alert("не уходи! Останься с нами!");
    } else if(count==1){
        alert("Ну ладно тебе трудно что ли форму заполнить");
    }
    count++;
}

function addition() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);

    if (isNaN(a)==true) a=0;
    if (isNaN(b)==true) b=0;

    let c = a + b;

    document.getElementById('result').innerHTML = a + " + " + b + " = " + c};