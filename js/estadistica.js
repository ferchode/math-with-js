const values = [1,2,3,4,5,6,7,8,9]
const values2 = [100,20,350,48,54,600,712,849,900]
const list = ['🍕','🍔','🍟','🌭','🥓','🥓','🍔','🍕','🍔','🍔','🍔'];

// Formulas
const FormulasMath = {};

FormulasMath.esPar = function esPar (value){
    return !(value.length % 2);
}

FormulasMath.esImpar = function esImpar (value){
    return value.length % 2;
}

FormulasMath.calcularModa = function calcularModa(array){

    const listaCount = {};
    
    array.forEach(element => {

        if (listaCount[element]) {
            
            listaCount[element] += 1;
            
        }else{

            listaCount[element] = 1;

        }
    })

    const newArray = Object.entries(listaCount);

    const ordenandoArray = newArray.sort((a,b) => b[1] - a[1])

    const moda = ordenandoArray[0][1];
    const elementModa = ordenandoArray[0][0]
    
    console.log(`La moda es: ${moda} y contiene: ${elementModa}`)

}

FormulasMath.calcularMediana = function calcularMediana(value){

    const listaEsPar = FormulasMath.esPar(value);

    if (listaEsPar) {
        
        const arrayOrdenado = value.sort((a,b) => a - b);

        const valor1 = arrayOrdenado[(arrayOrdenado.length / 2) - 1];
        const valor2 = arrayOrdenado[arrayOrdenado.length / 2];
        
        const newArray = [valor1, valor2];
        
        const result = FormulasMath.calcularPromedio(newArray)
        
        return result;
        
    }
    else{
        
        const arrayOrdenado = value.sort((a,b) => a - b);
        const indexMedianaImpar = Math.floor(arrayOrdenado.length / 2);
        const medianaImpar = arrayOrdenado[indexMedianaImpar];
        
        return medianaImpar;
    }
}

FormulasMath.calcularPromedio = function calcularPromedio (value){

    const total = value.reduce((suma, num) => (
        suma + num
    ), 0)

    const result = total / value.length

    return result
}