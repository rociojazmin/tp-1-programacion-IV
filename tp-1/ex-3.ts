// // Ahora los inversores nos piden ver las tareas que tiene asignada cada persona. Así que necesitamos que, dado una persona, se muestren solo sus tareas de igual manera que en el punto 1. ¡OJO: apuntamos a tener millones de tareas en nuestra base de datos!

// type Prioridad = "Alta" | "Media" | "Baja";

// interface Tarea {
//     nombre: string;
//     prioridad: Prioridad;
//     completa: boolean;
// }

// // Defini un tipo de usuario que va a tener un nombre y tarea asignada
// interface Usuario {
//     nombre: string;
//     tareasAsignadas: TareaAsignada[];
// }

// // definí un tipo para representar las Tareas Asignadas
// interface TareaAsignada {
//     tarea: Tarea;
//     completa: boolean;
// }

// // Simulamos las tareas
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

// //persona xq en el problema dijiste persona 
// function mostrarTareasPendientesDePersona(nombrePersona: string) {
//     console.log(`Tareas pendientes de ${nombrePersona}:`);
//     const usuarios = obtenerTareas();

//     const usuario = usuarios.find(user => user.nombre === nombrePersona);
//     if (!usuario) {
//         console.log(`Usuario ${nombrePersona} no existe :c`);
//         return;
//     }

//     // Filtramos las tareas pendientes del usuario
//     const tareasPendientes = filtrarTareasPendientes(usuario);

//     // Ordenamos las tareas pendientes por prioridad
//     const tareasPendientesOrdenadas = ordenarTareasPorPrioridad(tareasPendientes);

//     // Mostramos las tareas pendientes ordenadas
//     tareasPendientesOrdenadas.forEach(tarea => {
//         console.log(`${tarea.tarea.nombre} - Prioridad: ${tarea.tarea.prioridad}`);
//     });
// }

// // Llamamos a la función para mostrar las tareas pendientes de la persona "Pepe"
// mostrarTareasPendientesDePersona("Pepe");
