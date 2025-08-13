// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde guardaremos los nombres
let amigos = [];

// Capturamos el input y las listas
const inputNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const listaResultado = document.getElementById("resultado");

// Función para agregar un amigo
function agregarAmigo() {
    const nombre = inputNombre.value.trim();

    // Validar entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // agregar al arreglo usando el metodo push
    inputNombre.value = ""; // limpiar campo
    mostrarLista(); // actualizar lista en pantalla
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    listaAmigos.innerHTML = ""; // limpiar lista antes de renderizar
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres para sortear. Por favor, agrega al menos uno.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio]; //obtener el nombre sorteado//

    listaResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
