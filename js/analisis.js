//Helpers

function busquedaDePersona(personEnBusqueda){

    const buscador = salarios.find(persona => persona.name == personEnBusqueda);
    return buscador
}

//Mediana
function medianaPorPersona(nombrePersona) {
    
    const trabajos = busquedaDePersona(nombrePersona).trabajos;

    const IncrementoSalario = trabajos.map(trabajo => trabajo.salario);

    const medianaSalarios = FormulasMath.calcularMediana(IncrementoSalario);

    return medianaSalarios;
}

medianaPorPersona('Juanita');


//Proyeccion por persona
function proyeccionSalarial(nombrePersona){

    const trabajos = busquedaDePersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = []

    for (let i = 1; i < trabajos.length; i++) {

        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
    
    const medianaCrecimiento = FormulasMath.calcularMediana(porcentajesCrecimiento);

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaCrecimiento;

    const nuevoSalario = Math.round(ultimoSalario + aumento);
    
    // console.log(nuevoSalario);
    return nuevoSalario;
    //Resultado 1488
}

proyeccionSalarial('Juanita');

//Analisis salarial por empresa
let empresas = {};

salarios.forEach(persona => {

    persona.trabajos.forEach(trabajo => {

        if (!empresas[trabajo.empresa]){

            empresas[trabajo.empresa] = {};
        }

        if (!empresas[trabajo.empresa][trabajo.year]) {
            
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    })
})

// console.log(empresas)

function medianaEmpresaYear(nombre, year) {
    
    if (!empresas[nombre]) {
        
        console.warn('La empresa no existe');
        return;

    }else if(!empresas[nombre][year]){

        console.warn('La empresa no dio salarios ese año');
        return;
    
    }else{

        const mediana = FormulasMath.calcularMediana(empresas[nombre][year]);
        return mediana;
    }
    
}

medianaEmpresaYear('Freelance', 2020);

const result = document.querySelector('.result');

function proyeccionSalarialEmpresa(nombreEmpresa, year){

    const trabajos = empresas[nombreEmpresa][year];

    let porcentajesCrecimiento = []

    for (let i = 1; i < trabajos.length; i++) {

        const salarioActual = trabajos[i];
        const salarioPasado = trabajos[i - 1];
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
    
    const medianaCrecimiento = FormulasMath.calcularMediana(porcentajesCrecimiento);

    const ultimoSalario = trabajos[trabajos.length - 1];
    const aumento = ultimoSalario * medianaCrecimiento;

    const nuevoSalario = Math.round(ultimoSalario + aumento);
    
    
    const orden = trabajos.sort((a,b) => a - b);
    const sueldoMasBajo = orden[0]; 
    const sueldoMasAlto = orden[orden.length - 1];

    const p1 = document.createElement('p');
    p1.textContent = `El sueldo mas bajo para esta empresa fue: ${sueldoMasBajo}`;
    result.append(p1);

    const p2 = document.createElement('p');
    p2.textContent = `El sueldo mas alto para esta empresa fue: ${sueldoMasAlto}`;
    result.append(p2);
    
    const p3 = document.createElement('p');

    if (!nuevoSalario) {
        
        p3.textContent = 'No tenemos suficientes datos para darte el aumento del siguiente año';
        result.append(p3);
        
    }else{

        p3.textContent = `Es probable que sus sueldos tengan un aumento de: ${nuevoSalario} el proximo año`;
        result.append(p3);
    }
}

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    result.textContent = '';

    const options = document.querySelector('#bussines');
    const bussinesSelected = String(options.value);

    const years = document.querySelector('#years');
    const yearsSelected = Number(years.value);
    
    if(!empresas[bussinesSelected][yearsSelected]){

        result.textContent = 'Perdonanos, no tenemos informacion para ese año, intenta con otro';

    }else{

        console.log(bussinesSelected);
        console.log(yearsSelected);
        proyeccionSalarialEmpresa(bussinesSelected, yearsSelected);
    }

});


//Analisis salarial por empresa version Juanda de Platzi
function proyeccionEmpresa(nombreEmpresa){

    if (!empresas[nombreEmpresa]) {
        
        console.warn('Esa empresas no existe');

    } else {
        
        const empresaYears = Object.keys(empresas[nombreEmpresa]);
        const listaMedianaYears = empresaYears.map((year) => {

            return medianaEmpresaYear(nombreEmpresa, year);
        })
        
        let porcentajesCrecimiento = [];
    
        for (let i = 1; i < listaMedianaYears.length; i++) {
    
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }
        
        const medianaCrecimiento = FormulasMath.calcularMediana(porcentajesCrecimiento);
    
        const ultimaMedianaSalario = listaMedianaYears[listaMedianaYears.length - 1];
        const aumento = ultimaMedianaSalario * medianaCrecimiento;
    
        const nuevaMedianaSalario = Math.round(ultimaMedianaSalario + aumento);
    
        return nuevaMedianaSalario;
    }
    
}

//Analisis top 10% de salarios

function medianaGeneral(){

    const listaMedianasPorPersona = salarios.map(persona => {
        
        return medianaPorPersona(persona.name);
    });

    const mediana = FormulasMath.calcularMediana(listaMedianasPorPersona);
    console.log(listaMedianasPorPersona);
    console.log(mediana);
}

medianaGeneral();

function medianaGeneralTop10(){

    const listaMedianasPorPersona = salarios.map(persona => {
        
        return medianaPorPersona(persona.name);
    });

    const medianasOrdenadas = FormulasMath.ordenarLista(listaMedianasPorPersona);
    
    console.log(medianasOrdenadas);
}