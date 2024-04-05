// // Los usuarios de nuestra beta necesitan más información para terminar cada tarea. Están pidiendo poder agregar o un campo de información o que puedan adjuntar un archivo. Como no nos decidimos, vamos a permitirles que puedan cargar alguno de los dos.

// // Mostrar de vuelta las tareas como en el punto 1. Si una tarea tiene la descripción en forma de campo de texto, mostrar esa descripción. Si tiene un archivo, mostrar un mensaje informando la ruta del mismo.

// type Prioridad = "Alta" | "Media" | "Baja";

// // adjunto
// interface AdjuntoDescripcion {
//     tipo: "descripcion";
//     descripcion: string;
// }
// //otro adjunto
// interface AdjuntoFoto {
//     tipo: "foto";
//     src: string; // Ruta de la foto
// }

// // Union type para el adjunto de una tarea
// type Adjunto = AdjuntoDescripcion | AdjuntoFoto;

// interface Tarea {
//     nombre: string;
//     prioridad: Prioridad;
//     completa: boolean;
//     deadline?: Date; 
//     adjunto?: Adjunto; // Adjunto opcional
// }

// interface TareaAsignada {
//     tarea: Tarea;
//     completa: boolean;
// }

// interface Usuario {
//     nombre: string;
//     tareasAsignadas: TareaAsignada[];
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
//                 { tarea: { nombre: "Hacer el tp1 de progra", prioridad: "Alta", completa: false, adjunto: { tipo: "descripcion", descripcion: "Lo tengo que terminar ya" } }, completa: false }
//             ]
//         },
//         {
//             nombre: "Pepe",
//             tareasAsignadas: [
//                 { tarea: { nombre: "Comprar brocoli", prioridad: "Baja", completa: false, deadline: new Date("2024-03-04") }, completa: false },
//                 { tarea: { nombre: "Subir foto del evento", prioridad: "Alta", completa: false, adjunto: { tipo: "foto", src: "/ruta/de/la/foto.jpg" } }, completa: false }
//             ]
//         }
//     ];
//     return usuarios;
// }

// function validarNombrePersona(texto: string): boolean {
 
//     const soloLetrasYEspacios = /^[a-zA-Z\s]+$/.test(texto);

//     const contieneEspacio = texto.indexOf(' ') !== -1;
//     return soloLetrasYEspacios && (contieneEspacio || texto.trim().split(' ').length === 1);
// }


// function filtrarTareasPendientes(usuario: Usuario): TareaAsignada[] {
//     return usuario.tareasAsignadas.filter(tarea => !tarea.completa);
// }

// function ordenarTareasPorPrioridad(tareas: TareaAsignada[]): TareaAsignada[] {
//     return tareas.sort((a, b) => {
//         if (a.tarea.prioridad !== b.tarea.prioridad) {
//             if (a.tarea.prioridad === "Alta") return -1;
//             if (b.tarea.prioridad === "Alta") return 1;
//             if (a.tarea.prioridad === "Media") return -1;
//             if (b.tarea.prioridad === "Media") return 1;
//         }
//         return 0;
//     });
// }

// function ordenarTareasPorFechaLimite(tareas: TareaAsignada[]): TareaAsignada[] {
//     return tareas.sort((a, b) => {
//         if (a.tarea.deadline && b.tarea.deadline) {
//             return a.tarea.deadline.getTime() - b.tarea.deadline.getTime();
//         } else if (a.tarea.deadline) {
//             return -1;
//         } else if (b.tarea.deadline) {
//             return 1;
//         }
//         return 0;
//     });
// }

// function mostrarTareasPendientesDePersona(nombrePersona: string) {
//     console.log(`Tareas pendientes de ${nombrePersona}:`);
//     const usuarios = obtenerTareas();

//     const usuario = usuarios.find(user => user.nombre === nombrePersona);
//     if (!usuario) {
//         console.log(`Usuario ${nombrePersona} no encontrado`);
//         return;
//     }

//     const tareasPendientes = filtrarTareasPendientes(usuario);
//     const tareasOrdenadas = ordenarTareasPorFechaLimite(ordenarTareasPorPrioridad(tareasPendientes));

//     tareasOrdenadas.forEach(tarea => {
//         const fechaLimite = tarea.tarea.deadline ? tarea.tarea.deadline.toLocaleDateString() : 'Sin fecha límite';
//         let adjuntoInfo = '';//Aca se almacena el adjunyo
//         if (tarea.tarea.adjunto) {//si tiene adjunto
//             if (tarea.tarea.adjunto.tipo === "descripcion") { 
//                 adjuntoInfo = `Descripción: ${tarea.tarea.adjunto.descripcion}`;
//             } else if (tarea.tarea.adjunto.tipo === "foto") {
//                 adjuntoInfo = `Foto adjunta: ${tarea.tarea.adjunto.src}`;
//             }
//         }
//         console.log(`${tarea.tarea.nombre} - Prioridad: ${tarea.tarea.prioridad} - Deadline: ${fechaLimite} - ${adjuntoInfo}`);
//     });
// }

// mostrarTareasPendientesDePersona("Pepe");
