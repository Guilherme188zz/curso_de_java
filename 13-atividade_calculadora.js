/*27/04/26*/


//deu erro
// let numero = 5

// for(let i = 0; i <=numero; i++){
//     if(i * 2){
//         console.log(`${i}.`)
//     } else {
//         console.log('não encontrado calculo')
//     }
// }


//jeito certo
// const numero = 5

//     for(let i = 0; i <= 10; i++){
//         resultado = numero * i
//         console.log(`${numero} X ${i} = ${resultado}`)
//     }


const quantidadeDespesas = 3
const despesas =[10, 25, 20]
let totalGasto = 0 

for(let i = 0; i < quantidadeDespesas; i++){
    totalGasto += despesas[i]
}

console.log(`Você gastou um total de R$ ${totalGasto.toFixed(2)}`)