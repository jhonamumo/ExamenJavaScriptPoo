//Los dos arreglos deben tener el mismo tamaño y valores numericos como condición
let arregloUno = [3, 2, 1, 1, 2, 3, 2, 3, 1]; //Arreglo de muestra Uno
let arregloDos = [1, 1, 2, 2, 1, 1, 1, 2, 1]; //Arreglo de muestra Dos

console.log("Arreglo 1 ["+arregloUno+"]");
console.log("Arreglo 2 ["+arregloDos+"]");

arregloUno.forEach(
    function sumar(item, idx) {
        console.log("------------------------------");
        console.log(item+" + "+arregloDos[idx]+" = "+(item+arregloDos[idx]));
        console.log(item+" * "+arregloDos[idx]+" = "+(item*arregloDos[idx]));
    }
);
