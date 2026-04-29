/*28/24/26*/

/*
loop for 🔁
Utilização: Sempre que precisamos reétir uma parte do codigo, porem 
de forma contado, ou seja, determinamos previamente qaundatas vezes 
aquele bloco se repete

plavras novas:
-for

Vantagens: 
-Maior agilidade no desenvolvimento
-Maior controle sobre as repetições
-Aplicação de funções/efeitos em varios componentes de uma vez
sixtaxe:
for(let i = 0; i < 10; i ++){
    bloco do for
}
*/
let somador = 0 

for(let i = 0; i <= 10; i++){
    somador += i
}

console.log(somador)

const valor = 20

for(let i = 0; i <= valor; i++){
    if(i % 2 === 0){
        console.log(`${i} é par`)
    } else {
        console.log(`${i} é impar`)
    }
}