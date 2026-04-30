/*29/04/26*/


//tentativas
// function composiçãonumeral(a, b ,c){
//     console.log(`${a} centenas, ${b} dezenas, ${c} unidades`)
// }

// composiçãonumeral(234)



// function composiçãonumeral1(abc){
//     let centenas = abc >= 100 || abc <= 999
//     let dezenas = abc < 100 || abc <= 10
//     let unidades = abc < 10 || abc >= 0
//     return `${centenas} centenas, ${dezenas} dezenas, ${unidades} unidades`
// }

// composiçãonumeral1(234)


//jeito certo
function decompomNumero(numero){
    const centenas = parseInt(numero / 100)
    const dezenas = parseInt(numero % 100 / 10)
    const unidades = parseInt(numero % 10)
    console.log(`${centenas} centenas, ${dezenas} dezenas, ${unidades} unidades`)
}

decompomNumero(456)
decompomNumero(789)
decompomNumero(098)