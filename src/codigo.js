let botonAgregar = document.querySelector("#botonEnvio");
let botonSumar = document.getElementById("botonSuma");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let consulta = document.getElementById("consulta");
var productosArray = [];
var cantidadArray = [];
//productosArray = "";
//cantidadArray = "";
console.clear();
function verificarVacios(entrada) {
  if (
    entrada !== "" &&
    entrada.length >= 3 &&
    entrada.length <= 20 &&
    typeof entrada !== "undefined"
  ) {
    console.log("ok");
  } else console.log("Ingresar de nuevo");
}

function verificarNulos(entrada) {
  if (entrada !== "" && entrada.length >= 0 && typeof entrada !== "undefined") {
    console.log("ok");
  } else console.log("Valor inválido");
}

//console.log(nombre)
botonAgregar.addEventListener("click", () => {
  nombre = String(nombre.value);
  apellido = String(apellido.value);
  correo = String(correo.value);
  let producto = document.getElementById("producto").value;
  let cantidad = document.getElementById("cantidad").value;
  verificarVacios(nombre);
  verificarVacios(apellido);
  verificarVacios(correo);
  verificarVacios(producto);
  verificarNulos(cantidad);
  verificarVacios(consulta);
  productosArray.push(producto);
  cantidadArray.push(cantidad);
  console.log(productosArray);
  console.log(cantidadArray);
});
function mostrarSuma(suma) {
  let mostrarTotal = Number(suma);
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  let datoParrafo = document.createElement("p");

  datoParrafo.innerText = "La cantidad total de productos es: " + mostrarTotal;
  resultado.appendChild(datoParrafo);
}

function sumarElemento(cantidadArray) {
  let cantidadElemento = cantidadArray.length;
  let suma = Number(0);
  for (let i = 0; i < cantidadElemento; i++) {
    suma = suma + Number(cantidadArray[i]);
  }
  mostrarSuma(suma);
  return suma;
}

botonSumar.addEventListener("click", () => {
  // Cuando hace clic en sumar
  console.log(sumarElemento(cantidadArray));
  // Mostrar en pantalla la suma total de elementos
});
