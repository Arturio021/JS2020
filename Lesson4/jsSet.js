//1 Выводим все значения массива

var setArr1 = [1, "two", "", 5];
document.querySelector(".btn1").onclick = function() {
    alert(setArr1);
};

// 2 Выводим все значения массива с помощью function declaration

var Arr2 = document.querySelector(".btn2");
var setArr2 = [1, 3, "two", " ", 5, "book", null, -0];
Arr2.addEventListener("click", funcDeclaration);

function funcDeclaration() {
    console.log("cliked");
    alert(setArr2);
}

// 3 Выводим все значения массива с помощью function expression

var Arr3 = document.querySelector(".btn3");
var outputFuncExpressiin = function() {
    var setArr3 = [1, 3, "two", " ", 5, 11, "home", { ford: 1969 }];
    alert(setArr3);
};

Arr3.addEventListener("click", outputFuncExpressiin);