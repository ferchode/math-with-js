//Descuento = [(Precio * (100 - descuento)) / 100]
let button = document.querySelector('.btn');
button.addEventListener('click', valor);

let inputValor = document.querySelector('.valorArt');
let inputDesc = document.querySelector('.descuento');

let resultSpace = document.querySelector('.resultado');

let cupones = [

    {nombre:"CUPON10", valor: 10},

    {nombre:"CUPON20", valor: 20},

    {nombre:"CUPON30", valor: 30}
];



function valor (){

    let valueInput = inputValor.value;
    let valueDiscount = inputDesc.value;
    let buscarCupones = cupones.find( function(cupon){ 

        return cupon.nombre === valueDiscount;
      
      })
  
    if (buscarCupones === valueDiscount) {
        
        console.log('funciona')
    }

}


// function valor() {

//     let valueInput = inputValor.value;
//     let valueDiscount = inputDesc.value;
//     let discount;

    

//     if(!valueInput){


//         alert('Dale pon el precio, dame contenido')

    
//     }else if(valueDiscount == 'CUPON10'){
   
//         discount = 10

//             let resultado = (valueInput * (100 - discount) / 100)

//             let pR = document.createTextNode(`Tu compra de adulto independiente con descuento tendra un valor de $${resultado}!!!`);

//             resultSpace.append(pR);

//     }else if(valueDiscount == 'CUPON20'){
   
//         discount = 20

//             let resultado = (valueInput * (100 - discount) / 100)

//             let pR = document.createTextNode(`Tu compra de adulto independiente con descuento tendra un valor de $${resultado}!!!`);

//             resultSpace.append(pR);

//     }else if(valueDiscount != 'CUPON10'){

//         alert('Cupon invalido sogcio');

//     }else if (valueDiscount != 'CUPON20') {
        
//         alert('Cupon invalido sogcio');

//     }
 

// }


