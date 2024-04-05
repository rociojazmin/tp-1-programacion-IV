// // Los inversores rompieron la base de datos metiendo cualquier texto en el campo de nombre de persona. Necesitamos una función que valide si un texto es un nombre de persona válido o no. Por ahora solo aceptemos que se escriba el nombre o el nombre y apellido.

// type Prioridad = "Alta" | "Media" | "Baja";

// interface Tarea {
//     nombre: string;
//     prioridad: Prioridad;
//     completa: boolean;
// }

// interface Usuario {
//     nombre: string;
//     tareasAsignadas: TareaAsignada[];
// }

// interface TareaAsignada {
//     tarea: Tarea;
//     completa: boolean;
// }

// function obtenerTareas(): Usuario[] {
//     const usuarios: Usuario[] = [
//         {
//             nombre: "Lala",
//             tareasAsignadas: [
//                 { tarea: { nombre: "Comprar cheddar", prioridad: "Alta", completa: false }, completa: false },
//                 { tarea: { nombre: "Ir a comer", prioridad: "Media", completa: false }, completa: false }
//             ]
//         },
//         {
//             nombre: "Toto",
//             tareasAsignadas: [
//                 { tarea: { nombre: "Hacer el tp1 de progra", prioridad: "Alta", completa: true }, completa: true }
//             ]
//         },
//         {
//             nombre: "Pepe",
//             tareasAsignadas: [
//                 { tarea: { nombre: "Comprar brocoli", prioridad: "Baja", completa: false }, completa: false }
//             ]
//         }
//     ];
//     return usuarios;
// }

// // Función para validar si un texto es un nombre de persona válido
// function validarNombrePersona(texto: string): boolean {
//     // Comprobamos si el texto contiene solo letras y espacios
//     const soloLetrasYEspacios = /^[a-zA-Z\s]+$/.test(texto);

// //^ incio de texto
// // [a-zA-Z]: Todas las letras
// // \s: espacio en blanco.
// // +: Indica que el conjunto puede aparecer una o más veces
// // $: Indica el final del texto.

//     // Comprobamos si el texto contiene al menos un espacio
//     const contieneEspacio = texto.indexOf(' ') !== -1; // si el resultado es !-1 contiene espacios

//     // El nombre es válido si contiene solo letras y espacios, y opcionalmente contiene un espacio
//     return soloLetrasYEspacios && (contieneEspacio || texto.trim().split(' ').length === 1);
// //     trim() elimina los espacios en blanco iniciales y finales del texto.
// // split(' '): Esto divide el texto utilizando los espacios en blanco 
// }

// function filtrarTareasPendientes(usuario: Usuario): TareaAsignada[] {
//     return usuario.tareasAsignadas.filter(tarea => !tarea.completa);
// }

// function ordenarTareasPorPrioridad(tareas: TareaAsignada[]): TareaAsignada[] {
//     return tareas.sort((a, b) => {
//         if (a.tarea.prioridad === "Alta" && b.tarea.prioridad !== "Alta") return -1;
//         if (a.tarea.prioridad !== "Alta" && b.tarea.prioridad === "Alta") return 1;
//         if (a.tarea.prioridad === "Media" && b.tarea.prioridad !== "Media") return -1;
//         if (a.tarea.prioridad !== "Media" && b.tarea.prioridad === "Media") return 1;
//         return 0;
//     });
// }


// function mostrarTareasPendientesDePersona(nombrePersona: string) {
//     // Validar si el nombre de persona es válido
//     if (!validarNombrePersona(nombrePersona)) {
//         console.log("Error: El nombre ingresado no es válido");
//         return;
//     }

//     console.log(`Tareas pendientes de ${nombrePersona}:`);
//     const usuarios = obtenerTareas();

//     const usuario = usuarios.find(user => user.nombre === nombrePersona);
//     if (!usuario) {
//         console.log(`Usuario ${nombrePersona} no existe :c`);
//         return;
//     }

//     const tareasPendientes = filtrarTareasPendientes(usuario);

//     const tareasPendientesOrdenadas = ordenarTareasPorPrioridad(tareasPendientes);

//     tareasPendientesOrdenadas.forEach(tarea => {
//         console.log(`${tarea.tarea.nombre} - Prioridad: ${tarea.tarea.prioridad}`);
//     });
// }


// mostrarTareasPendientesDePersona("Pepe");// existe
// mostrarTareasPendientesDePersona("Pepe Juares"); //Valido pero no existe
// mostrarTareasPendientesDePersona("Pepfefee 212"); //no es valido
// mostrarTareasPendientesDePersona("Pepito"); //no se encuentra