// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crear un array para almacenar los nombres 
let amigo = [];

// Implementa una función para agregar amigos
function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo").value; //Capturar el valor del campo de entrada
        if (inputAmigo === ""){ //Validar la entrada
            alert("Por favor, inserte un nombre.");
            return;
        }
        // valida si el nombre ingresado ya fuera en el array 
        if (amigo.includes(inputAmigo)){
            alert(`El nombre ${inputAmigo} ya fue ingresado.`);
            return;
        }
        // agrega el nombre ingreso a la lista 
        amigo.push(inputAmigo);
        // limpiar campo de entrada
        inputAmigo.value = "";
        // actualizar lista en HTML 
        actualizarLista();
       
}

//Implementa una función para actualizar la lista de amigos

// Obtener el elemento de la lista

function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos");
    
// limpiar contenido de la lista 
    listaAmigos.innerHTML = "";

// Iterar sobre el arreglo
    for (let i = 0; i<amigo.length; i++){
        const li = document.createElement("li");
        li.textContent = amigo[i];
        listaAmigos.appendChild(li); 
    }
}

//Implementa una función para sortear los amigos

function sortearAmigo(){
    //validar que haya amigos disponibles
    if (amigo.length === 0){ // comprueba si array "amigos" esta vcacio
        alert("No hay amigos disponibles para sortear. Agrega al menos 2.");
        return;
    }

    // genera un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigo.length); 

    // genera un numero aleatorio entre 0 y la longitud de la lista

    const amigoSorteado = amigo(indiceAleatorio); // usa el indice aleatorio para obtener un nombre del array 

    // mostrar el resultado en el HTML 
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;

}
