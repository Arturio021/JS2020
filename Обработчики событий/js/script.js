var pageOne = document.querySelector(".pageTwo");
var pageTwo = document.querySelector(".pageOne");

if (pageOne) {
    pageOne.addEventListener("click", function() {
        document.location.href = "/secondPage.html";
    });
}

if (pageTwo) {
    function saveInp() {
        var oneInput = document.querySelector(".firstInput").value;
        var twoInput = document.querySelector(".secondInput").value;
        console.log(oneInput);
        console.log(twoInput);
    }
    document.querySelector(".saveInput").addEventListener("click", saveInp);
    var oneInput = document.querySelector(".firstInput").value;
    pageTwo.addEventListener("click", function() {
        var oneInput = document.querySelector(".firstInput").value;
        var twoInput = document.querySelector(".secondInput").value;
        if (oneInput && twoInput) {
            document.location.href = "/firstPage.html";
        } else {
            alert("Заполните поля для ввода");
        }
    });
}