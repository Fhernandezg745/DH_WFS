const fs = require("fs");
const data = fs.readFileSync("./tareasL.JSON");
let arrayDeTareas = JSON.parse(data);
const admin = require("./admin.js");

/*1. Permitir que al momento de ejecutar el archivo app.js desde la terminal con
Node.js se pueda pasar un argumento después del nombre del archivo de la
siguiente manera:
a. node app.js listar
Si se escribe la palabra “listar” después del nombre del archivo, se
deberán listar todas las tareas existentes en el archivo tareas.json.
b. node app.js
Si NO se escribe ninguna palabra después del nombre del archivo,
en la terminal deberá aparecer el texto: Atención - Tienes que
pasar una acción.
c. node app.js cualquier texto
Si se llegase a pasar cualquier otro texto que no sea la palabra
listar, en la terminal deberá aparecer el texto: No entiendo qué
quieres hacer.

Nuestro tech leader es una buena persona, y para que logremos lo anterior nos dejó
la siguiente pista: piensen en el switch, adicionalmente, para que puedan tener
mucho más clara la idea de cómo poder pasarle algún valor desde la terminal al
programa que se está ejecutando desde NodeJs, es fundamental tener en cuenta lo
siguiente:*/

//usamos process argv que transforma en una lista a lo que se pasa en consola con node
// al hacer esto le indicamos que en la posicion 2 debe estar "lista", ya que 0 sera node, 1 sera el archivo, por ende 2 es la palabra q deseamos
// let listar = process.argv.indexOf("listar");

// if (listar == 2) {
//   for (let index = 0; index < arrayDeTareas.length; index++) {
//     const element = arrayDeTareas[index];
//     console.log(element);
//   }
// } else if (process.argv[2] == undefined) {
//   console.log("Tienes que pasar una accion");
// } else {
//   console.log("No entiendo que queres hacer");
// }

//let accion = process.argv[2];
