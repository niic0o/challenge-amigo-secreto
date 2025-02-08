let listaAmigos = [];
let listaFront = document.getElementById("listaAmigos");
//validaciónes
const inputAmigo = document.getElementById("amigo");

inputAmigo.addEventListener("blur", (e) => {
  const valor = e.target.value;
  if (!valor.match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/)) {
    alert("Solo se permiten letras");
  }
});

function agregarAmigo() {
  let amigo = inputAmigo.value;
  if (amigo === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    existeAmigo(amigo);
    inputAmigo.value = "";
    mostrarAmigo();
  }
}

function existeAmigo(p_amigo) {
  if (
    listaAmigos.some(
      (elemento) => elemento.toLowerCase() === p_amigo.toLowerCase()
    )
  ) {
    alert("Este amigo ya existe en la lista");
  } else {
    listaAmigos.push(p_amigo);
  }
}

function mostrarAmigo() {
  listaFront.innerHTML = "";
  listaAmigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    listaFront.appendChild(li); //asigno li a su padre ul
  });
}

// Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML.
// Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
// Tareas específicas:
// Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector()
// para seleccionar la lista donde se mostrarán los amigos.

// Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

// Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>)
// para cada título.

// Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
