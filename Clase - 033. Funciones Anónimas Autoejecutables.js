alert("Hola desde la función anónima autoejecutable")

((function() {
    alert("Hola, soy una función anónima autoejecutable");
})())


(function(a,b,c){
    console.log("Mi segundo mensaje desde una función anónima autoejecutable");
    console.log(a);
    console.log(b);
    console.log(c);
})(document, window, console)

