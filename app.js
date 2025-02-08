let listaAmigos = [];
let listaFront = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
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

function sortearAmigo(){
    if (listaAmigos.length === 0){
        alert("No hay amigos para sortear");
    }else{
        let ganador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        resultado.textContent = ganador;
    };
};

function borrarListado(){
    if(listaAmigos.length === 0){
        alert("No hay amigos ingresados");
    }else{
        if(confirm("¿Seguro que desea borrar el listado?")){
            listaFront.innerHTML = "";
            listaAmigos = [];
        };
    };
}