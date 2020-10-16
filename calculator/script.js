var numbers = document.querySelectorAll(".number");
var operations = document.querySelectorAll(".btn-operation");
var dot = document.getElementById("dot");
var result = document.getElementById("result");
var clearBtns = document.querySelectorAll(".clear-btn");
var displayInput = document.getElementById("input-display");
var displayOutput = document.getElementById("output-display");
var degree = document.querySelector(".degree");
var squareRoot = document.querySelector(".sq-root");
// Что сейчас введено(Текущее значение)
var MemoryCurrentNumber = 0;
// Будет проверять вели ли мы новое число
var MemoryNewNumber = false;
// сохраняем операцию в памяти, которая ожидается
var MemoryPendingOperation = "";

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener("click", function(e) {
        numberPress(e.target.textContent);
    });
}

for (var i = 0; i < operations.length; i++) {
    var operationBtn = operations[i];
    operationBtn.addEventListener("click", function(e) {
        mathOperation(e.target.textContent);
        sqrRoot(e.target.textContent);
        console.log(e);

        // showExpr.value += e.target.textContent;
        displayInput.value = 0;
    });
}

for (var i = 0; i < clearBtns.length; i++) {
    var claerBtn = clearBtns[i];
    claerBtn.addEventListener("click", function(e) {
        clear(e.srcElement.id);
    });
}

dot.addEventListener("click", dot);

// result.addEventListener("click", function(e) {
//     equal(e.target.textContent);
// });

function numberPress(number) {
    if (MemoryNewNumber) {
        displayInput.value = number;
        // showExpr.value = number;
        MemoryNewNumber = false;
    } else {
        if (displayInput.value === "0") {
            displayInput.value = number;
        } else {
            displayInput.value += number;
        }
    }

    console.log("This is " + number + " ! ");
}

function sqrRoot(op) {
    var localOperationForSqrt = displayInput.value;
    MemoryPendingOperation = op;
    if (MemoryNewNumber && MemoryPendingOperation !== "=") {
        displayInput.value = MemoryCurrentNumber;
    } else {
        memoryNewNumber = true;
        if (MemoryPendingOperation === "sqrt") {
            MemoryCurrentNumber = parseFloat(Math.sqrt(localOperationForSqrt));
        }
    }
}

function mathOperation(operation) {
    var localOperationMemory = displayInput.value;
    console.log("sqr1222", MemoryPendingOperation);
    if (MemoryNewNumber && MemoryPendingOperation !== "=") {
        displayInput.value = MemoryCurrentNumber;
    } else {
        memoryNewNumber = true;
        console.log("Memory", MemoryCurrentNumber);
        console.log("The First number", localOperationMemory);
        console.log("sqr1", MemoryPendingOperation);
        if (MemoryPendingOperation === "+") {
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === "-") {
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === "*") {
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === "/") {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === "%") {
            MemoryCurrentNumber %= parseFloat(localOperationMemory);
        } else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        }
        displayOutput.value = MemoryCurrentNumber;
        MemoryPendingOperation = operation;
    }

    // console.log((MemoryCurrentNumber /= parseFloat(localOperationMemory)));
    // console.log(MemoryCurrentNumber);
    // console.log("First number", showExpr.value);
    console.log(MemoryCurrentNumber);
    console.log();
    console.log("sqr3", MemoryCurrentNumber);
}

function clear(id) {
    if (id === "clean") {
        displayInput.value = "0";

        memoryNewNumber = true;
    } else if (id === "c") {
        displayInput.value = "0";
        displayOutput.value = "0";
        MemoryNewNumber = true;
        memoryCurrentNumber = 0;
        MemoryPendingOperation = "";
    }
    console.log("Клик по кнопке " + id + "!");
}

function dot() {
    var localDotMemory = displayInput.value;
    if (MemoryNewNumber) {
        localDotMemory = "0.";
        MemoryNewNumber = false;
    } else {
        if (localDotMemory.indexOf(".") === -1) {
            localDotMemory += ".";
        }
    }
    displayInput.value = localDotMemory;
    console.log("click dot");
}