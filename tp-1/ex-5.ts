// // La forma de ordenar tareas por prioridad no está alcanzando para saber qué hacer a continuación. Ahora queremos que las tareas se muestren de nuevo como en el punto 1, donde las de Alta prioridad aparecen siempre primero. Pero las demás van a, además, tener una fecha límite (deadline) que marca que debe completarse antes de cierto día. Ordenarlas por la fecha límite que tenga cargada esa tarea.

// type Prioridad = "Alta" | "Media" | "Baja";

// interface Tarea {
//     nombre: string;
//     prioridad: Prioridad;
//     completa: boolean;
//     deadline?: Date; // Fecha límite opcional
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
//                 { tarea: { nombre: "Hacer el tp1 de progra", prioridad: "Alta", completa: true }, completa: true }
//             ]
//         },
//         {
//             nombre: "Pepe",
//             tareasAsignadas: [
//                 { tarea: { nombre: "Comprar brocoli", prioridad: "Baja", completa: false, deadline:new Date("2024-03-04")}, completa: false },
//                 { tarea: { nombre: "Comprar un Mc Donalds", prioridad: "Baja", completa: false, deadline:new Date("2024-03-06")}, completa: false },
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

// // Función para ordenar las tareas por deadline
// function ordenarTareasPorFechaLimite(tareas: TareaAsignada[]): TareaAsignada[] {
//     return tareas.sort((a, b) => {
//         if (a.tarea.deadline && b.tarea.deadline) {
//               // Si ambas tareas tienen deadline, se restan las fechas en milisegundos para determinar el orden
//             return a.tarea.deadline.getTime() - b.tarea.deadline.getTime();
//         } else if (a.tarea.deadline) {
//               // Si solo la tarea a tiene deadline, va antes q la tarea B
//             return -1;
//         } else if (b.tarea.deadline) {
//             //idem que arriba pero al revés
//             return 1;
//         }
//         //si ninguna tiene fecha limite no pasa nd
//         return 0;
//     });
// }

// function mostrarTareasPendientesDePersona(nombrePersona: string) {
//     console.log(`Tareas pendientes de ${nombrePersona}:`);
//     const usuarios = obtenerTareas();

//     const usuario = usuarios.find(user => user.nombre === nombrePersona);
//     if (!usuario) {
//         console.log(`Usuario ${nombrePersona} no existe :c`);
//         return;
//     }

//     const tareasPendientes = filtrarTareasPendientes(usuario);
//     const tareasOrdenadas = ordenarTareasPorFechaLimite(ordenarTareasPorPrioridad(tareasPendientes));
//     tareasOrdenadas.forEach(tarea => {
//         const fechaLimite = tarea.tarea.deadline ? tarea.tarea.deadline.toLocaleDateString() : 'Sin fecha límite'; // si la tarea tiene deadline se hace visible en consola, sino tiene dice 'Sin fecha límite'
//         console.log(`${tarea.tarea.nombre} - Prioridad: ${tarea.tarea.prioridad} - Deadline: ${fechaLimite}`);
//     });

// }

// mostrarTareasPendientesDePersona("Pepe");

