//Calculo cuadrado - perimetro y area

function calculoCuadrado (lado){

    return {

        perimetro: lado * 4,
        area: lado**2
    }
}

console.log(calculoCuadrado(5));

//Calculo triangulo - perimetro y area

function calculoTriangulo (lado1, lado2, base, altura){

    return {
        perimetro: lado1+ lado2 + base,

        area: (base * altura) / 2 
    }

}

console.log(calculoTriangulo(7, 8, 10, 12));

//Calculo circulo - perimetro(circunferencia) y area 
//Radio = punto medio del circulo a un borde
//Diametro = radio * 2
//Perimetro = diametro(o radio * 2) * pi
//area = radio ^ 2 * pi
//Math.PI = Da el numero PI y si ponemos Math.PI.toFixed(#) podemos declarar la cantidad de decimales que queremos para la operacion.

function calculoCirculo (radio){

    return {
        
        perimetro: (radio * 2) * Math.PI,
        area: (radio ** 2) * Math.PI

    }
}

console.log(calculoCirculo(3));
