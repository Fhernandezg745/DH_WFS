const fs = require("fs");
const admin = require("./admin.js");

let tareaUno = {};
let tareaDos = {};
let tareaTres = {};

tareaUno.titulo = "Repasar JS";
tareaUno.estado = "Completado";

tareaDos.titulo = "Hacer una app de tareas";
tareaDos.estado = "En proceso";

tareaTres.titulo = "Break";
tareaTres.estado = "Pendiente";

let lasTareas = [tareaUno, tareaDos, tareaTres];
const lasTareasLiteral = JSON.stringify(lasTareas, null, 2);

fs.writeFileSync("lasTareasLiteral.json ", lasTareasLiteral);

const data = fs.readFileSync("lasTareasLiteral.json");

let tareas = JSON.parse(data);

let listar = process.argv.indexOf("listar");

if (listar == 2) {
  for (let index = 0; index < tareas.length; index++) {
    const tarea = tareas[index];
    console.log(tarea);
  }
} else if (process.argv[2] == undefined) {
  console.log("Atención - Tienes que pasar una acción.");
} else {
  console.log("Atención - No entiendo qué quieres hacer.");
}

let accion = process.argv[2];
