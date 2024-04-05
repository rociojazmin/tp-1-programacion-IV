// // Lo primero que queremos es que se muestren en consola todas las tareas que tiene pendientes el usuario. O sea, que aún no están terminadas. Ordenarlas por prioridad (Alta, Media, Baja).

// type Prioridad = "Alta" | "Media" | "Baja"; //Voy a comentar todo x si me preguntas algo. La prioridad puede ser alta, media o baja.

// interface Tarea { //Una interface de Tarea para determinar su estructura
//     nombre: string;
//     prioridad: Prioridad;
//     completa: boolean;
// }

// //Tareas 100% reales

// const tareas: Tarea[] = [
//     { nombre: "Comprar cheddar", prioridad: "Alta", completa: false },
//     { nombre: "Ir a comer", prioridad: "Media", completa: false },
//     { nombre: "Hacer el tp1 de progra", prioridad: "Alta", completa: true },
//     { nombre: "Comprar brocoli", prioridad: "Baja", completa: false }
// ];

// //No se xq hice está función pero yo la hice xq si
// function mostrarTareas(tareas: Tarea[]) {
//     console.log("Todas las tareas:");
//     tareas.forEach(tarea => {
//         console.log(`${tarea.nombre} - Prioridad: ${tarea.prioridad} - Completa: ${tarea.completa ? "Sí" : "No"}`);
//     });
// }

// function filtrarTareasPendientes(tareas: Tarea[]) {
//     return tareas.filter(tarea => !tarea.completa);//filtrar las tareas si completa estan't en true
// }

// function ordenarTareasPorPrioridad(tareas: Tarea[]) {
//     // Ordenar tareas por prioridad (de mayor a menor)
//     return tareas.sort((a, b) => {
//         // Comparamos las prioridades de las tareas a y b
//         if (a.prioridad === "Alta" && b.prioridad !== "Alta") return -1; // Si la prioridad de la tarea a es "Alta" y la de la tarea b no, colocamos a antes que b.
//         if (a.prioridad !== "Alta" && b.prioridad === "Alta") return 1; // Si la prioridad de la tarea b es "Alta" y la de la tarea a no, colocamos a después que b.
//         if (a.prioridad === "Media" && b.prioridad !== "Media") return -1; // Si la prioridad de la tarea a es "Media" y la de la tarea b no, colocamos a antes que b.
//         if (a.prioridad !== "Media" && b.prioridad === "Media") return 1; // Si la prioridad de la tarea b es "Media" y la de la tarea a no, colocamos a después que b.
//         return 0; // Si las prioridades son iguales, no necesitamos cambiar el orden.
//     });
// }

// function mostrarTareasPendientes(tareasPendientes: Tarea[]) {
//     console.log("Tareas pendientes:");
//     tareasPendientes.forEach(tarea => {
//         console.log(`${tarea.nombre} - Prioridad: ${tarea.prioridad}`);//recorremos el array para mostrar las tareas pendientes y su prioridad
//     });
// }

// // Filtramos las tareas pendientes
// const tareasPendientes = filtrarTareasPendientes(tareas);

// // Ordenamos las tareas pendientes por prioridad
// const tareasPendientesOrdenadas = ordenarTareasPorPrioridad(tareasPendientes);

// // Mostramos las tareas pendientes
// mostrarTareasPendientes(tareasPendientesOrdenadas);
