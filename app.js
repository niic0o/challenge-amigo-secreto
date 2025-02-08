let listaAmigos = []

//validaciónes
const inputAmigo = document.getElementById('amigo');

inputAmigo.addEventListener('blur', (e) => {
    const valor = e.target.value;
    if (!valor.match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/)){
        alert('Solo se permiten letras');
    };
});

function agregarAmigo(){
    let amigo = inputAmigo.value;
    console.log(listaAmigos);
    if (amigo === ''){
        alert('Por favor, inserte un nombre.');
    }else{
        existeAmigo(amigo);        
        inputAmigo.value = '';
    };
};

function existeAmigo(p_amigo){
    if (listaAmigos.some((elemento) => elemento.toLowerCase() === p_amigo.toLowerCase())){
        alert('Este amigo ya existe en la lista');
        }else{
            listaAmigos.push(p_amigo);
        };
};
// Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto
// ingresado por el usuario.

// Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío.
// Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

// Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push()
// Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.