const participantes = [
    { cedula: "381290234", nombre: "Juan Luis", telefono: "829-132-1234", puedeGanar: false },
    { cedula: "529874561", nombre: "Pedro Gomez", telefono: "829-549-8712", puedeGanar: false },
    { cedula: "671092384", nombre: "Maria Hernandez", telefono: "829-671-0923", puedeGanar: false },
    { cedula: "138592463", nombre: "Carlos Martinez", telefono: "829-138-5924", puedeGanar: false },
    { cedula: "923841675", nombre: "Ana Lopez", telefono: "829-923-8416", puedeGanar: false },
    { cedula: "412658937", nombre: "Laura Perez", telefono: "829-412-6589", puedeGanar: false },
    { cedula: "563721094", nombre: "Sofia Diaz", telefono: "829-563-7210", puedeGanar: true },
    { cedula: "271059384", nombre: "Miguel Fernandez", telefono: "829-271-0593", puedeGanar: true },
    { cedula: "348921675", nombre: "Isabel Sanchez", telefono: "829-348-9216", puedeGanar: true },
    { cedula: "150384926", nombre: "Luis Rodriguez", telefono: "829-150-3849", puedeGanar: true },
    { cedula: "960472583", nombre: "Juan Carlos", telefono: "829-960-4725", puedeGanar: true },
    { cedula: "738192045", nombre: "Pedro Garcia", telefono: "829-738-1920", puedeGanar: true },
    { cedula: "621385790", nombre: "Laura Gonzalez", telefono: "829-621-3857", puedeGanar: true },
    { cedula: "970384156", nombre: "Miguel Rodriguez", telefono: "829-970-3841", puedeGanar: true },
    { cedula: "410265937", nombre: "Carlos Lopez", telefono: "829-410-2659", puedeGanar: true },
    { cedula: "213904876", nombre: "Sofia Perez", telefono: "829-213-9048", puedeGanar: false },
    { cedula: "932570681", nombre: "Isabel Hernandez", telefono: "829-932-5706", puedeGanar: true },
    { cedula: "760492853", nombre: "Ana Maria", telefono: "829-760-4928", puedeGanar: true },
    { cedula: "846193275", nombre: "Juan Fernandez", telefono: "829-846-1932", puedeGanar: true },
    { cedula: "417386029", nombre: "Pedro Diaz", telefono: "829-417-3860", puedeGanar: true },
    { cedula: "290571836", nombre: "Luis Martinez", telefono: "829-290-5718", puedeGanar: false },
    { cedula: "138746059", nombre: "Sofia Rodriguez", telefono: "829-138-7460", puedeGanar: true },
    { cedula: "523801647", nombre: "Carlos Hernandez", telefono: "829-523-8016", puedeGanar: true },
    { cedula: "682937415", nombre: "Isabel Lopez", telefono: "829-682-9374", puedeGanar: true },
    { cedula: "753829604", nombre: "Laura Sanchez", telefono: "829-753-8296", puedeGanar: true },
    { cedula: "930274865", nombre: "Miguel Perez", telefono: "829-930-2748", puedeGanar: true },
    { cedula: "592837104", nombre: "Maria Sanchez", telefono: "829-592-8371", puedeGanar: false },
    { cedula: "810957362", nombre: "Juan Rodriguez", telefono: "829-810-9573", puedeGanar: true },
    { cedula: "732840159", nombre: "Ana Lopez", telefono: "829-732-8401", puedeGanar: true },
    { cedula: "921583674", nombre: "Pedro Fernandez", telefono: "829-921-5836", puedeGanar: true },
    { cedula: "510396482", nombre: "Luis Diaz", telefono: "829-510-3964", puedeGanar: true },
    { cedula: "634827195", nombre: "Isabel Perez", telefono: "829-634-8271", puedeGanar: true },
    { cedula: "251607839", nombre: "Miguel Lopez", telefono: "829-251-6078", puedeGanar: true },
    { cedula: "758029413", nombre: "Carlos Rodriguez", telefono: "829-758-0294", puedeGanar: true },
    { cedula: "984610573", nombre: "Sofia Gonzalez", telefono: "829-984-6105", puedeGanar: true },
    { cedula: "136085729", nombre: "Laura Fernandez", telefono: "829-136-0857", puedeGanar: true },
    { cedula: "491362780", nombre: "Pedro Perez", telefono: "829-491-3627", puedeGanar: true },
    { cedula: "615307829", nombre: "Juan Luis", telefono: "829-615-3078", puedeGanar: true },
    { cedula: "708153642", nombre: "Isabel Diaz", telefono: "829-708-1536", puedeGanar: true },
    { cedula: "831296407", nombre: "Carlos Gonzalez", telefono: "829-831-2964", puedeGanar: true },
    { cedula: "472561893", nombre: "Ana Maria", telefono: "829-472-5618", puedeGanar: true },
    { cedula: "243865701", nombre: "Miguel Sanchez", telefono: "829-243-8657", puedeGanar: true },
    { cedula: "637804215", nombre: "Luis Rodriguez", telefono: "829-637-8042", puedeGanar: false },
    { cedula: "520473196", nombre: "Laura Martinez", telefono: "829-520-4731", puedeGanar: true },
    { cedula: "981745302", nombre: "Pedro Gomez", telefono: "829-981-7453", puedeGanar: true },
    { cedula: "134206987", nombre: "Juan Sanchez", telefono: "829-134-2069", puedeGanar: true },
    { cedula: "742186905", nombre: "Isabel Fernandez", telefono: "829-742-1869", puedeGanar: true },
    { cedula: "640528917", nombre: "Miguel Perez", telefono: "829-640-5289", puedeGanar: true },
    { cedula: "830654271", nombre: "Laura Diaz", telefono: "829-830-6542", puedeGanar: true },
    { cedula: "179246385", nombre: "Carlos Gomez", telefono: "829-179-2463", puedeGanar: true },
    { cedula: "948162753", nombre: "Sofia Perez", telefono: "829-948-1627", puedeGanar: true },
    { cedula: "650837129", nombre: "Juan Maria", telefono: "829-650-8371", puedeGanar: false },
    { cedula: "820374951", nombre: "Pedro Lopez", telefono: "829-820-3749", puedeGanar: true },
    { cedula: "293815647", nombre: "Miguel Fernandez", telefono: "829-293-8156", puedeGanar: true },
    { cedula: "671203589", nombre: "Laura Gonzalez", telefono: "829-671-2035", puedeGanar: false },
    { cedula: "419065832", nombre: "Isabel Lopez", telefono: "829-419-0658", puedeGanar: true },
    { cedula: "738590216", nombre: "Luis Fernandez", telefono: "829-738-5902", puedeGanar: true },
    { cedula: "120496758", nombre: "Sofia Martinez", telefono: "829-120-4967", puedeGanar: true },
    { cedula: "673829015", nombre: "Carlos Diaz", telefono: "829-673-8290", puedeGanar: false },
    { cedula: "426017539", nombre: "Juan Perez", telefono: "829-426-0175", puedeGanar: true },
    { cedula: "512937684", nombre: "Pedro Rodriguez", telefono: "829-512-9376", puedeGanar: true },
];

// const scrollContainer = document.querySelector(".scroll-container");
// const scrollContent = document.querySelector("#scrollContent");

const lista = document.querySelector("#listaNombres");

// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");

// Configurar la fuente y el estilo de texto
// ctx.font = "12px Arial"; // Define el tamaño y la familia de la fuente
// ctx.fillStyle = "blue"; // Establece el color de relleno del texto
// ctx.textAlign = "center"; // Centra el texto horizontalmente
// ctx.textBaseline = "middle"; // Centra el texto verticalmente

// let height = 10;
// const agregarNombre = (nombre) => {
//     ctx.fillText(nombre, canvas.width / 2, height);
//     height += 20;
// }

// let position = 10;

// Scroll infinito automático
// function startInfiniteScroll() {
//     position--;
//     if (Math.abs(position) >= scrollContent.offsetHeight) {
//         position = 0; // Reiniciar posición
//     }
//     scrollContent.style.transform = `translateY(${position}px)`;
//     requestAnimationFrame(startInfiniteScroll);
// }

// startInfiniteScroll();
// agregarNombre(participante.nombre);

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Obtener un índice aleatorio
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Intercambiar los elementos
    }
    return arr;
}

const arrayDesordenado = shuffleArray(participantes);

arrayDesordenado.forEach((participante) => {
    lista.innerHTML += `
        <li cedula="${participante.cedula}" puedeGanar=${participante.puedeGanar}>${participante.nombre}</li>    
    `;
});
arrayDesordenado.forEach((participante) => {
    lista.innerHTML += `
        <li cedula="${participante.cedula}" puedeGanar=${participante.puedeGanar}>${participante.nombre}</li>    
    `;
});
arrayDesordenado.forEach((participante) => {
    lista.innerHTML += `
        <li cedula="${participante.cedula}" puedeGanar=${participante.puedeGanar}>${participante.nombre}</li>    
    `;
});
arrayDesordenado.forEach((participante) => {
    lista.innerHTML += `
        <li cedula="${participante.cedula}" puedeGanar=${participante.puedeGanar}>${participante.nombre}</li>    
    `;
});

const btnIniciarSorteo = document.querySelector("#iniciarSorteo");
btnIniciarSorteo.addEventListener('click', () => {
    lista.style.animationName = "scrollSorteo";
    const winner = lista.children[lista.children.length - 4];
    const cedulaGanador = winner.getAttribute('cedula');
    const puedeGanar = winner.getAttribute('puedeGanar') == 'true' ? true : false;
    console.log(winner.innerText);
    console.log(cedulaGanador);
    console.log(puedeGanar);
    setTimeout(() => {
        if(!puedeGanar){
            console.log(puedeGanar);
            lista.style.transform = "translateY(20px)";
        }
    }, 6000);
    
});

// startInfiniteScroll();