function Laptop(
    name,
    model,
    serialNumber,
    yearOfManufacture,
    ramSize,
    romSize,
    mass,
    haveDisk
) {
    this.name = name;
    this.model = model;
    this.serialNumber = serialNumber;
    this.yearOfManufacture = yearOfManufacture;
    this.ramSize = ramSize;
    this.romSize = romSize;
    this.mass = mass;
    this.haveDisk = haveDisk;
}

Laptop.prototype.getRamSize = function() {
    return this.ramSize;
};

Laptop.prototype.getYearOfManufacture = function() {
    return this.yearOfManufacture;
};

Laptop.prototype.getName = function() {
    return this.name;
};

var Asus = new Laptop(
    "ASUS",
    "TUF Gaming",
    12345,
    2018,
    "12 ГБ",
    "Объем HDD - 1T",
    2000,
    "нет"
);
console.log("Название - ", Asus.getName());
console.log("Размер оперативной памяти - ", Asus.getRamSize());
console.log("Год производства ноутбука - ", Asus.getYearOfManufacture());

var UltrabookAsus = new Laptop(
    "ASUS",
    "ZenBook",
    4321,
    2019,
    "16 ГБ",
    "Объем SSD - 512 ГБ",
    1300,
    "нет"
);
console.log("Название - ", UltrabookAsus.getName());
console.log("Размер оперативной памяти - ", UltrabookAsus.getRamSize());
console.log(
    "Год производства ноутбука - ",
    UltrabookAsus.getYearOfManufacture()
);