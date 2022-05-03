let dia = "lunes";

switch (dia) {
  case "viernes":
    console.log("buen finde");
    break;
  case "lunes":
    console.log("buena semana");
    break;
  default:
    console.log("buen dia");
    break;
}

function tengoClases(dia) {
  switch (dia) {
    //Escribe tu código aquí
    case "lunes":
    case "miércoles":
    case "viernes":
      console.log("tenés clases");
      break;
    default:
      console.log("no tenés clases");
  }
}

tengoClases("lunes");

let bicicletaA = {
  rodado: 18,
  marca: "Mountain Bike",
};
let bicicletaB = {
  rodado: 24,
  marca: "Aurora",
};

let bicicletaConRodadoGrande =
  bicicletaA.rodado > bicicletaB.rodad ? bicicletaA : bicicletaB;

console.log(
  "La bicicleta con  mayor rodado es la " + bicicletaConRodadoGrande.marca
);

function noParesDeContarImparesHasta(numero) {
  let impares = 0;
  for (let index = 0; (index = numero); index++) {
    if (index % 2 != 0) {
      impares += 1;
    }
  }
}
