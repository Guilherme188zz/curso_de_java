/*28/04/29*/

// alert('Caixa Eletrônico')
// alert('1 - Depósito')
// alert('2 - Saque')
// alert('3 - Sair')

// let saldo = 1000;

// while(true){
//     if(){
//         let opção = prompt('Digite o que deseja: 1-Depósito, 2-Saque ou 3-Sair');

//         if(opção === '1'){
//             let deposito = parseFloat(prompt('Digite o valor do depósito'));

//             if(deposito > 0){
//                 saldo = saldo + deposito;
//                 alert('Depósito realizado! Saldo atual: R$ ' + saldo)
//             } else {
//                 alert('Valor inválido!')
//             }

//         } else if (opção == '2'){
//             let saque = parseFloat(prompt('Digite o valor desejado'));

//             if(saque > saldo){
//                 alert('Saldo insuficiente!')
//             } else {
//                 saldo = saldo - saque;
//                 alert(`Saque de ${saque} realizado! Saldo atual: R$ ` + saldo)
//             }

//         } else if (opção == '3'){
//             alert('Obrigado por utilizar o nosso banco!')
//             break;

//         } else {
//             alert('Opção inválida! Digite 1, 2 ou 3')
//         }

//     }
// }

let saldo = 0;
let operação = '';
let valorDeposito = 0;
let valorSaque = 0;

alert('Bem-vindo ao banco!');

while(true){
    console.log(saldo)
    alert('1- Depósito\n2- Saque\n3- Sair')
    operação = prompt('Digite a operação desejada')

    if(operação === '3'){
        alert('Volte sempre!')
        break

    } else if(operação === '1'){
        alert('--depósito--')
        valorDeposito = parseFloat(prompt('Digite o valor do depósito'))
        saldo += valorDeposito
        alert('Saldo atual: R$ ' + saldo)

    } else if(operação === '2'){
        alert('--saque--')
        valorSaque = parseFloat(prompt('Digite o valor do saque'))

        if(valorSaque <= saldo){
            saldo -= valorSaque
            alert('Saque realizado! Saldo: R$ ' + saldo)
        } else {
            alert('Saldo insuficiente!')
        }

    } else {
        alert('Operação inválida!')
    }
}
