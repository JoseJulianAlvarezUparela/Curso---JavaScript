(() => {
    console.log('Inicio');

    function dos() {
        console.log('Dos');
    }

    function uno() {
        console.log('Uno');
        dos();

    }

    uno();
    console.log('Fin');
})();

console.log('------------------');


// codigo asincrono

(() => {
    console.log('Inicio');

    function dos() {
        setTimeout(function() {
            console.log('Dos');
        }, 1000);
    }

    function uno() {
        setTimeout(function() {
            console.log('Uno');
        }, 0);
        dos();
    }

    uno();
    console.log('Fin');
    
})()    