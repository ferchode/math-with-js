const prom = (value)=>{

    const total = value.reduce((suma, num) => (
        suma + num
    ), 0)

    const result = total / value.length

    console.log(result)
}

function esPar (value){
    return !(value.length % 2);
}

function esImpar (value){
    return value.length % 2;
}

function calcularMediana(value){

    const listaEsPar = esPar(value);

    if (listaEsPar) {
        
        const arrayOrdenado = value.sort((a,b) => a - b);

        const valor1 = arrayOrdenado[(arrayOrdenado.length / 2) - 1];
        const valor2 = arrayOrdenado[arrayOrdenado.length / 2];
        
        const newArray = [valor1, valor2];
        
        const result = prom3(newArray)
        
        console.log(result)
        
    }
    else{
        
        const arrayOrdenado = value.sort((a,b) => a - b);
        const indexMedianaImpar = Math.floor(arrayOrdenado.length / 2);
        const medianaImpar = arrayOrdenado[indexMedianaImpar];
        console.log(medianaImpar);
    }
}

const encontrandoModa = (array) => {

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

const salarios = [];
salarios.push({
    name: 'Juanita',
    trabajos: [
        { year: 2018, empresa: 'Freelance', salario: 250, },
        { year: 2019, empresa: 'Freelance', salario: 250, },
        { year: 2020, empresa: 'Industrias Mokepon', salario: 850, },
        { year: 2021, empresa: 'Industrias Mokepon', salario: 1050, },
        { year: 2022, empresa: 'Industrias Mokepon', salario: 1250, },
        { year: 2023, empresa: 'Industrias Mokepon', salario: 1250, },
    
    // { year: 2024, salario: ?, },
],
});
salarios.push({
    name: 'Alex',
    trabajos: [
        { year: 2018, empresa: 'Freelance', salario: 450, },
        { year: 2019, empresa: 'Freelance', salario: 550, },
        { year: 2020, empresa: 'Freelance', salario: 400, },
        { year: 2021, empresa: 'Industrias Mokepon', salario: 1050, },
        { year: 2022, empresa: 'Industrias Mokepon', salario: 1250, },
        { year: 2023, empresa: 'Industrias Mokepon', salario: 1250, },
    ],
});
salarios.push({
    name: 'Nath',
    trabajos: [
        { year: 2018, empresa: 'Freelance', salario: 600, },
        { year: 2019, empresa: 'Freelance', salario: 625, },
        { year: 2020, empresa: 'Freelance', salario: 575, },
        { year: 2021, empresa: 'MarketerosCOL', salario: 1000, },
        { year: 2022, empresa: 'MarketerosCOL', salario: 1000, },
        { year: 2023, empresa: 'MarketerosCOL', salario: 1100, },
    ],
});
salarios.push({
    name: 'Julia',
    trabajos: [
        { year: 2018, empresa: 'MarketerosCOL', salario: 1000, },
        { year: 2019, empresa: 'MarketerosCOL', salario: 2000, },
        { year: 2020, empresa: 'MarketerosCOL', salario: 2000, },
        { year: 2021, empresa: 'MarketerosCOL', salario: 2000, },
        { year: 2022, empresa: 'MarketerosCOL', salario: 2000, },
        { year: 2023, empresa: 'MarketerosCOL', salario: 2000, },
    ],
});
salarios.push({
    name: 'Jonatan',
    trabajos: [
        { year: 2019, empresa: 'MarketerosCOL', salario: 1000, },
        { year: 2020, empresa: 'MarketerosCOL', salario: 1000, },
        { year: 2021, empresa: 'MarketerosCOL', salario: 800, },
        { year: 2022, empresa: 'MarketerosCOL', salario: 900, },
        { year: 2023, empresa: 'MarketerosCOL', salario: 1000, },
    ],
});
salarios.push({
    name: 'Armando',
    trabajos: [
        { year: 2018, empresa: 'Freelance', salario: 750, },
        { year: 2019, empresa: 'Freelance', salario: 750, },
        { year: 2020, empresa: 'Freelance', salario: 750, },
        { year: 2021, empresa: 'Freelance', salario: 850, },
        { year: 2022, empresa: 'Freelance', salario: 850, },
        { year: 2023, empresa: 'Freelance', salario: 850, },
    ],
});
salarios.push({
    name: 'Dilan',
    trabajos: [
        { year: 2018, empresa: 'Freelance', salario: 500, },
        { year: 2019, empresa: 'Freelance', salario: 500, },
        { year: 2020, empresa: 'Freelance', salario: 600, },
        { year: 2021, empresa: 'Mokepon', salario: 1100, },
        { year: 2022, empresa: 'Mokepon', salario: 1100, },
        { year: 2023, empresa: 'Mokepon', salario: 1100, },
    ],
});
salarios.push({
    name: 'Zamir',
    trabajos: [
        { year: 2018, empresa: 'Freelance', salario: 400, },
        { year: 2019, empresa: 'Freelance', salario: 500, },
        { year: 2020, empresa: 'Freelance', salario: 500, },
        { year: 2021, empresa: 'Mokepon', salario: 1100, },
        { year: 2022, empresa: 'Mokepon', salario: 1100, },
        { year: 2023, empresa: 'Mokepon', salario: 1200, },
    ],
});
salarios.push({
    name: 'Daniela',
    trabajos: [
        { year: 2018, empresa: 'Freelance', salario: 500, },
        { year: 2019, empresa: 'Freelance', salario: 500, },
        { year: 2020, empresa: 'Freelance', salario: 500, },
        { year: 2021, empresa: 'Freelance', salario: 550, },
        { year: 2022, empresa: 'Freelance', salario: 550, },
        { year: 2023, empresa: 'MarketerosCOL', salario: 850, },
    ],
});
salarios.push({
    name: 'Daniel',
    trabajos: [
        { year: 2020, empresa: 'Freelance', salario: 150, },
        { year: 2021, empresa: 'Freelance', salario: 450, },
        { year: 2022, empresa: 'Freelance', salario: 550, },
        { year: 2023, empresa: 'Freelance', salario: 650, },
    ],
});
salarios.push({
    name: 'Rigoberto',
    trabajos: [
        { year: 2018, empresa: 'MarketerosCOL', salario: 700, },
        { year: 2019, empresa: 'MarketerosCOL', salario: 700, },
        { year: 2020, empresa: 'MarketerosCOL', salario: 700, },
        { year: 2021, empresa: 'MarketerosCOL', salario: 750, },
        { year: 2022, empresa: 'MarketerosCOL', salario: 750, },
        { year: 2023, empresa: 'MarketerosCOL', salario: 750, },
    ],
});
salarios.push({
    name: 'Alicia',
    trabajos: [
        { year: 2018, empresa: 'Inversionify', salario: 300, },
        { year: 2019, empresa: 'Inversionify', salario: 1700, },
        { year: 2020, empresa: 'Inversionify', salario: 2700, },
        { year: 2021, empresa: 'Inversionify', salario: 3750, },
        { year: 2022, empresa: 'Freelance', salario: 1550, },
        { year: 2023, empresa: 'Freelance', salario: 350, },
    ],
});
salarios.push({
    name: 'Teodoro',
    trabajos: [
        { year: 2018, empresa: 'Freelance', salario: 600, },
        { year: 2019, empresa: 'Freelance', salario: 700, },
        { year: 2020, empresa: 'Inversionify', salario: 1700, },
        { year: 2021, empresa: 'Inversionify', salario: 1750, },
        { year: 2022, empresa: 'Freelance', salario: 800, },
        { year: 2023, empresa: 'Freelance', salario: 850, },
    ],
});
salarios.push({
    name: 'Bruce',
    trabajos: [
        { year: 2018, empresa: 'Wayne Enterprises', salario: 4600, },
        { year: 2019, empresa: 'Wayne Enterprises', salario: 4700, },
        { year: 2020, empresa: 'Wayne Enterprises', salario: 3700, },
        { year: 2021, empresa: 'Wayne Enterprises', salario: 4150, },
        { year: 2022, empresa: 'Wayne Enterprises', salario: 4400, },
        { year: 2023, empresa: 'Wayne Enterprises', salario: 3850, },
    ],
});
salarios.push({
    name: 'Alfred',
    trabajos: [
        { year: 2018, empresa: 'Wayne Enterprises', salario: 2000, },
        { year: 2019, empresa: 'Wayne Enterprises', salario: 2000, },
        { year: 2020, empresa: 'Wayne Enterprises', salario: 1500, },
        { year: 2021, empresa: 'Wayne Enterprises', salario: 1500, },
        { year: 2022, empresa: 'Wayne Enterprises', salario: 2000, },
        { year: 2023, empresa: 'Wayne Enterprises', salario: 1500, },
    ],
});
salarios.push({
    name: 'Clark Kent',
    trabajos: [
        { year: 2018, empresa: 'Daily Planet', salario: 1000, },
        { year: 2019, empresa: 'Daily Planet', salario: 1500, },
        { year: 2020, empresa: 'Daily Planet', salario: 1000, },
        { year: 2021, empresa: 'Daily Planet', salario: 1500, },
        { year: 2022, empresa: 'Daily Planet', salario: 2000, },
        { year: 2023, empresa: 'Daily Planet', salario: 1500, },
    ],
});
salarios.push({
    name: 'Lois Lane',
    trabajos: [
        { year: 2018, empresa: 'Daily Planet', salario: 2000, },
        { year: 2019, empresa: 'Daily Planet', salario: 2500, },
        { year: 2020, empresa: 'Daily Planet', salario: 2000, },
        { year: 2021, empresa: 'Daily Planet', salario: 2500, },
        { year: 2022, empresa: 'Daily Planet', salario: 2500, },
        { year: 2023, empresa: 'Daily Planet', salario: 2500, },
    ],
});
salarios.push({
    name: 'Jimmy Olsen',
    trabajos: [
        { year: 2018, empresa: 'Daily Planet', salario: 1500, },
        { year: 2019, empresa: 'Daily Planet', salario: 2000, },
        { year: 2020, empresa: 'Daily Planet', salario: 2000, },
        { year: 2021, empresa: 'Daily Planet', salario: 2500, },
        { year: 2022, empresa: 'Daily Planet', salario: 2500, },
        { year: 2023, empresa: 'Daily Planet', salario: 1500, },
    ],
});
salarios.push({
    name: 'Perry White',
    trabajos: [
        { year: 2018, empresa: 'Daily Planet', salario: 3500, },
        { year: 2019, empresa: 'Daily Planet', salario: 3700, },
        { year: 2020, empresa: 'Daily Planet', salario: 3800, },
        { year: 2021, empresa: 'Daily Planet', salario: 4000, },
        { year: 2022, empresa: 'Daily Planet', salario: 4050, },
        { year: 2023, empresa: 'Daily Planet', salario: 4050, },
    ],
});
salarios.push({
    name: 'Lex Luthor',
    trabajos: [
        { year: 2018, empresa: 'LexCorp', salario: 5000, },
        { year: 2019, empresa: 'LexCorp', salario: 5300, },
        { year: 2020, empresa: 'LexCorp', salario: 4000, },
        { year: 2021, empresa: 'LexCorp', salario: 3000, },
        { year: 2022, empresa: 'LexCorp', salario: 3500, },
        { year: 2023, empresa: 'LexCorp', salario: 3050, },
    ],
});