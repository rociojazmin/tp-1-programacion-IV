// // Los inversores se quejan que las tareas tardan mucho en cargarse. Necesitamos adaptar el código anterior para que la carga se muestre de forma asíncrona.

// // Asumí que existe una función que devuelve el listado de tareas después de 3 segundos. Podés usar el ejemplo que hicimos en clase.

// type Prioridad = "Alta" | "Media" | "Baja";

// interface Tarea {
//     nombre: string;
//     prioridad: Prioridad;
//     completa: boolean;
// }

// // Función async que devuelve una promesa que se resolverá con un array de tareas (Promise<Tarea[]>).
// async function obtenerTareas(): Promise<Tarea[]> { // Promise<Tarea[]> la función obtenerTareas devuelve una promesa que será resuelta con un array de objetos de tipo Tarea
//     return new Promise(resolve => {
//         // Simulación de que obtenemos tareas
//         setTimeout(() => {
//             //se crea el array con las tareas simuladas
//             const tareas: Tarea[] = [
//                 { nombre: "Comprar cheddar", prioridad: "Alta", completa: false },
//                 { nombre: "Ir a comer", prioridad: "Media", completa: false },
//                 { nombre: "Hacer el tp1 de progra", prioridad: "Alta", completa: true },
//                 { nombre: "Comprar brocoli", prioridad: "Baja", completa: false }
//             ];
//             //"Resolvemos"(funcion q resuelve ah) la promesa con el array de tareas
//             resolve(tareas);
//         }, 3000); // Simulamos los 3 segundos
//     });
// }


// function ordenarTareasPorPrioridad(tareas: Tarea[]): Tarea[] {
//     // Ordenar tareas por prioridad (de mayor a menor)
//     return tareas.sort((a, b) => {
//         if (a.prioridad === "Alta" && b.prioridad !== "Alta") return -1; 
//         if (a.prioridad !== "Alta" && b.prioridad === "Alta") return 1; 
//         if (a.prioridad === "Media" && b.prioridad !== "Media") return -1; 
//         if (a.prioridad !== "Media" && b.prioridad === "Media") return 1; 
//         return 0;
//     });
// }

// function filtrarTareasPendientes(tareas: Tarea[]): Tarea[] {
//     // Filtrar las tareas pendientes
//     return tareas.filter(tarea => !tarea.completa);
// }

// function mostrarTareasPendientes(tareasPendientes: Tarea[]) {
//     console.log("Tareas pendientes:");
//     tareasPendientes.forEach(tarea => {
//         console.log(`${tarea.nombre} - Prioridad: ${tarea.prioridad}`);
//     });
// }

// async function mostrarTareasPendientesAsync() {
//     try {
//         console.log("Cargando tareas..."); // Mostramos un mensaje diciendo que se están cargando las tareas
//         const tareas = await obtenerTareas(); // Esperamos a que se carguen las tareas utilizando obtenerTareas()

//         // Filtramos las tareas pendientes 
//         const tareasPendientes = filtrarTareasPendientes(tareas);

//         // Ordenamos las tareas pendientes 
//         const tareasPendientesOrdenadas = ordenarTareasPorPrioridad(tareasPendientes);

//         // Mostramos las tareas pendientes y ordenadas
//         mostrarTareasPendientes(tareasPendientesOrdenadas);

//     } catch (error) {
//         console.error("Error al obtener las tareas:", error); // Si no se obtienen las tareas se muestra
//     }
// }

// mostrarTareasPendientesAsync();