// var menuButton = document.querySelector('.menu-button');
// var menu = document.querySelector('.header');
// menuButton.addEventListener('click', function() {
//             menuButton.classList.toggle('menu-button-active');
//             menu.classList.toggle('header-active');
//
/Переход по ссылке/;
document.querySelector(".new").onclick = function() {
    window.location.href = "https://www.google.ru/";
};

/Смена стиля/;
var changeStyle = document.getElementsByClassName("second_button")[0];
var box = document.querySelector("body");
var title = document.querySelector("header");
var third_button = document.querySelector(".third-button");

function newStyle() {
    console.log("Clicked!");
    box.classList.add("body");
    title.classList.add("header_active");
    third_button.classList.add("third-button_active");
}
changeStyle.addEventListener("click", newStyle);

/Удаление контента и отрисовка макета /;

var button = document.querySelector("#third_button");
var parent = document.querySelector("#section_1");
var child = document.querySelector(".allButton");
var cards = document.querySelector(".cards");
var title = document.querySelector("header");
var box = document.querySelector("body");
button.addEventListener("click", function() {
    parent.removeChild(child);
    cards.classList.add("cards_active");
    title.classList.add("header_active");
    box.classList.add("body");
});

/2.Создать объект со значениями температуры в стране. Реализовать код, который выведет среднее значение всех стран. /;
var term = {
    Canada: 10,
    Germany: 13,
    Spain: 22,
    Belarus: 14,
    Ukraine: 17,
    Poland: 9,
};
sum = 0;
for (var i of Object.values(term)) {
    sum += i / 2;
}
console.log("Средняя температура равна", sum, "градусам");
// for (var key in term) {
//     for (var i = 0; i < term[key]; i++) sum += i;
//     console.log(sum);
// }

// var answer =
//     term.Belarus +
//     term.Canada +
//     term.Germany +
//     term.Poland +
//     term.Spain +
//     term.Ukraine;
// console.log(answer);
// function average() {
//     var sum = 0;

//     for (var i = 0; i < arguments[i]; i++) sum += arguments[i];

//     return sum == 0 ? sum : sum / arguments.length;
// }

// alert(average(1, 2, 3, 4, 5, 6, 7, 8, 9));