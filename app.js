// Lista para almacenar los nombres de los participantes
let participantes = [];
let maxParticipantes = 10;

// Función para configurar el número máximo de participantes
function configurarParticipantes() {
    const inputMax = document.getElementById('maxParticipantes').value;
    const numero = parseInt(inputMax, 10);
    
    if (isNaN(numero) || numero < 2 || numero > 10) {
        alert("Por favor, introduce un número entre 2 y 10.");
        return;
    }
    maxParticipantes = numero;
    alert(`Número máximo de participantes establecido en ${maxParticipantes}`);
}

// Función para agregar un nuevo participante
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validaciones para evitar nombres vacíos, repetidos o con números
    if (!nombre || /\d/.test(nombre)) {
        alert("Por favor, ingresa un nombre válido sin números.");
        return;
    }
    if (participantes.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    if (participantes.length >= maxParticipantes) {
        alert("Se ha alcanzado el número máximo de participantes.");
        return;
    }

    // Agregar el nombre a la lista de participantes
    participantes.push(nombre);
    input.value = "";
    actualizarListaAmigos();
}

// Función para actualizar la lista visible de participantes
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = participantes.map(nombre => `<li>${nombre}</li>`).join('');
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Necesitas al menos 2 participantes para sortear.");
        return;
    }
    
    // Selecciona un participante aleatorio y lo elimina de la lista
    const ganadorIndex = Math.floor(Math.random() * participantes.length);
    const ganador = participantes.splice(ganadorIndex, 1)[0];
    
    // Muestra el ganador en la lista de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML += `<li>🎉 ¡El ganador es: ${ganador}! 🎉</li>`;
    actualizarListaAmigos();
}

// Función para reiniciar el juego eliminando los participantes y el resultado
function reiniciarJuego() {
    participantes = [];
    document.getElementById('resultado').innerHTML = "";
    actualizarListaAmigos();
}
