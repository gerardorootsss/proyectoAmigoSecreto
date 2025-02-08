// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crear un array para almacenar los nombres 
let amigo = [];

// Implementa una función para agregar amigos
function addFriends(){
    let listaAmigos = document.getElementById("amigo").value; //Capturar el valor del campo de entrada

        if (amigo === ""){ //Validar la entrada
            alert("Por favor, inserte un nombre.");
            return;
        }
        // valida si el nombre ingresado ya fuera en el array 
        if (amigo.incluides(nameAmigo)){
            alert(`El nombre ${listaAmigos} ya fue ingresado.`)
        }

        // agrega el nombre ingreso a la lista 
        amigo.push(listaAmigos);

        // limpiar campo de entrada
        listaAmigos.value = "";

        // actualizar lista en HTML 
        actualizarArray();
       
}