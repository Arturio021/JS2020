function Laptop(
    title,
    ramSize,
    year,
    proccesor,
    countCores,
    mass,
    caseMaterial
) {
    this.title = title;
    this.ramSize = ramSize;
    this.year = year;
    this.proccesor = proccesor;
    this.countCores = countCores;
    this.caseMaterial = caseMaterial;
    this.mass = mass;
}

Laptop.prototype.toString = function() {
    return `Вес - ${this.mass} Материал корпуса - ${this.caseMaterial} Год выпуска - ${this.year} `;
};