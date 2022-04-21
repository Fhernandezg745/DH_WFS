let fs = require("fs");

let herores = require("../superheroes/index");

let datos = fs.readFileSync(__dirname + "/prueba.txt", "utf-8");

console.log(datos);
