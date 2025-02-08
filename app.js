// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crear un array para almacenar los nombres 
let amigo = []; 
// Implementa una función para agregar amigos
function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo").value; //Capturar el valor del campo de entrada
        if (inputAmigo == ""){ //Valida si el campo input esta vacio
            alert("Por favor, inserte un nombre."); //muestra mensaje de alerta
            return; // detiene la ejecucion
        }
        // valida si el nombre ingresado ya fuera en el array 
        if (amigo.includes(inputAmigo)){ // valida si el nombre ingresado figura en array amigo
            alert(`El nombre ${inputAmigo} ya fue ingresado.`); // muestra mensaje de alerta 
            return; //detiene la ejecucion
        }
        // agrega el nombre ingreso a la lista 
        amigo.push(inputAmigo); //agrega en nombre ingresado al final del arreglo amigo 
        // limpiar campo de entrada
        inputAmigo.value = ""; // limpia el campo de ingreso de nombre
        // actualizar lista en HTML 
        actualizarLista(); // ejecuta la funcion indicada para alistar el array       
}
//Implementa una función para actualizar la lista de amigos

// Obtener el elemento de la lista
function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos"); // actualiza los valores en el array amigo

// limpiar contenido de la lista 
    listaAmigos.innerHTML = ""; // asigna un strin en blanco a li 

// Iterar sobre el arreglo
    for (let i = 0; i < amigo.length; i++){ // recorre el array 
        const li = document.createElement("li"); // declara la constante li y crea un elemento li en el DOM 
        li.textContent = amigo[i]; //Muestra el array dentro el elemento li 
        listaAmigos.appendChild(li); 
    }
}
//Implementa una función para sortear los amigos
function sortearAmigo(){ // crea una funcion para sortear los nombres ingresados al array
    //validar que haya amigos disponibles
    if (amigo.length === 0){ // comprueba si array "amigos" esta vcacio
        alert("No hay amigos disponibles para sortear. Agrega al menos 2."); //muestra un mensaje de alerta
        return; //detiene la ejecucion
    }
    // genera un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigo.length); // generar un aleatorio entre 0 y 1, y lo multiplica por el tamaño del array
    // genera un numero aleatorio entre 0 y la longitud de la lista
    const amigoSorteado = amigo[indiceAleatorio]; // usa el indice aleatorio para obtener un nombre del array 
    // mostrar el resultado en el HTML 
    const resultado = document.getElementById("resultado"); // asigna el valor del resultado y lo 
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`; // actualiza el contenido del elemento con el nombre sorteado 

}
