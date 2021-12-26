//saludar();
//console.log(saludar());

const edicion = document.querySelector(".editar");
const marcacion = document.querySelector(".marcar");
const eliminacion = document.querySelector(".eliminar");

function editarObjeto() {
  alert("diste click");
}

edicion.addEventListener("click", editarObjeto);

/*function cambioTitle() {
  let nombre = prompt("Digita tu nombre");
  if (nombre != null) {
    document.title = nombre;
  }
}*/
//cambioTitle();

//document.write("Hola");
//nombre = "Juan David";
//frase = `Hola ${nombre}, como estas?`;

//document.write(frase);

function saludar() {
  alert("This function work");
}
