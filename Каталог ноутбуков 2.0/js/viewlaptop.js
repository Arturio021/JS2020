function ViewLaptop() {}
var myWindow;
ViewLaptop.prototype.addProduct = function(obj) {
    var block = document.querySelector("#list-laptops");
    var ullist = document.createElement("ul");

    ullist.className = "body_title";
    ullist.innerHTML =
        "<li>" +
        obj.title +
        "</li>" +
        "<li>" +
        obj.processor +
        "</li>" +
        "<li>" +
        obj.ramSize +
        "</li>" +
        "<li>" +
        obj.countCores +
        "</li>" +
        `<li><button class="info">Инфо</button>` +
        '<button id="delete">Удалить</button></li>';
    ullist.querySelector(".info").addEventListener("click", function() {
        myWindow = window
            .open("about:blank", "", "width=200,height=200")

        .document.write(`<h1>${obj.toString()}</h1>`);
    });
    block.appendChild(ullist);
};

ViewLaptop.prototype.getMessage = function(message, nameCl) {
    var cont = document.querySelector(".container");
    var form = document.querySelector("#Laptop");

    infoBlock = document.createElement("div");
    infoBlock.className = nameCl;
    infoBlock.innerText = message;

    cont.insertBefore(infoBlock, form);
};

ViewLaptop.prototype.clearinput = function() {
    document.querySelector("#title").value = "";
    document.querySelector("#ram").value = "";
    document.querySelector("#year").value = "";
};