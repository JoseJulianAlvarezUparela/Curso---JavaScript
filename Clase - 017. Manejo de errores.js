try {
    // Código que puede generar un error
    console.log("Intentando ejecutar el código...");
    let result = 10 / 0; // Ejemplo de operación
    console.log("Resultado:", result);
} catch (error) {
    // Manejo del error
    console.error("Ocurrió un error:", error.message);
} finally {
    // Código que siempre se ejecuta
    console.log("Finalizando la ejecución.");
}

// Lanzar un error personalizado

console.log("---------------")

try {
    let edad = "nuevo";
    if (isNaN(edad)) {
        throw new Error("La imput no es un número válido.");
    }
    console.log(edad * edad);
} catch (error) {
    console.error("Error personalizado:", error.message);
}