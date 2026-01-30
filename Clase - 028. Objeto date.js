// Ejemplo 1: Crear una nueva instancia de Date
const fechaActual = new Date();
console.log("Fecha y hora actual:", fechaActual);

// Ejemplo 2: Obtener partes específicas de la fecha
console.log("Año:", fechaActual.getFullYear());
console.log("Mes (0-11):", fechaActual.getMonth());
console.log("Día del mes:", fechaActual.getDate());
console.log("Día de la semana (0-6):", fechaActual.getDay());
console.log("Hora:", fechaActual.getHours());
console.log("Minutos:", fechaActual.getMinutes());
console.log("Segundos:", fechaActual.getSeconds());

// Ejemplo 3: Crear una fecha específica
const fechaEspecifica = new Date(2023, 9, 15, 10, 30, 0); // Año, Mes (0-11), Día, Hora, Minuto, Segundo
console.log("Fecha específica:", fechaEspecifica);

// Ejemplo 4: Convertir una fecha a string
console.log("Fecha en formato ISO:", fechaActual.toISOString());
console.log("Fecha en formato local:", fechaActual.toLocaleString());
console.log("Solo la fecha:", fechaActual.toLocaleDateString());
console.log("Solo la hora:", fechaActual.toLocaleTimeString());

// Ejemplo 5: Calcular la diferencia entre dos fechas
const fechaInicio = new Date(2023, 0, 1);
const fechaFin = new Date(2023, 11, 31);
const diferenciaTiempo = fechaFin - fechaInicio; // Diferencia en milisegundos
const diferenciaDias = diferenciaTiempo / (1000 * 60 * 60 * 24); // Convertir a días
console.log("Diferencia en días:", diferenciaDias);

// Ejemplo 6: Usar métodos estáticos de Date
console.log("Fecha actual (estático):", Date.now()); // Milisegundos desde 1 de enero de 1970
console.log("Parsear una fecha:", Date.parse("2023-10-15T10:30:00Z"));