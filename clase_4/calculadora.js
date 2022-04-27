const sumar = require("./suma");
const multiplicar = require("./multi");
const dividir = require("./div");
const restar = require("./resta");

// ***VERSION TRADICIONAL****

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Elegi una operación? ", function (op) {
//   rl.question("Indique el primer valor? ", function (a) {
//     rl.question("Indique el segundo valor? ", function (b) {
//       let resultado = null;

//       if (op === "sumar") {
//         resultado = sumar(Number(a), Number(b));
//       }

//       if (op === "restar") {
//         resultado = restar(Number(a), Number(b));
//       }

//       if (op === "multiplicar") {
//         resultado = multiplicar(Number(a), Number(b));
//       }

//       if (op === "dividir") {
//         resultado = dividir(Number(a), Number(b));
//       }

//       if (resultado !== null) {
//         console.log("El resultado de la operación es", resultado);
//       } else {
//         console.log("Operación no válida");
//       }

//       rl.close();
//     });
//   });
// });

//*** VERSION CUMBIA 420 ***

const readline = require("readline-sync");
let opciones = ["sumar", "dividir", "multiplicar", "restar"];
let funcionesArray = [sumar, dividir, multiplicar, restar];
let opcion = readline.keyInSelect(opciones, "Selecione una ocion");
if (opcion == -1) {
  console.log("Gracias por usar la calcu");
} else {
  let a = readline.question("Ingresa el primer numero: ");
  let b = readline.question("Ahora Ingresa el segundo, perri: ");
  let resultado = funcionesArray[opcion](Number(a), Number(b));
  console.log(resultado);
}
