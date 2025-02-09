let listaAmigos = [];
let listaFront = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
let timeSorteo = 4000;
let timeIntervalo = 100;
let sorteando;
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

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("No hay amigos para sortear");
  } else {
    resultado.style.color = "blue";
    document.getElementById("añadir").setAttribute("disabled", "true");
    document.getElementById("sortear").setAttribute("disabled", "true");
    document.getElementById("borrar").setAttribute("disabled", "true");
    iniciarSorteo();
  }
}

/**
 * @function obtenerGanador() : String
 * @returns Genera un indice aleatorio y devuelve un ganador en esa posicion
 */
function obtenerGanador() {
  return listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
}

function iniciarSorteo() {
  sorteando = setInterval(() => {
    resultado.textContent = `El ganador es: ${obtenerGanador()}`;
  }, timeIntervalo);

  setTimeout(() => {
    clearInterval(sorteando);
    resultado.style.color = "rgb(255, 11, 31)";
    resultado.textContent = `El ganador es: ${obtenerGanador()}`;
    document.getElementById("sortear").removeAttribute("disabled");
    document.getElementById("borrar").removeAttribute("disabled");
    document.getElementById("añadir").removeAttribute("disabled");
  }, timeSorteo);
}

function borrarListado() {
  if (listaAmigos.length === 0) {
    alert("No hay amigos ingresados");
  } else {
    if (confirm("¿Seguro que desea borrar el listado?")) {
      listaFront.innerHTML = "";
      listaAmigos = [];
      resultado.innerHTML = "";
    }
  }
}
