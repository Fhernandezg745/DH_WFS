const fs = require("fs");

let tareaUno = {};
let tareaDos = {};
let tareaTres = {};

tareaUno.titulo = "Repasar JS";
tareaUno.estado = "Completado";

tareaDos.titulo = "Hacer una app de tareas";
tareaDos.estado = "En proceso";

tareaTres.titulo = "Break";
tareaTres.estado = "Pendiente";

//armo un array con los objetos creados
let lasTareas = [tareaUno, tareaDos, tareaTres];
const lasTareasLiteral = JSON.stringify(lasTareas, null, 2);

fs.writeFileSync("tareasL.JSON ", lasTareasLiteral);
