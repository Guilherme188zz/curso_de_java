/* 23/04/26 */
/*
Operadores de comparação 
Utilização: Sempre que precisamos criar uma expressão
Lógica ou comparação para nossas estruturas condicionais 

São eles:

== ➡️ iugal a
===➡️ Estritamente igual a 
!= ➡️ Diferente de
!==➡️ Estritamente diferente de
>  ➡️ maior que
<  ➡️ menor que 
>= ➡️ maior ou igual a 
<= ➡️ menor ou igual a
*/

//igualdade
// da certo mas fica aberto
console.log(10 == '10')
// ele compara bem especifico como um e numero e outro string
console.log(10 === '10')
console.log(10 === 10)
console.log(10 === 10.0)
// maiusculo muda de minusculo, interfere na vericicação
console.log('senha123' === 'senha123')
console.log('senha123' === 'Senha123')

//diferente
console.log(10 != '10')
console.log(10 !== '10')
console.log(10 !== 10)
console.log(10 !== 10.0)
console.log('senha123' !== 'senha123')
console.log('senha123' !== 'Senha123')

//maior que
console.log(10 > 2)
console.log( 10 > 2 * 6)
console.log('senha123'.length > 8)

//menor que
console.log(10 < 2)
console.log( 10 < 2 * 6)
console.log('senha123'.length < 8)

//maior ou igual a
console.log(10 >= 2)
console.log( 10 >= 2 * 6)
console.log('senha123'.length >= 8)

//menor ou igaul a
console.log(10 <= 2)
console.log( 10 <= 2 * 6)
console.log('senha123'.length <= 8)

