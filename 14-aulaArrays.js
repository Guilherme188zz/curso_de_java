/*28/04/26*/

/*
Arrays 📜 (listas)

Utilização: Sempre que qualquer uma lista de valores,
lsita de numbers, de objetos, de tags Html e assim por diante

Vantagens:
-Otimiza o Procesamento 
-Armazanamento de mais dados em uma variavel

caracteristicas:
-Representação[item1, item2...]
-São iteraveis
-São indexadas em zero
-São editaveis(mesmo se fotem const)
-pertevem a classe object
*/

const arraysStrings = ['livro', 'agenda', 'mouse', 'celular', 'copo']

const arrayMisto = [10, 'oi', true]

for(let i = 0; i < arraysStrings.length; i++){
    console.log(arraysStrings[i]. toUpperCase())
}

console.log(...arraysStrings)

arraysStrings.forEach(
    (palavra) => console.log(palavra.toUpperCase())
)

//indexação
const arrayBunebers = [0, 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10]
console.log(arrayBunebers[0])
console.log(arrayBunebers[1])
console.log(arrayBunebers[2])
console.log(arrayBunebers[arrayBunebers.length - 1])
console.log(arrayBunebers[arrayBunebers])//indefined
console.log(arrayBunebers[11])//indefined

//slicing
console.log(arrayBunebers.slice(0, 5))//
console.log(arrayBunebers.slice(5, ))//

//metodos de arrays
const frutas = ['laranja', 'abacate', 'uva', 'melancia']

//adicionar itens a uma lista
frutas.push('banana')
console.log(frutas)

//adicin=ona varios
frutas.unshift('acerola', 'morango', 'goiaba')//adiciona ao inicio

//remover itens de uma lista
const ultimaFruta = frutas.pop()//remove o ultimo por padrão e retorna
console.log(ultimaFruta)
console.log(frutas)

//remoçaõ de mais de 1
frutas.shift()//remove o primeiro e retorna
console.log(frutas)

//remover por posição
const index = frutas.indexOf('uva')
frutas.splice(0, 1)
console.log(frutas)

//Metodos utilitarios

console.log('Encontrar a posição de um elemento', frutas.indexOf('Laranja'))
console.log('Montar uma string', frutas.join(' ->'))
console.log('Verificando a presença no array', frutas.includes('melancia'))

const FrutasMenores= frutas.filter((value) => value.length < 5 ? value : null)
console.log(FrutasMenores)

//fazer compração do maior da lista
const numeros = [1,4,6,8, 3]
let maiorValor = 0

numeros.forEach((numero) => {
    if(numero > maiorValor){
        maiorValor = numero
    }
})

console.log(maiorValor)