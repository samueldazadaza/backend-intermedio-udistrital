function calcular(base, altura){
    //let = para variable de ambito local (recomendado)
    //var = para ambito global
    //constante = valor que una vez asignado nunca cambia
    const area = base*altura;
    const perimetro = 2*(base + altura);

    //Valores que retorna la función a quien la llama
    return [area, perimetro];
}

//ejercicio = 
function calcular_hipotenusa(a, b){

    //Math.pow(a,2) //elevar al cuadrado
    const hipotenusa = Math.sqrt(a**2 + b**2); // ** para elevar al exponente
    return hipotenusa;

}

let resultado = calcular_hipotenusa(7,4)
console.log(resultado)




// //Esta función retorna valores

// let resultado = calcular(5,4);

// //Imprimir el área

// console.log(resultado[0])
// console.log(resultado[1])