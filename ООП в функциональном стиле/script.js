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
    this.getRamSize = function() {
        return this.ramSize;
    };
    this.getRomSize = function() {
        return this.romSize;
    };
}

function Ultrabook(
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

    this.getRamSize = function() {
        return this.ramSize;
    };
    this.name = function() {
        return this.name;
    };

    this.yearOfManufacture = function() {
        return this.yearOfManufacture;
    };
}

function AsusTufGaming(
    name,
    model,
    serialNumber,
    yearOfManufacture,
    ramSize,
    romSize,
    mass,
    haveDisk
) {
    Laptop.call(
        this,
        name,
        model,
        serialNumber,
        yearOfManufacture,
        ramSize,
        romSize,
        mass,
        haveDisk
    );
    if (this.mass > 1500) {
        console.log("Это ноутбук");
    } else {
        console.log("Это ультрабук");
    }
}

var laptopAsus = new AsusTufGaming(
    "ASUS",
    "TUF Gaming",
    12345,
    2018,
    "12 ГБ",
    "Объем HDD - 1T",
    2000,
    "нет"
);
console.log("размер ОЗУ ноутбука Asus - ", laptopAsus.getRamSize());
console.log("размер ПЗУ ноутбука Asus - ", laptopAsus.getRomSize());
console.log("Название   - ", laptopAsus.name);
console.log(laptopAsus);

function AsusZenBook(
    name,
    model,
    serialNumber,
    yearOfManufacture,
    ramSize,
    romSize,
    mass,
    haveDisk
) {
    Laptop.call(
        this,
        name,
        model,
        serialNumber,
        yearOfManufacture,
        ramSize,
        romSize,
        mass,
        haveDisk
    );
    if (this.mass > 1500) {
        console.log("Это ноутбук");
    } else {
        console.log("Это ультрабук");
    }
}

var UltrabookAsus = new AsusZenBook(
    "ASUS",
    "ZenBook",
    4321,
    2019,
    "16 ГБ",
    "Объем SSD - 512 ГБ",
    1300,
    "нет"
);
console.log("размер ОЗУ ультрабука Asus - ", UltrabookAsus.getRamSize());
console.log("размер ОЗУ ультрабука Asus - ", UltrabookAsus.getRomSize());
console.log("Год создания ультрабука Asus - ", UltrabookAsus.yearOfManufacture);
console.log("Название ультрабука  - ", UltrabookAsus.name);
console.log(UltrabookAsus);

// function getRamSize() {
//     return this.ramSize;
//     console.log(ramSize);

// }

// function getRomSize() {
//     return this.romSize;
// }

// getRamSize();
// getRomSize();

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.getName = function() {
//         return this.name;
//     }
//     this.getAge = function() {
//         return this.age;
//     }
// }

// function Student(course, group) {
//     Person.call(this);
//     this.course = course;
//     this.group = group;
// }
// var student = new Student(1, 1);
// student.name = 'Peter';
// student.age = 24;
// console.log(student.name); //Peter
// console.log(student.group); //1