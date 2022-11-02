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

//Altura de un triangulo isosceles

function calculoIsosceles(lado1, base) {

    let a = lado1 ** 2;
    let b = (base **2) / 4;
    let c = a - b;

    return Math.sqrt(c);

    
}

console.log(calculoIsosceles(30,12));


//Altura tirangulo escaleno

function calcularEscaleno(lado1, lado2, lado3){

    let s = (lado1 + lado2 + lado3) / 2;
    
    return 2 / lado1 * Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));
    
}

console.log(calcularEscaleno(6, 8, 10));