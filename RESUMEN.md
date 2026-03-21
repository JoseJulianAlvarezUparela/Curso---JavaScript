# Resumen de Archivos (Curso JavaScript)

Este documento condensa los conceptos clave de cada archivo en `C:\Users\josej\Documents\Cursos\JavaScript`.

**Indice**
- [Clase 001 - Introduccion](#clase-001)
- [Clase 002 - AprendeJavascript](#clase-002)
- [Clase 003 - Caracteristicas y Gramatica](#clase-003)
- [Clase 004 - Variables](#clase-004)
- [Clase 005 - Constantes](#clase-005)
- [Clase 006 - Cadenas de texto](#clase-006)
- [Clase 007 - Template Strings](#clase-007)
- [Clase 008 - Numeros](#clase-008)
- [Clase 009 - Booleans](#clase-009)
- [Clase 010 - Indefinido](#clase-010)
- [Clase 011 - Funciones](#clase-011)
- [Clase 012 - Arreglos](#clase-012)
- [Clase 013 - Objetos](#clase-013)
- [Clase 014 - Tipos de operadores](#clase-014)
- [Clase 015 - Condicionales](#clase-015)
- [Clase 016 - Ciclos](#clase-016)
- [Clase 017 - Manejo de errores](#clase-017)
- [Clase 018 - Break & continue](#clase-018)
- [Clase 019 - Destructuracion](#clase-019)
- [Clase 020 - Objetos iterables](#clase-020)
- [Clase 021 - Parametros REST & Spread](#clase-021)
- [Clase 022 - Arrow Functions](#clase-022)
- [Clase 023 - Prototipos](#clase-023)
- [Clase 024 - Herencia prototipica](#clase-024)
- [Clase 025 - Clases y herencia](#clase-025)
- [Clase 026 - Metodos estaticos, getters y setters](#clase-026)
- [Clase 027 - Objeto console](#clase-027)
- [Clase 028 - Objeto Date](#clase-028)
- [Clase 029 - Objeto Math](#clase-029)
- [Clase 030 - Operador de cortocircuito](#clase-030)
- [Clase 031 - alert, confirm y prompt](#clase-031)
- [Clase 032 - Expresiones Regulares](#clase-032)
- [Clase 033 - Funciones anonimas autoejecutables](#clase-033)
- [Clase 034 - Aritmetica (modulo)](#clase-034a)
- [Clase 034 - Modulos import/export](#clase-034b)
- [Clase 034 - Variables (modulo)](#clase-034c)
- [Clase 035 - Temporizadores](#clase-035)
- [Clase 036 - Asincronia y Event Loop](#clase-036)
- [Clase 037 - Callbacks](#clase-037)
- [Clase 038 - Promesas](#clase-038)
- [Clase 039 - Async/Await](#clase-039)
- [Clase 040 - Symbols](#clase-040)
- [Clase 041 - Maps](#clase-041)
- [Clase 042 - Sets](#clase-042)
- [Clase 043 - WeakSets & WeakMaps](#clase-043)
- [Clase 044 - Iterables & Iterators](#clase-044)
- [Clase 045 - Generators](#clase-045)
- [Clase 046 - Proxies](#clase-046)
- [Clase 047 - Web APIs](#clase-047)
- [Clase 048 - DOM Introduccion](#clase-048)
- [Clase 049 - DOM Atributos y Data-Attributes](#clase-049)
- [Clase 050 - DOM Nodos, Elementos y Selectores](#clase-050)
- [Clase 051 - DOM Estilos y Variables CSS](#clase-051)
- [Clase 052 - DOM Clases CSS](#clase-052)
- [Clase 053 - DOM Texto y HTML](#clase-053)
- [Clase 054 - DOM Traversing](#clase-054)
- [Clase 055 - DOM Creando Elementos y Fragmentos](#clase-055)
- [Clase 056 - Templates HTML](#clase-056)
- [Clase 057 - DOM Modificando elementos](#clase-057)
- [Clase 058 - DOM Manejadores de eventos](#clase-058)
- [Clase 059 - DOM Eventos con parametros y remover eventos](#clase-059)
- [Clase 060 - DOM Flujo de eventos](#clase-060)
- [Clase 061 - DOM stopPropagation & preventDefault](#clase-061)
- [Clase 062 - AJAX Introduccion](#clase-062)
- [Clase 063 - AJAX XMLHttpRequest](#clase-063)
- [Clase 064 - AJAX Fetch](#clase-064)
- [Clase 065 - AJAX Fetch + Async/Await](#clase-065)
- [Clase 066 - AJAX Axios](#clase-066)
- [Clase 067 - AJAX Axios + Async/Await](#clase-067)
- [Clase 068 - API REST Introduccion](#clase-068)
- [AJAX.html](#ajax-html)
- [DOM.html](#dom-html)
- [DOM Estilos y Variables CSS.html](#dom-estilos-html)
- [DOM Flujo de eventos (burbuja y captura).html](#dom-flujo-html)
- [index.html](#index-html)
- [.vscode/settings.json](#vscode-settings)

---

<a id="clase-001"></a>
## Clase - 001. Introduccion.js
Archivo: `Clase - 001. Introducción.js`
- Historia breve de JavaScript y su estandarizacion (ECMAScript)
- Caracteristicas: tipado dinamico, basado en prototipos, multiparadigma, event loop
- Gramatica basica: comentarios, var/let/const, tipos primitivos
- Ejemplos simples con numeros y strings

<a id="clase-002"></a>
## Clase - 002. AprendeJavascript..js
Archivo: `Clase - 002. AprendeJavascript..js`
- Nota sobre aprendejs.org como recurso de aprendizaje
- Declaracion de variables con `var`, `let`, `const`
- Tipos de datos y `typeof`
- `null` y `undefined` (incluye el detalle historico de `typeof null === "object"`)
- `Symbol` y `BigInt`

<a id="clase-003"></a>
## Clase - 003. Caracteristicas y Gramatica.js
Archivo: `Clase - 003. Características y Gramática.js`
- Usa `typeof` para mostrar tipos (asume variables definidas en clases previas)
- Operadores aritmeticos, comparacion, logicos y asignacion
- Ejemplos de coercion con `==` vs `===`

<a id="clase-004"></a>
## Clase - 004. Variables.js
Archivo: `Clase - 004. Variables.js`
- Diferencia entre `var` (scope de funcion) y `let` (scope de bloque)
- Ejemplo de sombreado de variables dentro de un bloque

<a id="clase-005"></a>
## Clase - 005. Constantes.js
Archivo: `Clase - 005. Constantes.js`
- `const` no permite reasignacion del identificador
- Si el valor es objeto/array, sus propiedades si pueden mutar
- Comentarios didacticos con ejemplo

<a id="clase-006"></a>
## Clase - 006. Cadenas de texto.js
Archivo: `Clase - 006. Cadenas de texto.js`
- Longitud de strings y metodos comunes
- `toUpperCase`, `toLowerCase`, `includes`

<a id="clase-007"></a>
## Clase - 007. Template Strings.js
Archivo: `Clase - 007. Template Strings.js`
- Interpolacion con template strings

<a id="clase-008"></a>
## Clase - 008. Numeros.js
Archivo: `Clase - 008. Numeros.js`
- Operaciones basicas
- `toFixed` para formateo
- Comparacion de tipos con `typeof`

<a id="clase-009"></a>
## Clase - 009. Booleans.js
Archivo: `Clase - 009. Booleans.js`
- Valores booleanos y `typeof`

<a id="clase-010"></a>
## Clase - 010. Indefinido.js
Archivo: `Clase - 010. Indefinido.js`
- Diferencia entre `null`, `undefined` y variable sin valor

<a id="clase-011"></a>
## Clase - 011. Funciones.js
Archivo: `Clase - 011. Funciones.js`
- Funciones declaradas vs expresadas
- Hoisting en funciones declaradas
- `return`, parametros y llamadas

<a id="clase-012"></a>
## Clase - 012. Arreglos.js
Archivo: `Clase - 012. Arreglos.js`
- Creacion de arrays y acceso por indice
- `length`, `push`, `pop`, `Array.fill`
- Recorrido con `forEach` para generar HTML

<a id="clase-013"></a>
## Clase - 013. Objetos.js
Archivo: `Clase - 013. Objetos.js`
- Objetos via literales y via `new Object()`
- Acceso a propiedades

<a id="clase-014"></a>
## Clase - 014. Tipos de operadores.js
Archivo: `Clase - 014. Tipos de operadores.js`
- Operadores aritmeticos y modulo
- Ejemplo de bucle `for`

<a id="clase-015"></a>
## Clase - 015. Condicionales.js
Archivo: `Clase - 015. Condicionales.js`
- `if/else` y `else if` con rangos de hora
- `switch` para dias de la semana

<a id="clase-016"></a>
## Clase - 016. Ciclos.js
Archivo: `Clase - 016. Ciclos.js`
- `while`, `do...while`, `for`
- Recorrido de arrays
- `for...in` para objetos

<a id="clase-017"></a>
## Clase - 017. Manejo de errores.js
Archivo: `Clase - 017. Manejo de errores.js`
- `try/catch/finally`
- Lanzamiento de errores con `throw new Error()`
- Validacion con `isNaN`

<a id="clase-018"></a>
## Clase - 018. Break & continue.js
Archivo: `Clase - 018. Break & continue.js`
- `break` en `switch`
- `break` en bucle `for` al encontrar un valor

<a id="clase-019"></a>
## Clase - 019. Destructuracion.js
Archivo: `Clase - 019. Destructuracion.js`
- Destructuracion de arrays y objetos

<a id="clase-020"></a>
## Clase - 020. Objetos iterables.js
Archivo: `Clase - 020. Objetos iterables.js`
- Shorthand de propiedades y metodos en objetos
- Comparacion entre sintaxis larga y corta

<a id="clase-021"></a>
## Clase - 021. Parametros REST & Operador Spread.js
Archivo: `Clase - 021. Parametros REST & Operador Spread.js`
- Parametros REST para sumar numeros
- Operador Spread para combinar arrays

<a id="clase-022"></a>
## Clase - 022. Arrow Functions.js
Archivo: `Clase - 022. Arrow Functions.js`
- Diferencias basicas entre funcion tradicional y arrow function

<a id="clase-023"></a>
## Clase - 023. Prototipos.js
Archivo: `Clase - 023. Prototipos.js`
- Constructores con `function` y `this`
- Metodos en `prototype`
- Instanciacion con `new`

<a id="clase-024"></a>
## Clase - 024. Herencia Prrototipica.js
Archivo: `Clase - 024. Herencia Prrototipica.js`
- Herencia prototipica manual
- Asignacion de `prototype` y `constructor`
- Metodo adicional `ladrar`

<a id="clase-025"></a>
## Clase - 025. Clases y Herencia.js
Archivo: `Clase - 025. Clases y Herencia.js`
- Sintaxis `class`, `constructor` y metodos
- Creacion de instancias

<a id="clase-026"></a>
## Clase - 026. Metodos estaticos, getters y setters.js
Archivo: `Clase - 026.  Métodos estáticos, getters y setters.js`
- Getters y setters con validacion
- Convencion de propiedades "privadas" con `_`

<a id="clase-027"></a>
## Clase - 027. Objeto console.js
Archivo: `Clase - 027. Objeto console.js`
- Metodos de `console`: `log`, `error`, `warn`, `info`, `clear`
- Formateo con template strings

<a id="clase-028"></a>
## Clase - 028. Objeto date.js
Archivo: `Clase - 028. Objeto date.js`
- Creacion y lectura de fechas
- Formatos con `toISOString` y `toLocaleString`
- Diferencia de fechas
- `Date.now` y `Date.parse`

<a id="clase-029"></a>
## Clase - 029. Objeto math.js
Archivo: `Clase - 029. Objeto math.js`
- Redondeos, potencia, raiz, aleatorios, max/min
- Trigonometria basica

<a id="clase-030"></a>
## Clase - 030. Operador de Cortocircuito.js
Archivo: `Clase - 030. Operador de Cortocircuito.js`
- Ejemplo de parametro por defecto en funciones
- No muestra directamente `||` o `&&` como cortocircuito

<a id="clase-031"></a>
## Clase - 031. alert, confirm y prompt .js
Archivo: `Clase - 031. alert, confirm y prompt .js`
- Uso de `window.alert`, `window.confirm`, `window.prompt`
- Registro de resultados en consola

<a id="clase-032"></a>
## Clase - 032. Expresiones Regulares.js
Archivo: `Clase - 032. Expresiones Regulares.js`
- `RegExp` y literales `/.../i`
- `test()` para validar coincidencia

<a id="clase-033"></a>
## Clase - 033. Funciones Anonimas Autoejecutables.js
Archivo: `Clase - 033. Funciones Anónimas Autoejecutables.js`
- IIFE (Immediately Invoked Function Expressions)
- Paso de `document`, `window` y `console`

<a id="clase-034a"></a>
## Clase - 034. Artimetica.js
Archivo: `Clase - 034. Artimetica.js`
- Modulo ES con funciones `suma`, `resta`, `multiplicacion`, `division`
- `modulo` declarado pero no exportado

<a id="clase-034b"></a>
## Clase - 034. Modulos import export.js
Archivo: `Clase - 034. Módulos import  export .js`
- Importacion de funciones desde otros modulos
- Ejecucion de operaciones aritmeticas

<a id="clase-034c"></a>
## Clase - 034. Variables.js
Archivo: `Clase - 034. Variables.js`
- Exportacion nombrada de constante `nombre`

<a id="clase-035"></a>
## Clase - 035. Temporizadores (setTimeout & setInterval).js
Archivo: `Clase - 035. Temporizadores (setTimeout & setInterval).js`
- Solo imprime "Hola Mundo" (no muestra temporizadores aun)

<a id="clase-036"></a>
## Clase - 036. Asincronia y el Event Loop.js
Archivo: `Clase - 036. Asincronía y el Event Loop.js`
- Comparacion de ejecucion sincrona vs asincrona
- Uso de `setTimeout` para ver el orden de ejecucion

<a id="clase-037"></a>
## Clase - 037. Callbacks.js
Archivo: `Clase - 037. Callbacks.js`
- Callback asincrono con `setTimeout`
- Ejemplo de anidacion (callback hell)

<a id="clase-038"></a>
## Clase - 038. Promesas.js
Archivo: `Clase - 038. Promesas.js`
- Promesa que valida tipo de dato
- Encadenamiento de `then` y `catch`

<a id="clase-039"></a>
## Clase - 039. Async - Await.js
Archivo: `Clase - 039. Async - Await.js`
- Uso de `async/await` con `try/catch`
- Ejemplo con funcion declarada y expresada

<a id="clase-040"></a>
## Clase - 040. Symbols.js
Archivo: `Clase - 040. Symbols.js`
- Simbolos como valores unicos
- Uso de symbol como clave de propiedad
- Diferencia entre `persona[NOMBRE]` y `persona.NOMBRE`

<a id="clase-041"></a>
## Clase - 041. Maps.js
Archivo: `Clase - 041. Maps.js`
- `Map` con `set`, `has`, `size`
- Iteracion de pares clave/valor
- `keys()` y `values()` como arrays

<a id="clase-042"></a>
## Clase - 042. Sets.js
Archivo: `Clase - 042. Sets.js`
- `Set` elimina duplicados
- `add`, `has`, `size`
- Recorridos con `for...of` y `forEach`
- Conversion a array con `Array.from`

<a id="clase-043"></a>
## Clase - 043. WeakSets & WeakMaps.js
Archivo: `Clase - 043. WeakSets & WeakMaps.js`
- Ejemplo activo con `WeakMap`
- `WeakSet` comentado, sugiere comportamiento con GC

<a id="clase-044"></a>
## Clase - 044. Iterables & Iterators.js
Archivo: `Clase - 044. Iterables & Iterators.js`
- `Symbol.iterator` y `next()`
- Recorrido manual de un iterador

<a id="clase-045"></a>
## Clase - 045. Generators.js
Archivo: `Clase - 045. Generators.js`
- Generadores con `function*` y `yield`
- Iteracion con `for...of` y spread

<a id="clase-046"></a>
## Clase - 046. Proxies.js
Archivo: `Clase - 046. Proxies.js`
- `Proxy` con trampa `set`
- Validacion de propiedades antes de asignar

<a id="clase-047"></a>
## Clase - 047. Web Apis.js
Archivo: `Clase - 047. Web Apis.js`
- Uso basico de `speechSynthesis` para leer texto

<a id="clase-048"></a>
## Clase - 048. DOM Introduccion.js
Archivo: `Clase - 048. DOM Introduccion.js`
- Objetos principales del DOM y colecciones (forms, links, images)
- `getSelection()` para texto seleccionado

<a id="clase-049"></a>
## Clase - 049. DOM Atributos y Data-Attributes.js
Archivo: `Clase - 049. DOM Atributos y Data-Attributes.js`
- `getAttribute` y `setAttribute`
- `dataset` y atributos `data-*`
- Modificacion de `lang`, `href`, `target`

<a id="clase-050"></a>
## Clase - 050. DOM Nodos, Elementos y Selectores.js
Archivo: `Clase - 050. DOM Nodos, Elementos y Selectores.js`
- Selectores clasicos y modernos: `getElementsBy*` y `querySelector`

<a id="clase-051"></a>
## Clase - 051. DOM Estilos y Variables CSS.js
Archivo: `Clase - 051. DOM Estilos y Variables CSS.js`
- Lectura y escritura de estilos inline
- `getComputedStyle` y CSS custom properties
- Actualizacion de variables CSS en `:root`

<a id="clase-052"></a>
## Clase - 052. DOM Clases CSS.js
Archivo: `Clase - 052. DOM Clases CSS.js`
- `className`, `classList`, `contains`
- `toggle` para activar/desactivar clases

<a id="clase-053"></a>
## Clase - 053. DOM Texto y HTML.js
Archivo: `Clase - 053. DOM Texto y HTML.js`
- Uso de `textContent` para insertar texto largo
- Estilos en linea para un parrafo

<a id="clase-054"></a>
## Clase - 054. DOM Traversing Recorriendo el DOM.js
Archivo: `Clase - 054. DOM Traversing Recorriendo el DOM.js`
- Navegacion del DOM: `children`, `parentElement`, `firstElementChild`, `lastElementChild`

<a id="clase-055"></a>
## Clase - 055. DOM Creando Elementos y Fragmentos.js
Archivo: `Clase - 055. DOM Creando Elementos y Fragmentos.js`
- Creacion de elementos con `document.createElement`
- `appendChild` y estructura de `figure` + `img` + `figcaption`

<a id="clase-056"></a>
## Clase - 056. Templates HTML.js
Archivo: `Clase - 056. Templates HTML.js`
- Uso de `template` y `document.importNode`
- `DocumentFragment` para inserciones eficientes
- Render de tarjetas desde un arreglo de datos

<a id="clase-057"></a>
## Clase - 057. DOM Modificando elementos.js
Archivo: `Clase - 057. DOM Modificando elementos.js`
- `insertAdjacentElement` para insertar al final
- `innerHTML` para contenido de una nueva tarjeta

<a id="clase-058"></a>
## Clase - 058. DOM Manejadores de eventos.js
Archivo: `Clase - 058. DOM Manejadores de eventos.js`
- Asignacion de evento semantico con `onclick`
- Funcion handler que llama a otra funcion

<a id="clase-059"></a>
## Clase - 059. DOM Eventos con parametros y remover eventos.js
Archivo: `Clase - 059. DOM Eventos con parametros y remover eventos.js`
- Uso de `addEventListener` multiples
- Acceso a `event` y propiedades
- Remocion de evento con `removeEventListener`

<a id="clase-060"></a>
## Clase - 060. DOM Flujo de eventos (burbuja y captura).js
Archivo: `Clase - 060. DOM Flujo de eventos (burbuja y captura).js`
- Registro de eventos en fase de burbuja y captura

<a id="clase-061"></a>
## Clase - 061. DOM stopPropagation & preventDefault.js
Archivo: `Clase - 061. DOM stopPropagation & preventDefault.js`
- Archivo vacio (sin contenido)

<a id="clase-062"></a>
## Clase - 062. AJAX Introduccion.js
Archivo: `Clase - 062. AJAX Introducción.js`
- Archivo vacio (sin contenido)

<a id="clase-063"></a>
## Clase - 063. AJAX Objeto XMLHttpRequest.js
Archivo: `Clase - 063. AJAX Objeto XMLHttpRequest.js`
- Peticion XHR a JSONPlaceholder
- `readystatechange`, `readyState`, `status`
- Parseo de JSON y render en lista
- Manejo de error con `statusText`

<a id="clase-064"></a>
## Clase - 064. AJAX Api Fetch.js
Archivo: `Clase - 064. AJAX Api Fetch.js`
- Fetch con `res.ok` y `res.json()`
- Render de usuarios en el DOM
- Detalle: en el `catch` se usa `xhr` que no existe en ese archivo

<a id="clase-065"></a>
## Clase - 065. AJAX API Fetch + Async-Await.js
Archivo: `Clase - 065.  AJAX API Fetch + Async-Await.js`
- `fetch` con `async/await` y `try/catch`
- Render de usuarios en contenedor

<a id="clase-066"></a>
## Clase - 066. AJAX Libreria Axios.js
Archivo: `Clase - 066. AJAX Librería Axios.js`
- Peticion con Axios y render de usuarios
- Manejo de errores con `err.response`

<a id="clase-067"></a>
## Clase - 067. AJAX Libreria Axios + Async-Await.js
Archivo: `Clase - 067.  AJAX Librería Axios + Async-Await.js`
- Implementado con `fetch` (no Axios)
- Render y manejo de error con `try/catch`

<a id="clase-068"></a>
## Clase - 068. API REST Introduccion.js
Archivo: `Clase - 068. API REST Introducción.js`
- Explicacion teorica de API REST
- Metodos HTTP, JSON, y ejemplo de recursos

<a id="ajax-html"></a>
## AJAX.html
Archivo: `AJAX.html`
- Estructura base con contenedores para resultados AJAX
- Incluye Axios por CDN
- Carga `Clase - 068. API REST Introducción.js` (texto teorico)

<a id="dom-html"></a>
## DOM.html
Archivo: `DOM.html`
- Estructura de DOM para practicas (menu, cards, link con data-attributes)
- Referencia a script `Clase - 051. DOM Métodos de Selección.js` que no existe en la ruta

<a id="dom-estilos-html"></a>
## DOM Estilos y Variables CSS.html
Archivo: `DOM Estilos y Variables CSS.html`
- Hoja HTML con estilos CSS y variables `:root`
- Marca `template` para tarjetas reutilizables
- Script comentado

<a id="dom-flujo-html"></a>
## DOM Flujo de eventos (burbuja y captura).html
Archivo: `DOM Flujo de eventos (burbuja y captura).html`
- Estructura anidada para mostrar burbujeo/captura
- Incluye script `Clase - 061. DOM stopPropagation & preventDefault.js`

<a id="index-html"></a>
## index.html
Archivo: `index.html`
- Botones para eventos semanticos, multiples y remover eventos
- Carga `Clase - 059. DOM Eventos con parametros y remover eventos.js`

<a id="vscode-settings"></a>
## .vscode/settings.json
Archivo: `.vscode/settings.json`
- Configuracion de Live Server con nombre de workspace

---

Notas rapidas
- Algunos archivos tienen caracteres con codificacion no UTF-8 (se ven como "Ã¡", "Ã³").
- Hay dos archivos vacios (clases 061 y 062).
- `Clase - 064. AJAX Api Fetch.js` usa `xhr` en el `catch`, lo cual puede romper el manejo de errores.
- `Clase - 067.  AJAX Librería Axios + Async-Await.js` usa `fetch` en lugar de Axios.
- `DOM.html` referencia un script que no esta en la carpeta.
