function agregarHttp(url) {
  return; // escribí tu código aquí
}

function procesar(array, callback) {
  // escribí tu código aquí
  let elArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = callback(array[index]);
    elArray.push(element);
  }
  return elArray;
  // recuerda iterar en cada uno de los elementos del array. Eso lo podes hacer utilizando...
}

let estudiantes = [
  { nombre: "John", promedio: 8.5, aprobado: true },
  { nombre: "Jane", promedio: 7, aprobado: true },
  { nombre: "June", promedio: 3, aprobado: false },
];

/*Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados 
para acordar un recuperatorio. Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados
 y otra los desaprobados. Deberemos guardarlos en las variables aprobados y desaprobados respectivamente.*/

let aprobados = estudiantes.filter((estudiante) => estudiante.aprobado == true);
let desaprobados = estudiantes.filter(
  (estudiante) => estudiante.aprobado == false
);

console.log(aprobados);
console.log(desaprobados);

let autos = [
  {
    marca: "Ford",
    modelo: "Fiesta",
    precio: 150000,
    km: 200,
    color: "Azul",
    cuotas: 12,
    anio: 2019,
    patente: "APL123",
    vendido: false,
  },
  {
    marca: "Toyota",
    modelo: "Corolla",
    precio: 100000,
    km: 0,
    color: "Blanco",
    cuotas: 14,
    anio: 2019,
    patente: "JJK116",
    vendido: false,
  },
];

/**A la semana, el proyecto avanza y María nos pide otro requerimiento, esta vez un poco más avanzado.
Nos comenta que la concesionaria ahora necesita poder buscar los automóviles por patente y venderlos.
Para esto, María nos encargó pensar la forma en que representaremos a la concesionaria. */

const concesionaria = {
  /* completar */
  buscarAuto: function (patente) {
    if (autos.patente == patente) {
      let elemento = autos.findIndex(patente);
      console.log(elemento);
      return autos[elemento];
    }
  },
  ...autos,
};

console.log(concesionaria.buscarAuto("JJK116"));
