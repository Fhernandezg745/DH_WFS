const admin = function (accion, tareas) {
  switch (accion) {
    case "listar":
      for (let index = 0; index < tareas.length; index++) {
        const tarea = tareas[index];
        console.log(tarea);
      }
      break;
    case undefined:
      console.log("Atención - Tienes que pasar una acción.");
      break;
    default:
      console.log("No entiendo qué quieres hacer.");
      break;
  }
};

module.exports = admin;
