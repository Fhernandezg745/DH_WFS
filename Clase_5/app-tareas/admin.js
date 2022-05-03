const admin = function (accion, tareas) {
  switch (accion) {
    case "listar":
      for (let index = 0; index < tareas.length; index++) {
        const element = tareas[index];
        console.log(element);
      }
      break;
    case undefined:
      console.log("Tienes que pasar una accion");
      break;
    default:
      console.log("No entiendo que queres hacer");
      break;
  }
};
module.exports = admin;
