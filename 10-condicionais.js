/*23/04/26*/
/*
Estruturas condicionais 

Utilização: sempre que quisermos que o programa tome as 
proprias decisões.

Palavras novas:
-if (se)
-else (senão)
-else if(senão se)

Vantagens:
=maior controle sobre o fluxo de programa
-programa mais inteligente

sintaxe:
if(condição for verdadeira){
o que deve ser feito
}
*/

// const user = 'admin'
// const passoword = '12345'
// const auth = user === 'admin' && passoword ==='12345'

// if(auth){
//     console.log('Usuario adimn reconhecido')
// }
// console.log()

// //Contexto de estoque 
// const quantidadeMinima = 1000

// const codigoProduto = 'LED#10'
// const quantidadeProduto = 500

// if(quantidadeProduto < quantidadeMinima){
//     const quantidadeNecessaria = quantidadeMinima - quantidadeProduto
//     console.log('Quantidade abaixo do mínimo!')
//     console.log(`Comprar ${quantidadeNecessaria} unidades`)
// }
// console.log()

// //else

// //Contexto de estoque 
// const quantidadeMinima2 = 1000

// const codigoProduto2 = 'LED#10'
// const quantidadeProduto2 = 1100

// if(quantidadeProduto2 < quantidadeMinima2){
//     const quantidadeNecessaria2 = quantidadeMinima2 - quantidadeProduto2
//     console.log('Quantidade abaixo do mínimo!')
//     console.log(`Comprar ${quantidadeNecessaria2} unidades`)
// }
// else{
//     console.log('Quantidade ok!')
// }

//else if
 const quantidadeMinima3 = 1000

const codigoProduto3 = 'LED#10'
 const quantidadeProduto3 = 5000

if(quantidadeProduto3 < quantidadeMinima3 && quantidadeProduto3 >= 0){
    const quantidadeNecessaria3 = quantidadeMinima3 - quantidadeProduto3
    console.log('Quantidade abaixo do mínimo!')
    console.log(`Comprar ${quantidadeNecessaria3} unidades`)
}
 else if(quantidadeProduto3 >= quantidadeMinima3 && quantidadeProduto3 < 2000){
   console.log('Quantidade ok!')
 }
 else if(quantidadeProduto3 > 2000){
    const quantidadeVenda3 = quantidadeProduto3 - 2000
    console.log('Quantidade acima do máximo!')
    console.log(`Vender ${quantidadeVenda3} unidades`)
 } 
 else {
    console.log('QUantidade invalida')
 }