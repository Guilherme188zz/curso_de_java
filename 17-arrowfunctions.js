/*29/04/26*/

/*
Arrow Functions 🏹

Utilização Sempre que precisamos de uma função de callback,
ou se precisamos de uma função norma também, é muito utilizado mesmo

Vantagens:
-funções simples
-no callback elassão anônimas então ocupam memórias

Aplicações:
-Funções nativas
-Funções importadas
-componentes React.js
-componentes Vue.js
-textos unitarios com jest

Sintaxe:
() => o que ele vai retornar já
*/

const dobrar = (n) => n * 2
console.log(dobrar(2))
console.log(dobrar(3))
console.log(dobrar(4))

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let listaQuadrados = []
let listaPares = []
let somaNumeros = 0

listaQuadrados = numeros.map((value, index, array) => value ** 2) 
console.log(listaQuadrados)

//em baixo vocÊ vê um jeito mais simples de escrever e ler
listaPares = numeros.filter((value) => {
    if(value  % 2 == 0){
        return value
    }
})
//outro jeito de escrever o de cima
listaPares = numeros.filter((value) => value % 2 == 0 ? value : null)
console.log(listaPares)


somaNumeros = numero.reduce((previous, current, index) => previous + current)
    console.log(somaNumeros)