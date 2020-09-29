document.querySelector("#Laptop").addEventListener("submit", function(event) {
    var title = document.querySelector("#title").value;
    var ramSize = document.querySelector("#ram").value;
    var year = document.querySelector("#year").value;
    var proccesor = document.querySelector("#proccesor").value;
    var countCores = document.querySelector("#countCore").value;
    var caseMaterial = document.querySelector("#material").value;
    var mass = document.querySelector("#mass").value;

    var laptop = new Laptop(
        title,
        ramSize,
        year,
        proccesor,
        countCores,
        caseMaterial,
        mass
    );

    var viewLaptop = new ViewLaptop();

    if (
        title === "" ||
        ramSize === "" ||
        year === "" ||
        proccesor === "" ||
        countCores === "" ||
        caseMaterial === "" ||
        mass === ""
    ) {
        viewLaptop.getMessage("Заполните все поля ввода", "no_succes");
    } else {
        viewLaptop.addLaptop(laptop);
        viewLaptop.getMessage("Новый ноутбук добавлен", "succes");
        viewLaptop.clearinput();
    }

    event.preventDefault();
});