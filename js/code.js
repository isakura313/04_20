// alert('привет! как дела!');
let button = document.querySelector(".promo__button");
let wrap_form = document.querySelector(".wrap_form");
let cross = document.querySelector("i[class='fa fa-times']");
let wrap_panel = document.querySelector(".wrap_panel");
let wrap_faq = wrap_panel.querySelectorAll(".wraper_faq");
let faq_panel = wrap_panel.querySelectorAll(".faq_panel");
let faq_answer = wrap_panel.querySelectorAll(".faq_answer");

let form = document.querySelector("form");

form.onsubmit = function(e) {
  e.preventDefault(); // отмена посыла формы
  let form_name = this.querySelector("input[name='name']");
  let form_email = this.querySelector("input[name='email']");
  let form_tel = this.querySelector("input[name='tel']"); // это сами инпуты

  let error_msg = this.querySelector(".error");
  let error_name = this.querySelector(".error_name");
  let error_email = this.querySelector(".error_email");
  let error_tel = this.querySelector(".error_tel"); // p под сообщения об ошибках

  if (form_name.value == "" || form_email.value == "" || form_tel.value == "") {
    error_msg.innerHTML = "что-то пустое, надо дозаполнить";
  } else {
    error_msg.innerHTML = "Все классно";
    // тут форма отправляется
    form.submit();
  }
  // отдельная проверка
  if (form_name.value == "") {
    error_name.innerHTML = "имя пустое";
    form_name.style.borderColor = "red";
  } else {
    form_name.style.borderColor = "green";
    error_name.innerHTML = "";
  }

  if (form_email.value == "") {
    error_email.innerHTML = "email пустой";
    form_email.style.borderColor = "red";
  } else {
    form_email.style.borderColor = "green";
    error_email.innerHTML = "";
  }

  if (form_tel.value == "") {
    error_tel.innerHTML = "телефон пустой";
    form_tel.style.borderColor = "red";
  } else {
    form_tel.style.borderColor = "green";
    error_tel.innerHTML = "";
  }
};

function purge() {
  for (let i = 0; i < faq_panel.length; i++) {
    faq_answer[i].classList.remove("see");
  }
}

for (let i = 0; i < faq_panel.length; i++) {
  faq_panel[i].onclick = function() {
    purge();
    faq_answer[i].classList.add("see");
  };
}

// задача чтобы у нас при клике на панель становился видимым блок ответа
// не прошу что бы обратное действие

// button.onclick = function(){
//     wrap_form.style.display = "flex";
// }
button.onkeydown = function(e) {
  if (e.keyCode == 13) {
    wrap_form.style.display = "flex";
  }
};
cross.onclick = function() {
  wrap_form.classList.add("zoomOut");

  setTimeout(() => {
    wrap_form.style.display = "none";
    wrap_form.classList.remove("zoomOut");
  }, 1000);
};

let count = 0;
cross.onmouseover = function() {
  if (count == 0) {
    alert("не уходи! Останься с нами!");
  } else if (count == 1) {
    alert("Ну ладно тебе трудно что ли форму заполнить");
  }
  count++;
};

//именованная функция
//function declaration

let calculator = document.querySelector(".calculator");
let input_calc = calculator.querySelector("input");
let btn_result = document.getElementById("btn_result");

let size = 20;
function get_Size() {
  size++;
  return size + "px";
}

btn_result.onclick = () => {
  //плохая проверка
  var first_digit = +input_calc.value[0];
  if (Number.isInteger(first_digit)) {
    try {
      var result = eval(input_calc.value);
    } catch {
      alert("ты дурачок?");
    }
    input_calc.value = result;
    input_calc.style.fontSize = get_Size();
  }
};

//получаем background
// и в зависимости от температуры, которую ввеедет пользователь
// меняем его значение
let main = document.getElementById("main");
let footer = document.getElementsByTagName("footer");

let temp_input = document.getElementById("temp_input");
let temp_button = document.querySelector(".temp_button");

function changeBG(data_user) {
  if (data_user < -30) {
    this.style.backgroundImage =
      'url("https://images.pexels.com/photos/416728/pexels-photo-416728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")';
  } else if (data_user < 0) {
    this.style.backgroundImage =
      'url("https://images.pexels.com/photos/414160/pexels-photo-414160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")';
  } else if (data_user < 25) {
    this.style.backgroundImage =
      'url("https://images.pexels.com/photos/1209610/pexels-photo-1209610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")';
  } else if (data_user < 45) {
    this.style.backgroundImage =
      'url("https://images.pexels.com/photos/1703312/pexels-photo-1703312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")';
  }
}
temp_button.onclick = function() {
  let data_user = +temp_input.value;
  let func = changeBG.bind(main);
  let func1 = changeBG.bind(footer[0]);
  func(data_user);
  func1(data_user);
};

document.body.mouseover = function(event) {
  event.preventDefault();
  console.log(event);
};
document.body.onkeydown = function(event) {
  // console.log(event.key);
  // if(event.keyCode == 13){
  //     alert("почему ты нажал а?");
  // }
};
